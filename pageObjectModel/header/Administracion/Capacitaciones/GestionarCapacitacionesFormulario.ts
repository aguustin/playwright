import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class GestionarCapacitacionesFormulario extends BasePage {

    // readonly FORMULARIO: Locator
    readonly BOTON_CREAR: Locator
    readonly DESCRIPCION_INPUT: Locator
    readonly BOTON_CONFIRMAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.FORMULARIO_IFRAME = this.page.locator()
        this.BOTON_CREAR = this.page.locator('//input [@id="BTNAGREGAR"]')
        this.DESCRIPCION_INPUT = this.page.locator("//input[@id='CAPACITACIONDESCRIPCION']")
        this.BOTON_CONFIRMAR = this.page.locator('//input [@id="BTN_ENTER"]')
    }

    async clickBotonAgregar(): Promise<void> {
        await this.click(this.BOTON_CREAR)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickFormularioIframe(): Promise<void> {
        const iframe = await this.page.waitForSelector("(//div[@id='gxp0_b'])[1]")
        const formulario_iframe = await iframe.contentFrame()
        await this.page.waitForLoadState('domcontentloaded')
    }
    async completarCapacitacionesFormulario(): Promise<void> {
        await this.fill(this.DESCRIPCION_INPUT, 'AUTOMATIZACION HOTELERIA')
    }
    async clickBotonConfirmar(): Promise<void> {
        await this.click(this.BOTON_CONFIRMAR)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarGestionarCapacitacionesFormulario(): Promise<void> {
        await this.clickBotonAgregar()
        await this.clickFormularioIframe()
        await this.completarCapacitacionesFormulario()
        await this.clickBotonConfirmar()
    }
}
