import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarIntereses extends BasePage {

    readonly INTERESES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.INTERESES = this.page.locator("(//a[normalize-space()='Gestionar Intereses'])[1]")
    }
    async clickGestionarIntereses(): Promise<void> {
        await this.click(this.INTERESES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionGestionarIntereses(): Promise<void> {
        await this.clickGestionarIntereses()
    }
}
