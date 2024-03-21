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
    readonly EDAD_DESDE: Locator
    readonly EDAD_HASTA: Locator
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
        this.EDAD_DESDE = this.page.locator('//*[@id="PRESTACIONEDADDESDE"]')
        this.EDAD_HASTA = this.page.locator('//*[@id="PRESTACIONEDADHASTA"]')
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
    }
    async clickSelectTipoServicio(): Promise<void> {
        await this.selectOption(this.TIPO, 'S')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSelectTipoBien(): Promise<void> {
        await this.selectOption(this.TIPO, 'B')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickControlaCupoChecked(): Promise<void> {
        await this.click(this.CONTROLA_CUPO)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickControlaCupoUnchecked(): Promise<void> {
        await this.click(this.CONTROLA_CUPO)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSelectEntregaMasiva(): Promise<void> {
        await this.selectOption(this.ENTREGA, 'M')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSelectEntregaNormal(): Promise<void> {
        await this.selectOption(this.ENTREGA, 'N')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async modificarNumeroDecreto(): Promise<void> {
        await this.page.waitForSelector('//*[@id="PRESTACIONDECRETONRO"]')
        await this.page.$eval('//*[@id="PRESTACIONDECRETONRO"]', i => {
            (i as HTMLTextAreaElement).value = ''
        })
        await this.fill(this.NUMERO_DECRETO, '123456789')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async modificarAnioDecreto(): Promise<void> {
        await this.page.waitForSelector('//*[@id="PRESTACIONDECRETOANIO"]')
        await this.page.$eval('//*[@id="PRESTACIONDECRETOANIO"]', i => {
            (i as HTMLTextAreaElement).value = ''
        })
        await this.fill(this.ANIO_DECRETO, 'Test Automatizado 210324')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSelectRangoEdadesNo(): Promise<void> {
        await this.selectOption(this.RANGO_EDADES, 'N')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async modificarEdadDesdeRangoEtareoPermitido(): Promise<void>{
        await this.page.waitForSelector('//*[@id="PRESTACIONEDADDESDE"]')
        await this.page.$eval('//*[@id="PRESTACIONEDADDESDE"]', i => {
            (i as HTMLTextAreaElement).value = ''
        })
        await this.fill(this.ANIO_DECRETO, '17')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(10000)
    }
    async modificarEdadHastaRangoEtareoPermitido(): Promise<void> {
        await this.page.waitForSelector('//*[@id="PRESTACIONEDADHASTA"]')
        await this.page.$eval('//*[@id="PRESTACIONEDADHASTA"]', i => {
            (i as HTMLTextAreaElement).value = ''
        })
        await this.fill(this.EDAD_HASTA, '200')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(10000)
    }
    async clickSelectRangoEdadesSi(): Promise<void> {
        await this.selectOption(this.RANGO_EDADES, 'S')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCategoriaPedidos(): Promise<void> {
        await this.selectOption(this.CATEGORIA, '2')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCategoriaInscripcion(): Promise<void> {
        await this.selectOption(this.CATEGORIA, '1')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCategoriaColaboracion(): Promise<void> {
        await this.selectOption(this.CATEGORIA, '3')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSubCategoriaSoporteAlimentario(): Promise<void> {
        await this.selectOption(this.SUBCATEGORIA, '4')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSubCategoriaEconomico(): Promise<void> {
        await this.selectOption(this.SUBCATEGORIA, '2')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSubCategoriaAuspicio(): Promise<void> {
        await this.selectOption(this.SUBCATEGORIA, '1')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSubCategoriaAlbergue(): Promise<void> {
        await this.selectOption(this.SUBCATEGORIA, '3')
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async modificarObservaciones(): Promise<void> {
        await this.page.waitForSelector('//*[@id="PRESTACIONOBSERVACIONES"]')
        // Recupero los datos del TextArea
        const textArea = await this.page.$eval('//*[@id="PRESTACIONOBSERVACIONES"]', (i:HTMLTextAreaElement) => i.value)
        if (textArea.trim() === ''){
            await this.fill(this.OBSERVACIONES, 'Automatizacion 210324 - 11:12')
        } else {
            await this.page.$eval('//*[@id="PRESTACIONOBSERVACIONES"]', i => {
                (i as HTMLTextAreaElement).value = 'Automatizacion 210324 - 11:15'
            })
        }
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
        await this.modificarEdadDesdeRangoEtareoPermitido()
        await this.modificarEdadHastaRangoEtareoPermitido()
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
