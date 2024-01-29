import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarNivelesIdioma extends BasePage {

    readonly NIVELES_IDIOMA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.NIVELES_IDIOMA = this.page.locator("(//a[normalize-space()='Gestionar Niveles de Idioma'])[1]")
    }
    async clickGestionarNivelesIdioma(): Promise<void> {
        await this.click(this.NIVELES_IDIOMA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionGestionarNivelesIdioma(): Promise<void> {
        await this.clickGestionarNivelesIdioma()
    }
}
