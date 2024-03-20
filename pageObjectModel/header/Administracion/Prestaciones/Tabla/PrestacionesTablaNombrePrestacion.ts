import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class PrestacionesTablaNombrePrestacion extends BasePage {

    readonly TABLA: Locator
    readonly NOMBRE_PRESTACION_TABLA: Locator
    readonly BOTON_MODIFICAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TABLA = this.page.locator('//*[@id="Grid2ContainerTbl"]')
        this.NOMBRE_PRESTACION_TABLA = this.page.locator('/html/body/form/div[2]/div[2]/div/div[3]/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div[2]/div/div/table/tbody/tr[2]/td[2]/p/span/a')
        this.BOTON_MODIFICAR = this.page.locator('//*[@id="W0036BTNUPDATE"]')
    }

    // async clickTablaNombrePrestacion(): Promise<void> {
    //     // await this.click(this.NOMBRE_PRESTACIONES)
    //     await this.page.waitForSelector('th:nth-of-type(2)')
    //     const columnName = 'Nombre de la prestación';
    //     const columnIndex = await this.page.$$eval('th', (ths, columnName) => {
    //         return ths.findIndex(th => th.textContent.trim() === columnName);
    //     }, columnName)
    //
    //     const cells = await this.page.$$(`td:nth-of-type(${columnIndex + 1})`)
    //
    //     for (const i of cells){
    //         await i.click()
    //         console.log(i)
    //     }
    //
    //     await this.page.waitForLoadState('domcontentloaded')
    //     await this.page.waitForFunction(() => document.readyState === 'complete')
    //     await this.page.waitForTimeout(3000)
    // }
    async clickTabla(): Promise<void>{
        await this.click(this.TABLA)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickTablaNombrePrestacion(): Promise<void>{
        await this.click(this.NOMBRE_PRESTACION_TABLA)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickBotonModificar(): Promise<void>{
        await this.click(this.BOTON_MODIFICAR)
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navegarPrestacionesTablaNombrePrestacion(): Promise<void> {
        await this.clickTabla()
        await this.clickTablaNombrePrestacion()
        await this.clickBotonModificar()
    }
}
