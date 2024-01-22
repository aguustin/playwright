import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuQRMiniaplicacion extends BasePage {

    readonly QR_MINIAPP: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QR_MINIAPP = this.page.locator("(//img[@id='IMAGEQR_MPAGE'])[1]")
    }
    async clickMenuQRMiniaplicacion(): Promise<void> {
        await this.click(this.QR_MINIAPP)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }


    async navegarAccederMenuQRMiniaplicacion(): Promise<void> {
        await this.clickMenuQRMiniaplicacion()
    }
}
