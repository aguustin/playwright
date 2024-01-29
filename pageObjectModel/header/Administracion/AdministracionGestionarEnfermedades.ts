import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarEnfermedades extends BasePage {

    readonly ENFERMEDADES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ENFERMEDADES = this.page.locator("(//a[normalize-space()='Gestionar Enfermedades'])[1]")
    }
    async clickGestionarEnfermedades(): Promise<void> {
        await this.click(this.ENFERMEDADES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionGestionarEnfermedades(): Promise<void> {
        await this.clickGestionarEnfermedades()
    }
}
