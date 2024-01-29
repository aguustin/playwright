import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarNacionalidades extends BasePage {

    readonly NACIONALIDADES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.NACIONALIDADES = this.page.locator("(//a[normalize-space()='Gestionar Nacionalidades'])[1]")
    }
    async clickGestionarNacionalidades(): Promise<void> {
        await this.click(this.NACIONALIDADES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionGestionarNacionalidades(): Promise<void> {
        await this.clickGestionarNacionalidades()
    }
}
