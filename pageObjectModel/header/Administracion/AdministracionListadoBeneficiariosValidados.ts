import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionListadoBeneficiariosValidados extends BasePage {

    readonly BENEFICIARIOS_VALIDADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BENEFICIARIOS_VALIDADOS = this.page.locator("(//a[normalize-space()='Listado Beneficiarios Validados'])[1]")
    }
    async clickListadoBeneficiariosValidados(): Promise<void> {
        await this.click(this.BENEFICIARIOS_VALIDADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionListadoBeneficiariosValidados(): Promise<void> {
        await this.clickListadoBeneficiariosValidados()
    }
}
