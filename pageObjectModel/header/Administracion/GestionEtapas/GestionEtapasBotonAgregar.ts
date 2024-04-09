import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class GestionEtapasBotonAgregar extends BasePage {

    readonly BOTON_AGREGAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_AGREGAR = this.page.locator('//input [@id="BTNINSERT"]')

    }
    async clickBotonAgregar(): Promise<void> {
        await this.click(this.BOTON_AGREGAR)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(()=>document.readyState === 'complete')
    }

    async naverBotonAgregar(): Promise<void> {
        await this.clickBotonAgregar()
    }

    //     const charArray = ['ADMIN', 'ARTES', 'CARP', 'INFO', 'FOTO', 'ELECT', '!"#$%&/()=?¡¿/*-+']
    //     const input = "(//input[@id='vCAPACITACIONDESCRIPCION'])[1]"
    //
    //     for (const word of charArray) {
    //         await this.page.waitForSelector(input)
    //         await this.fill(this.BUSCADOR_DESCRIPCION, '')
    //         await this.fill(this.BUSCADOR_DESCRIPCION, word)
    //         await this.page.waitForLoadState("domcontentloaded")
    //         await this.page.waitForFunction(() => document.readyState === 'complete')
    //     }
    // }
    //
    // async navegarGestionarCapacitacionesBuscadorDescripcion(): Promise<void> {
    //     await this.ingresoBuscadorDescripcion()
    // }
}
