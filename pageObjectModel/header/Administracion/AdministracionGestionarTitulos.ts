import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarTitulos extends BasePage {

    readonly TITULOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TITULOS = this.page.locator("(//a[normalize-space()='Gestionar Titulos'])[1]")
    }
    async clickGestionarTitulos(): Promise<void> {
        await this.click(this.TITULOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionGestionarTitulos(): Promise<void> {
        await this.clickGestionarTitulos()
    }
}
