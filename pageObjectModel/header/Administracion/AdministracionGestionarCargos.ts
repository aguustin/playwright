import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarCargos extends BasePage {

    readonly CARGOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARGOS = this.page.locator("(//a[normalize-space()='Gestionar Cargos'])[1]")
    }
    async clickGestionarCargos(): Promise<void> {
        await this.click(this.CARGOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionGestionarCargos(): Promise<void> {
        await this.clickGestionarCargos()
    }
}
