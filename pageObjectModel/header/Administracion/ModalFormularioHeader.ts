import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class ModalFormularioHeader extends BasePage {

    readonly MODAL_HEADER: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MODAL_HEADER = this.page.locator("(//div[@id='gxp0_t'])[1]")
    }

    async clickModalHeader(): Promise<void> {
        await this.click(this.MODAL_HEADER)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarModalFormularioHeader(): Promise<void> {
        await this.clickModalHeader()
    }
}
