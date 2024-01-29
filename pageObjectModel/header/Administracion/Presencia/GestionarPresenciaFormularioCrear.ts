import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class GestionarPresenciaFormularioCrear extends BasePage {

    readonly BUSCADOR_DESCRIPCION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BUSCADOR_DESCRIPCION = this.page.locator("(//input[@id='CAPACITACIONDESCRIPCION'])[1]")

    }
    async ingresoBuscadorDescripcion(): Promise<void> {
        const input = "(//input[@id='CAPACITACIONDESCRIPCION'])[1]"
        // await this.click(this.BUSCADOR_DESCRIPCION)
        await this.page.waitForSelector(input)
        await this.fill(this.BUSCADOR_DESCRIPCION, '')
        await this.fill(this.BUSCADOR_DESCRIPCION, '!"#$%&/()=?¡¿/*-+')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarGestionarPresenciaFormularioCrear(): Promise<void> {
        await this.ingresoBuscadorDescripcion()
    }
}
