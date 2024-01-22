import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuIngresarBeneficiario extends BasePage {

    readonly INGRESAR_BENEFICIARIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.INGRESAR_BENEFICIARIO = this.page.locator("(//img[@id='IMAGEINGRESAR_MPAGE'])[1]")
    }
    async clickMenuIngresarBeneficiario(): Promise<void> {
        await this.click(this.INGRESAR_BENEFICIARIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }


    async navegarAccederMenuIngresarBeneficiario(): Promise<void> {
        await this.clickMenuIngresarBeneficiario()
    }
}
