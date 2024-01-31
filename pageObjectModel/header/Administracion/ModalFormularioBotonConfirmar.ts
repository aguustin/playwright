import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class ModalFormularioBotonConfirmar extends BasePage {

    readonly BOTON_CONFIRMAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.BOTON_CONFIRMAR = this.page.locator("(//input[@id='BTN_ENTER'])[1]")
        this.BOTON_CONFIRMAR = this.page.locator('//input [@id="BTN_ENTER"]')
    }

    async clickBotonConfirmar(): Promise<void> {
        await this.click(this.BOTON_CONFIRMAR)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(13000)
    }

    async navegarModalFormularioBotonConfirmar(): Promise<void> {
        await this.clickBotonConfirmar()
    }
}
