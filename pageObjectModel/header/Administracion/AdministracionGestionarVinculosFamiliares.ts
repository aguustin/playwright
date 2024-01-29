import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarVinculosFamiliares extends BasePage {

    readonly VINCULOS_FAMILIARES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VINCULOS_FAMILIARES = this.page.locator("(//a[normalize-space()='Gestionar Vinculos Familiares'])[1]")
    }
    async clickGestionarVinculosFamiliares(): Promise<void> {
        await this.click(this.VINCULOS_FAMILIARES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionGestionarVinculosFamiliares(): Promise<void> {
        await this.clickGestionarVinculosFamiliares()
    }
}
