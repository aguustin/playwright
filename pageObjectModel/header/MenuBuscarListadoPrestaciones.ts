import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuBuscarListadoPrestaciones extends BasePage {

    readonly LISTADO_PRESTACIONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LISTADO_PRESTACIONES = this.page.locator("(//img[@id='IMAGE4_MPAGE'])[1]")
    }
    async clickMenuBuscarListadoPrestaciones(): Promise<void> {
        await this.click(this.LISTADO_PRESTACIONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }


    async navegarAccederMenuBuscarListadoPrestaciones(): Promise<void> {
        await this.clickMenuBuscarListadoPrestaciones()
    }
}
