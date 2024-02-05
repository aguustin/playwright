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

    async navegarPrestacionesFiltroVer(): Promise<void> {
        await this.clickPrestacionesFiltroVer()
        await this.clickUnCheckboxId()

    }















test('Buscar datos en la tabla', async ({ page }) => {
    // Navegar a la página que contiene la tabla y el buscador
    await page.goto('URL_DE_TU_PAGINA'); // Reemplaza con la URL real de tu página

    // Selector del buscador
    const selectorBuscador = 'input[type="search"]'; // Reemplaza con el selector real de tu buscador

    // Selector de la tabla
    const selectorTabla = 'table#tablaDatos'; // Reemplaza con el selector real de tu tabla

    // Texto de búsqueda
    const textoBusqueda = 'datoABuscar';

    // Esperar a que el buscador y la tabla estén disponibles
    await page.waitForSelector(selectorBuscador);
    await page.waitForSelector(selectorTabla);

    // Ingresar el texto de búsqueda en el buscador
    await page.fill(selectorBuscador, textoBusqueda);

    // Esperar un momento (puedes ajustar esto según tus necesidades)
    await page.waitForTimeout(1000);

    // Obtener las filas de la tabla después de la búsqueda
    const filasDespuesDeBusqueda = await page.$$('table#tablaDatos tbody tr');

    // Verificar que haya al menos una fila en la tabla después de la búsqueda
    await expect(filasDespuesDeBusqueda.length).toBeGreaterThan(0);

    // Verificar que cada fila contiene el texto de búsqueda
    for (const fila of filasDespuesDeBusqueda) {
        const textoFila = await fila.innerText();
        await expect(textoFila).toContain(textoBusqueda);
    }
});

test('Verificar que no hay datos cuando no hay coincidencias', async ({ page }) => {
    // Navegar a la página que contiene la tabla y el buscador
    await page.goto('URL_DE_TU_PAGINA'); // Reemplaza con la URL real de tu página

    // Selector del buscador
    const selectorBuscador = 'input[type="search"]'; // Reemplaza con el selector real de tu buscador

    // Selector de la tabla
    const selectorTabla = 'table#tablaDatos'; // Reemplaza con el selector real de tu tabla

    // Texto de búsqueda que probablemente no exista
    const textoBusquedaSinCoincidencias = 'TextoQueNoDeberiaExistir';

    // Esperar a que el buscador y la tabla estén disponibles
    await page.waitForSelector(selectorBuscador);
    await page.waitForSelector(selectorTabla);

    // Ingresar el texto de búsqueda sin coincidencias en el buscador
    await page.fill(selectorBuscador, textoBusquedaSinCoincidencias);

    // Esperar un momento (puedes ajustar esto según tus necesidades)
    await page.waitForTimeout(1000);

    // Obtener las filas de la tabla después de la búsqueda sin coincidencias
    const filasDespuesDeBusquedaSinCoincidencias = await page.$$('table#tablaDatos tbody tr');

    // Verificar que no haya filas en la tabla después de la búsqueda sin coincidencias
    await expect(filasDespuesDeBusquedaSinCoincidencias.length).toBe(0);
});

}
