import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarCapacitaciones extends BasePage {

    readonly GESTIONAR_CAPACITACIONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GESTIONAR_CAPACITACIONES = this.page.locator('//span [@id="TEXTBLOCKCAPACITACIONES"]')
    }
    async clickGestionarCapacitaciones(): Promise<void> {
        await this.click(this.GESTIONAR_CAPACITACIONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }


    async navegarGestionarCapacitaciones(): Promise<void> {
        await this.clickGestionarCapacitaciones()
    }
}
