import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionBotonGestionEtapas extends BasePage {

    readonly BOTON_GESTION_ETAPAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_GESTION_ETAPAS = this.page.locator('//span [@id="TEXTBLOCKETAPAS"]')
    }

    async clickBotonGestionEtapas(): Promise<void> {
        await this.click(this.BOTON_GESTION_ETAPAS)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionBotonGestionEtapas(): Promise<void> {
        await this.clickBotonGestionEtapas()
    }
}
