import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class AdministracionBotonExportExcel extends BasePage {

    readonly EXPORT_EXCEL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.EXPORT_EXCEL = this.page.locator("//input[@id='BTNEXPORT']")
    }
    async clickBotonExportExcel(): Promise<void> {
        await this.click(this.EXPORT_EXCEL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarAdministracionBotonExportExcel(): Promise<void> {
        await this.clickBotonExportExcel()
    }
}
