import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class PrestacionesBuscadorDescripcion extends BasePage {

    readonly BUSCADOR_DESCRIPCION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BUSCADOR_DESCRIPCION = this.page.locator("(//textarea[@id='vPRESTACIONDESCRIPCION'])[1]")

    }
    async ingresoBuscadorDescripcion(): Promise<void> {
        const charArray = ['ITAT', ' ', 'INC', '!"#$%&', 'REN', '!"#$%&/()=?¡¿/*-+']
        const input = "(//textarea[@id='vPRESTACIONDESCRIPCION'])[1]"

        for (const word of charArray) {
            await this.page.waitForSelector(input)
            await this.fill(this.BUSCADOR_DESCRIPCION, '')
            await this.fill(this.BUSCADOR_DESCRIPCION, word)
            await this.page.waitForLoadState("domcontentloaded")
            await this.page.waitForFunction(() => document.readyState === 'complete')
            await this.page.waitForTimeout(3000)
        }
    }

    async navegarPrestacionesBuscadorDescripcion(): Promise<void> {
        await this.ingresoBuscadorDescripcion()
    }
}
