import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuAccionesMasivas extends BasePage {

    readonly ACCIONES_MASIVAS_IMG: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACCIONES_MASIVAS_IMG = this.page.locator('//img [@id="IMAGEMASIVO_MPAGE"]')
    }
    async clickMenuAccionesMasivas(): Promise<void> {
        await this.click(this.ACCIONES_MASIVAS_IMG)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }


    async navegarAccederMenuAccionesMasivas(): Promise<void> {
        await this.clickMenuAccionesMasivas()
    }
}
