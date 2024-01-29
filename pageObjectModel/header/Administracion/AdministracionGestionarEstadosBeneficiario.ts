import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarEstadosBeneficiario extends BasePage {

    readonly ESTADOS_BENEFICIARIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESTADOS_BENEFICIARIO = this.page.locator("(//a[normalize-space()='Gestionar Estados de Beneficiario'])[1]")
    }
    async clickGestionarEstadosBeneficiario(): Promise<void> {
        await this.click(this.ESTADOS_BENEFICIARIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionGestionarEstadosBeneficiario(): Promise<void> {
        await this.clickGestionarEstadosBeneficiario()
    }
}
