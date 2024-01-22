import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarNivelesInformatica extends BasePage {

    readonly NIVELES_INFORMATICA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.NIVELES_INFORMATICA = this.page.locator("(//a[normalize-space()='Gestionar Niveles de Informatica'])[1]")
    }
    async clickGestionarNivelesInformatica(): Promise<void> {
        await this.click(this.NIVELES_INFORMATICA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionGestionarNivelesInformatica(): Promise<void> {
        await this.clickGestionarNivelesInformatica()
    }
}
