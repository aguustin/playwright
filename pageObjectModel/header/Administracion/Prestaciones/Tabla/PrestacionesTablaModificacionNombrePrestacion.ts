import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class PrestacionesTablaModificacionNombrePrestacion extends BasePage {

    readonly DESCRIPCION: Locator
    readonly TIPO: Locator
    readonly CONTROLA_CUPO: Locator
    readonly ENTREGA: Locator
    readonly NUMERO_DECRETO: Locator
    readonly ANIO_DECRETO: Locator
    readonly RANGO_EDADES: Locator
    readonly CATEGORIA: Locator
    readonly SUBCATEGORIA: Locator
    readonly OBSERVACIONES: Locator
    readonly BOTON_CONFIRMAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DESCRIPCION = this.page.locator('//*[@id="PRESTACIONDESCRIPCION"]')
        this.TIPO = this.page.locator('//*[@id="PRESTACIONTIPO"]')
        this.CONTROLA_CUPO = this.page.locator('//*[@id="PRESTACIONCONTROLACUPO"]')
        this.ENTREGA = this.page.locator('//*[@id="PRESTACIONTIPOENTREGA"]')
        this.NUMERO_DECRETO = this.page.locator('//*[@id="PRESTACIONDECRETONRO"]')
        this.ANIO_DECRETO = this.page.locator('//*[@id="PRESTACIONDECRETOANIO"]')
        this.RANGO_EDADES = this.page.locator('//*[@id="PRESTACIONINDICAOCUPAEDAD"]')
        this.CATEGORIA = this.page.locator('//*[@id="CATETORIAPRESTACIONID"]')
        this.SUBCATEGORIA = this.page.locator('//*[@id="CATETORIAPRESTACIONSUBCATID"]')
        this.OBSERVACIONES = this.page.locator('//*[@id="PRESTACIONOBSERVACIONES"]')
        this.BOTON_CONFIRMAR = this.page.locator('//*[@id="BTN_ENTER"]')
    }

    async modificarDescripcion(): Promise<void>{
        await this.goto('https://apphomo.godoycruz.gob.ar/gestionsocialhomo/servlet/prestacion?UPD,21')
        await this.page.waitForSelector('//*[@id="PRESTACIONDESCRIPCION"]')

        await this.page.$eval('//*[@id="PRESTACIONDESCRIPCION"]', i => {
            (i as HTMLTextAreaElement).value = ''
        })

        await this.fill(this.DESCRIPCION, 'Modificacion de Texto con automatización')
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
    async clickControlaCupoChecked(): Promise<void> {
        await this.click(this.CONTROLA_CUPO)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickControlaCupoUnchecked(): Promise<void> {
        await this.click(this.CONTROLA_CUPO)
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
    async modificarNumeroDecreto(): Promise<void> {
        await this.fill(this.NUMERO_DECRETO, '123456789')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async modificarAnioDecreto(): Promise<void> {
        await this.fill(this.ANIO_DECRETO, '2030')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectRangoEdadesNo(): Promise<void> {
        await this.selectOption(this.RANGO_EDADES, 'N')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectRangoEdadesSi(): Promise<void> {
        await this.selectOption(this.RANGO_EDADES, 'S')
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
        await this.selectOption(this.CATEGORIA, '1')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickCategoriaColaboracion(): Promise<void> {
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
    async clickSubCategoriaAuspicio(): Promise<void> {
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
    async modificarObservaciones(): Promise<void> {
        await this.fill(this.OBSERVACIONES, 'Automatizacion 20-03-24')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickBotonConfirmar(): Promise<void> {
        await this.click(this.BOTON_CONFIRMAR)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarPrestacionesTablaModificacionNombrePrestacion(): Promise<void> {
        await this.modificarDescripcion()
        await this.clickSelectTipoServicio()
        await this.clickSelectTipoBien()
        await this.clickControlaCupoChecked()
        await this.clickControlaCupoUnchecked()
        await this.clickSelectEntregaMasiva()
        await this.clickSelectEntregaNormal()
        await this.modificarNumeroDecreto()
        await this.modificarAnioDecreto()
        await this.clickSelectRangoEdadesNo()
        await this.clickSelectRangoEdadesSi()
        await this.clickCategoriaPedidos()
        await this.clickCategoriaInscripcion()
        await this.clickCategoriaColaboracion()
        await this.clickSubCategoriaSoporteAlimentario()
        await this.clickSubCategoriaEconomico()
        await this.clickSubCategoriaAuspicio()
        await this.clickSubCategoriaAlbergue()
        await this.modificarObservaciones()
        await this.clickBotonConfirmar()
    }
}
