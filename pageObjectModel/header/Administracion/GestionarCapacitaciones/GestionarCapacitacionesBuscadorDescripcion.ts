import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class GestionarCapacitacionesBuscadorDescripcion extends BasePage {

    readonly DESCRIPCION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DESCRIPCION = this.page.locator('//input [@id="vCAPACITACIONDESCRIPCION"]')

    }
    async ingresoDatosDescripcion(): Promise<void> {
        const charArray = ['ADMIN', 'ARTES', 'CARP', 'INFO', 'FOTO', 'ELECT']
        const input = '//input [@id="vCAPACITACIONDESCRIPCION"]'

        for (const word of charArray) {
            await this.page.waitForSelector(input)
            await this.fill(this.DESCRIPCION, '')
            await this.fill(this.DESCRIPCION, word)
            await this.page.waitForLoadState("domcontentloaded")
            await this.page.waitForFunction(() => document.readyState === 'complete')
            await this.page.waitForTimeout(1000)
        }
    }

    async navegarGestionarCapacitacionesBuscadorDescripcion(): Promise<void> {
        await this.ingresoDatosDescripcion()
    }
}
