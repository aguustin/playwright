import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from './commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../config/configLoader'

export class LoginPage extends BasePage {
    readonly USUARIO_INPUT: Locator
    readonly PASSWORD_INPUT: Locator
    readonly INGRESAR_BUTTON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.USUARIO_INPUT = this.page.locator('//input [@id="vUSERID"]')
        this.PASSWORD_INPUT = this.page.locator('//input [@id="vUSERPSW"]')
        this.INGRESAR_BUTTON = this.page.locator('//input [@id="BUTTON1"]')
    }

    async navigateToLoginPage(): Promise<void> {
        await this.goto(this.env.baseURL)
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async ingresoCredenciales(): Promise<void> {
        await this.fill(this.USUARIO_INPUT, this.env.username)
        await this.fill(this.PASSWORD_INPUT, this.env.password)
    }

    async ingresoSitio(): Promise<void> {
        await this.click(this.INGRESAR_BUTTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }


    async navegarAccederCredencialesValidas(): Promise<void> {
        await this.navigateToLoginPage()
        await this.ingresoCredenciales()
        await this.ingresoSitio
    }
}
