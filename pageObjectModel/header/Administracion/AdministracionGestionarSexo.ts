import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarSexo extends BasePage {

    readonly SEXO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SEXO = this.page.locator("(//a[normalize-space()='Gestionar Sexo'])[1]")
    }
    async clickGestionarSexo(): Promise<void> {
        await this.click(this.SEXO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionGestionarSexo(): Promise<void> {
        await this.clickGestionarSexo()
    }
}
