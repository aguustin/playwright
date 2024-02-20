import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class PrestacionesFormulario extends BasePage {

    readonly TEXTAREA: Locator
    readonly BOTON_GUARDAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TEXTAREA = this.page.locator("(//textarea[@id='W0017CTLPRESTACIONDESCRIPCION'])[1]")
        this.BOTON_GUARDAR = this.page.locator('//input [@id="BTN_ENTER"]')
    }


    async clickFormularioIframe(): Promise<void> {
        const iframe = await this.page.waitForSelector('iframe#gxp0_ifrm')
        const formulario_iframe = await iframe.contentFrame()
        await this.page.waitForLoadState('domcontentloaded')
    }
    async completarPrestacionesFormulario(): Promise<void> {
        await this.fill(this.TEXTAREA, 'AUTOMATIZACION HOTELERIA')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickBotonGuardar(): Promise<void> {
        await this.click(this.BOTON_GUARDAR)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarGestionarCapacitacionesFormulario(): Promise<void> {
        await this.clickFormularioIframe()
        await this.completarPrestacionesFormulario()
        await this.clickBotonGuardar()
    }
}
