import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarProfesiones extends BasePage {

    readonly PROFESIONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROFESIONES = this.page.locator("(//a[normalize-space()='Gestionar Profesiones'])[1]")
    }
    async clickGestionarProfesiones(): Promise<void> {
        await this.click(this.PROFESIONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionGestionarProfesiones(): Promise<void> {
        await this.clickGestionarProfesiones()
    }
}
