import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class PrestacionesFiltroVer extends BasePage {

    readonly FILTRO_VER: Locator
    readonly CHECKBOX_ID: Locator
    readonly CHECKBOX_NOMBRE: Locator
    readonly CHECKBOX_FECHA_ACTIVACION: Locator
    readonly CHECKBOX_FECHA_BAJA: Locator
    readonly CHECKBOX_CATEGORIA: Locator
    readonly CHECKBOX_CUPO: Locator
    readonly CHECKBOX_ESTADO: Locator


    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FILTRO_VER = this.page.locator("(//a[normalize-space()='Ver'])[1]")
        this.CHECKBOX_ID = this.page.locator("(//input[@id='vGRIDID'])[1]")
        this.CHECKBOX_NOMBRE = this.page.locator("(//input[@id='vGRIDNOMBRE'])[1]")
        this.CHECKBOX_FECHA_ACTIVACION = this.page.locator("(//input[@id='vGRIDFECHAACTIVACION'])[1]")
        this.CHECKBOX_FECHA_BAJA = this.page.locator("(//input[@id='vGRIDFECHABAJA'])[1]")
        this.CHECKBOX_CATEGORIA = this.page.locator("(//input[@id='vGRIDCATEGORIA'])[1]")
        this.CHECKBOX_CUPO = this.page.locator("(//input[@id='vGRIDCUPO'])[1]")
        this.CHECKBOX_ESTADO = this.page.locator("(//input[@id='vGRIDESTADO'])[1]")
    }

    async clickPrestacionesFiltroVer(): Promise<void> {
        await this.click(this.FILTRO_VER)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(8000)
    }

    async clickCheckbox(): Promise<void> {
        await this.uncheck(this.CHECKBOX_ID)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(2000)
        await this.uncheck(this.CHECKBOX_ID)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(2000)
    }

    async navegarPrestacionesFiltroVer(): Promise<void> {
        await this.clickPrestacionesFiltroVer()
    }
}
