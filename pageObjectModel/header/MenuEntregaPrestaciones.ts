import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuEntregaPrestaciones extends BasePage {

    readonly ENTREGA_PRESTACIONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ENTREGA_PRESTACIONES = this.page.locator('//img [@id="IMAGENENTREGARPRESTACIONES_MPAGE"]')
    }
    async clickMenuEntregaPrestaciones(): Promise<void> {
        await this.click(this.ENTREGA_PRESTACIONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }


    async navegarAccederMenuEntregaPrestaciones(): Promise<void> {
        await this.clickMenuEntregaPrestaciones()
    }
}
