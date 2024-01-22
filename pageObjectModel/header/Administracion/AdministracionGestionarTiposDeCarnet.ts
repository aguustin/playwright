import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarTiposDeCarnet extends BasePage {

    readonly TIPOS_CARNET: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TIPOS_CARNET = this.page.locator("(//a[normalize-space()='Gestionar Tipos de carnet'])[1]")
    }
    async clickGestionarTiposDeCarnet(): Promise<void> {
        await this.click(this.TIPOS_CARNET)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionGestionarTiposDeCarnet(): Promise<void> {
        await this.clickGestionarTiposDeCarnet()
    }
}
