import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarEstadoCivil extends BasePage {

    readonly ESTADO_CIVIL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESTADO_CIVIL = this.page.locator("(//a[normalize-space()='Gestionar Estado Civil'])[1]")
    }
    async clickGestionarEstadoCivil(): Promise<void> {
        await this.click(this.ESTADO_CIVIL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionGestionarEstadoCivil(): Promise<void> {
        await this.clickGestionarEstadoCivil()
    }
}
