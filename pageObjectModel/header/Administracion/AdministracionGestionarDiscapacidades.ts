import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarDiscapacidades extends BasePage {

    readonly DISCAPACIDADES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DISCAPACIDADES = this.page.locator("(//a[normalize-space()='Gestionar Discapacidades'])[1]")
    }
    async clickGestionarDiscapacidades(): Promise<void> {
        await this.click(this.DISCAPACIDADES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionGestionarDiscapacidades(): Promise<void> {
        await this.clickGestionarDiscapacidades()
    }
}
