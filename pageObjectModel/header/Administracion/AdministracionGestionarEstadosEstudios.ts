import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarEstadosEstudios extends BasePage {

    readonly ESTADOS_ESTUDIOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESTADOS_ESTUDIOS = this.page.locator("(//a[normalize-space()='Gestionar Estados de estudios'])[1]")
    }
    async clickGestionarEstadosEstudios(): Promise<void> {
        await this.click(this.ESTADOS_ESTUDIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionGestionarEstadosEstudios(): Promise<void> {
        await this.clickGestionarEstadosEstudios()
    }
}
