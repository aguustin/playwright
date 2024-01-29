import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarIdiomas extends BasePage {

    readonly IDIOMA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.IDIOMA = this.page.locator("(//a[normalize-space()='Gestionar Idiomas'])[1]")
    }
    async clickGestionarIdiomas(): Promise<void> {
        await this.click(this.IDIOMA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionGestionarIdiomas(): Promise<void> {
        await this.clickGestionarIdiomas()
    }
}
