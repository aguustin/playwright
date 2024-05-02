import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class Prestaciones extends BasePage {

    readonly PRESTACIONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)
        this.PRESTACIONES = this.page.locator('//span[@id="TEXTBLOCKPRESTACIONES"]')
    }

    async clickPrestaciones(): Promise<void> {
        await this.click(this.PRESTACIONES)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarPrestaciones(): Promise<void> {
        await this.clickPrestaciones()
    }
}
