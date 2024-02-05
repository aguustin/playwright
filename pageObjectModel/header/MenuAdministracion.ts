import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuAdministracion extends BasePage {

    readonly ADMINISTRACION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ADMINISTRACION = this.page.locator("(//img[@id='IMAGEADMIN_MPAGE'])[1]")
    }
    async clickMenuAdministracion(): Promise<void> {
        const elemento = "(//img[@id='IMAGEADMIN_MPAGE'])[1]"
        await this.page.waitForSelector(elemento)
        await this.click(this.ADMINISTRACION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }


    async navegarAccederMenuAdministracion(): Promise<void> {
        await this.clickMenuAdministracion()
    }
}
