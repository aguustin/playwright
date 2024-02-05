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
        // const checkboxFiltroVer = "(//a[normalize-space()='Ver'])[1]]"
        // await this.page.waitForSelector(checkboxFiltroVer)
        await this.click(this.FILTRO_VER)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(1000)
    }

    async clickUnCheckboxId(): Promise<void> {
        const checkboxId = "(//input[@id='vGRIDID'])[1]"
        await this.page.waitForSelector(checkboxId)
        await this.uncheck(this.CHECKBOX_ID)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCheckboxId(): Promise<void> {
        const checkboxId = "(//input[@id='vGRIDID'])[1]"
        await this.page.waitForSelector(checkboxId)
        await this.check(this.CHECKBOX_ID)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickUnCheckboxNombre(): Promise<void> {
        const checkboxNombre = "(//input[@id='vGRIDNOMBRE'])[1]"
        await this.page.waitForSelector(checkboxNombre)
        await this.uncheck(this.CHECKBOX_NOMBRE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCheckboxNombre(): Promise<void> {
        const checkboxNombre = "(//input[@id='vGRIDNOMBRE'])[1]"
        await this.page.waitForSelector(checkboxNombre)
        await this.check(this.CHECKBOX_NOMBRE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickUnCheckboxFechaActivacio(): Promise<void> {
        const checkboxFechaActivacio = "(//input[@id='vGRIDFECHAACTIVACION'])[1]"
        await this.page.waitForSelector(checkboxFechaActivacio)
        await this.uncheck(this.CHECKBOX_FECHA_ACTIVACION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCheckboxFechaActivacio(): Promise<void> {
        const checkboxFechaActivacio = "(//input[@id='vGRIDFECHAACTIVACION'])[1]"
        await this.page.waitForSelector(checkboxFechaActivacio)
        await this.check(this.CHECKBOX_FECHA_ACTIVACION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickUnCheckboxFechaBaja(): Promise<void> {
        const checkboxFechaBaja = "(//input[@id='vGRIDFECHABAJA'])[1]"
        await this.page.waitForSelector(checkboxFechaBaja)
        await this.uncheck(this.CHECKBOX_FECHA_BAJA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCheckboxFechaBaja(): Promise<void> {
        const checkboxFechaBaja = "(//input[@id='vGRIDFECHABAJA'])[1]"
        await this.page.waitForSelector(checkboxFechaBaja)
        await this.check(this.CHECKBOX_FECHA_BAJA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickUnCheckboxCategoria(): Promise<void> {
        const checkboxCategoria = "(//input[@id='vGRIDCATEGORIA'])[1]"
        await this.page.waitForSelector(checkboxCategoria)
        await this.uncheck(this.CHECKBOX_CATEGORIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCheckboxCategoria(): Promise<void> {
        const checkboxCategoria = "(//input[@id='vGRIDCATEGORIA'])[1]"
        await this.page.waitForSelector(checkboxCategoria)
        await this.check(this.CHECKBOX_CATEGORIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickUnCheckboxCupo(): Promise<void> {
        const checkboxCupo = "(//input[@id='vGRIDCUPO'])[1]"
        await this.page.waitForSelector(checkboxCupo)
        await this.uncheck(this.CHECKBOX_CUPO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCheckboxCupo(): Promise<void> {
        const checkboxCupo = "(//input[@id='vGRIDCUPO'])[1]"
        await this.page.waitForSelector(checkboxCupo)
        await this.check(this.CHECKBOX_CUPO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async clickUnCheckboxEstado(): Promise<void> {
        const checkboxEstado = "(//input[@id='vGRIDESTADO'])[1]"
        await this.page.waitForSelector(checkboxEstado)
        await this.uncheck(this.CHECKBOX_ESTADO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCheckboxEstado(): Promise<void> {
        const checkboxEstado = "(//input[@id='vGRIDESTADO'])[1]"
        await this.page.waitForSelector(checkboxEstado)
        await this.check(this.CHECKBOX_ESTADO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarPrestacionesFiltroVer(): Promise<void> {
        await this.clickPrestacionesFiltroVer()
        await this.clickUnCheckboxId()
        await this.clickCheckboxId()
        await this.clickUnCheckboxNombre()
        await this.clickCheckboxNombre()
        await this.clickUnCheckboxFechaActivacio()
        await this.clickCheckboxFechaActivacio()
        await this.clickUnCheckboxFechaBaja()
        await this.clickCheckboxFechaBaja()
        await this.clickUnCheckboxCategoria()
        await this.clickCheckboxCategoria()
        await this.clickUnCheckboxCupo()
        await this.clickCheckboxCupo()

        await this.clickUnCheckboxEstado()
        await this.clickCheckboxEstado()

    }
}
