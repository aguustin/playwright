import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuBuscarBeneficiario extends BasePage {

    readonly BUSCAR_BENEFICIARIO_IMG: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BUSCAR_BENEFICIARIO_IMG = this.page.locator('//img [@id="IMAGE3_MPAGE"]')
    }
    async clickMenuBuscarBeneficiario(): Promise<void> {
        await this.click(this.BUSCAR_BENEFICIARIO_IMG)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }


    async navegarAccederMenuBuscarBeneficiario(): Promise<void> {
        await this.clickMenuBuscarBeneficiario()
    }
}
