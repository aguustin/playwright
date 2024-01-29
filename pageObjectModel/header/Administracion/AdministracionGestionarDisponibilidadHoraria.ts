import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionGestionarDisponibilidadHoraria extends BasePage {

    readonly DISPONIBILIDAD_HORARIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DISPONIBILIDAD_HORARIA = this.page.locator("(//a[normalize-space()='Gestionar Disponibilidad horaria'])[1]")
    }
    async clickGestionarDisponibilidadHoraria(): Promise<void> {
        await this.click(this.DISPONIBILIDAD_HORARIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarAdministracionGestionarDisponibilidadHoraria(): Promise<void> {
        await this.clickGestionarDisponibilidadHoraria()
    }
}
