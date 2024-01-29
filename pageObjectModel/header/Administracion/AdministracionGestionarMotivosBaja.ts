import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarMotivosBaja extends BasePage {

    readonly MOTIVOS_BAJA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MOTIVOS_BAJA = this.page.locator("(//a[normalize-space()='Gestionar Motivos de Baja'])[1]")
    }
    async clickGestionarMotivosBaja(): Promise<void> {
        await this.click(this.MOTIVOS_BAJA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionGestionarMotivosBaja(): Promise<void> {
        await this.clickGestionarMotivosBaja()
    }
}
