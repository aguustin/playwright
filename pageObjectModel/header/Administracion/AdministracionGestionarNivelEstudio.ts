import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarNivelEstudio extends BasePage {

    readonly NIVEL_ESTUDIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.NIVEL_ESTUDIO = this.page.locator("(//a[normalize-space()='Gestionar Nivel Estudio'])[1]")
    }
    async clickGestionarNivelEstudio(): Promise<void> {
        await this.click(this.NIVEL_ESTUDIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionGestionarNivelEstudio(): Promise<void> {
        await this.clickGestionarNivelEstudio()
    }
}
