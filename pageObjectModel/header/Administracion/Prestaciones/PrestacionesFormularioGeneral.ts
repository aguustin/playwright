import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class PrestacionesFormularioGeneral extends BasePage {

    readonly TEXTAREA: Locator
    readonly BOTON_GUARDAR_CONTINUAR: Locator
    readonly TIPO: Locator
    readonly ENTREGA: Locator
    readonly CONTROLA_CUPO_SI: Locator
    readonly CONTROLA_CUPO_NO: Locator
    readonly NRO_DECRETO_ANIO: Locator
    readonly RANGO_ETARIO_SI: Locator
    readonly RANGO_ETARIO_NO: Locator
    readonly CATEGORIA: Locator
    readonly SUBCATEGORIA: Locator
    readonly OBSERVACIONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TEXTAREA = this.page.locator("(//textarea[@id='W0029CTLPRESTACIONDESCRIPCION'])[1]")
        this.TIPO = this.page.locator("(//select[@id='W0029CTLPRESTACIONTIPO'])[1]")
        this.ENTREGA = this.page.locator("(//select[@id='W0029CTLPRESTACIONTIPOENTREGA'])[1]")
        this.CONTROLA_CUPO_SI = this.page.locator("(//label[normalize-space()='true'])[1]")
        this.CONTROLA_CUPO_NO = this.page.locator("(//label[normalize-space()='false'])[1]")
        this.NRO_DECRETO_ANIO = this.page.locator("(//input[@id='W0029CTLPRESTACIONDECRETONRO'])[1]")
        this.RANGO_ETARIO_SI = this.page.locator('//input [@id="W0029CTLPRESTACIONINDICAOCUPAEDAD2"]')
        this.RANGO_ETARIO_NO = this.page.locator('//input [@id="W0029CTLPRESTACIONINDICAOCUPAEDAD1"]')
        this.CATEGORIA = this.page.locator('//select [@id="W0029CTLCATETORIAPRESTACIONID"]')
        this.SUBCATEGORIA = this.page.locator('id="W0029CTLCATETORIAPRESTACIONSUBCATID"')
        this.OBSERVACIONES = this.page.locator("(//textarea[@id='W0029CTLPRESTACIONOBSERVACIONES'])[1]")

        this.BOTON_GUARDAR_CONTINUAR = this.page.locator('//input [@id="BTN_ENTER"]')
    }

    async completarNombrePrestacion(): Promise<void> {
        await this.fill(this.TEXTAREA, 'AUTOMATIZACION HOTELERIA')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectTipoServicio(): Promise<void> {
        await this.selectOption(this.TIPO, 'S')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectTipoBien(): Promise<void> {
        await this.selectOption(this.TIPO, 'B')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectEntregaMasiva(): Promise<void> {
        await this.selectOption(this.ENTREGA, 'M')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectEntregaNormal(): Promise<void> {
        await this.selectOption(this.ENTREGA, 'N')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickControlaCupoSi(): Promise<void> {
        await this.click(this.CONTROLA_CUPO_SI)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickControlaCupoNo(): Promise<void> {
        await this.click(this.CONTROLA_CUPO_NO)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async ingresoNumDecretoAni(): Promise<void> {
        await this.fill(this.NRO_DECRETO_ANIO, '2024')
    }
    async clickRangoEtarioSi(): Promise<void> {
        await this.click(this.RANGO_ETARIO_SI)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(()=> document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickRangoEtarioNo(): Promise<void> {
        await this.click(this.RANGO_ETARIO_NO)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(()=> document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickCategoriaColaboracion(): Promise<void> {
        await this.selectOption(this.CATEGORIA, '3')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickCategoriaPedidos(): Promise<void> {
        await this.selectOption(this.CATEGORIA, '2')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickCategoriaInscripcion(): Promise<void> {
        await this.selectOption(this.CATEGORIA, '3')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSubCategoriaSoporteAlimentario(): Promise<void> {
        await this.selectOption(this.SUBCATEGORIA, '4')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSubCategoriaEconomico(): Promise<void> {
        await this.selectOption(this.SUBCATEGORIA, '2')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSubCategoriaRenhabit(): Promise<void> {
        await this.selectOption(this.SUBCATEGORIA, '1')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSubCategoriaAlbergue(): Promise<void> {
        await this.selectOption(this.SUBCATEGORIA, '3')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async ingresoObservaciones(): Promise<void> {
        await this.fill(this.OBSERVACIONES, 'Automatizacion')
        await this.page.waitForTimeout(3000)
    }


    async clickBotonGuardarContinuar(): Promise<void> {
        await this.click(this.BOTON_GUARDAR_CONTINUAR)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navegarPrestacionesFormularioGeneral(): Promise<void> {
        await this.completarNombrePrestacion()
        // await this.clickBotonGuardar()

        await this.clickSelectTipoServicio()
        await this.clickSelectTipoBien()
        await this.clickSelectEntregaMasiva()
        await this.clickSelectEntregaNormal()
        await this.clickControlaCupoSi()
        await this.clickControlaCupoNo()
        await this.ingresoNumDecretoAni()
        await this.clickRangoEtarioSi()
        await this.clickRangoEtarioNo()
        await this.clickCategoriaColaboracion()
        await this.clickCategoriaPedidos()
        await this.clickCategoriaInscripcion()
        await this.clickSubCategoriaSoporteAlimentario()
        await this.clickSubCategoriaEconomico()
        await this.clickSubCategoriaRenhabit()
        await this.clickSubCategoriaAlbergue()
        await this.ingresoObservaciones()
        await this.clickBotonGuardarContinuar()
    }
}
