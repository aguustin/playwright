import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarPresencia extends BasePage {

    readonly PRESENCIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PRESENCIA = this.page.locator('//span [@id="TXTBLOCKTIPOPRESENCIA"]')
    }
    async clickGestionarPresencia(): Promise<void> {
        await this.click(this.PRESENCIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionGestionarPresencia(): Promise<void> {
        await this.clickGestionarPresencia()
    }
}
