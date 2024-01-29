import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarCapacitaciones extends BasePage {

    readonly CAPACITACIONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CAPACITACIONES = this.page.locator("(//a[normalize-space()='Gestionar Capacitaciones'])[1]")
    }
    async clickGestionarCapacitaciones(): Promise<void> {
        await this.click(this.CAPACITACIONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionGestionarCapacitaciones(): Promise<void> {
        await this.clickGestionarCapacitaciones()
    }
}
