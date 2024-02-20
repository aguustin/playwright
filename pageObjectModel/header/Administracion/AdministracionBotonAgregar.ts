import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionBotonAgregar extends BasePage {

    readonly BOTON_CREAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_CREAR = this.page.locator('//input [@id="BTNAGREGAR"]')
    }

    async clickBotonAgregar(): Promise<void> {
        await this.click(this.BOTON_CREAR)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionBotonAgregar(): Promise<void> {
        await this.clickBotonAgregar()
    }
}
