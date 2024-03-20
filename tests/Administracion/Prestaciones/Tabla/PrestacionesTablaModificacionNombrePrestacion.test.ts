import test from '../../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, prestaciones, prestacionesBotonCrear }) => {
    await test.step('Navegar en la url de Gestion Social', async () => {
        await loginPage.navigateToLoginPage()
    })
    await test.step('Ingresar Usuario y Contrasenia validas', async () => {
        await loginPage.ingresoCredenciales()
    })
    await test.step('Click en el boton INGRESAR', async () => {
        await loginPage.ingresoSitio()
    })
    await test.step('Click en el icono Administracion', async () => {
        await menuAdministracion.navegarAccederMenuAdministracion()
    })
    await test.step('Click en Prestaciones', async () => {
        await prestaciones.clickPrestaciones()
    })

})

test('@xyz () Modificar datos de Prestacion', async ({prestacionesTablaModificacionNombrePrestacion}) => {

    await test.step('Modificar Descripcion', async () => {
        await prestacionesTablaModificacionNombrePrestacion.modificarDescripcion();
    })
    await test.step('Click en Servico del select Tipo', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickSelectTipoServicio();
    })
    await test.step('Click en Bien del select Tipo', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickSelectTipoBien();
    })
    await test.step('Click en el checkbox Controla Cupo para activar', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickControlaCupoChecked();
    })
    await test.step('Click en el checkbox Controla Cupo para desactivar', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickControlaCupoUnchecked();
    })
    await test.step('Click en Masiva del select Tipo Entrega', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickSelectEntregaMasiva();
    })
    await test.step('Click en Normal del select Tipo Entrega', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickSelectEntregaNormal();
    })
    await test.step('Modificar Numero Decreto', async () => {
        await prestacionesTablaModificacionNombrePrestacion.modificarNumeroDecreto();
    })
    await test.step('Modificar Anio Decreto', async () => {
        await prestacionesTablaModificacionNombrePrestacion.modificarAnioDecreto();
    })
    await test.step('Click en No del select Rango Edades', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickSelectRangoEdadesNo();
    })
    await test.step('Click en Si del select Rango Edades', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickSelectRangoEdadesSi();
    })
    await test.step('Click en Pedidos del select Categoria', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickCategoriaPedidos();
    })
    await test.step('Click en Inscripcion del select Categoria', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickCategoriaInscripcion();
    })
    await test.step('Click en Colaboracion del select Categoria', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickCategoriaColaboracion();
    })
    await test.step('Click en Soporte Alimentario del select Sub Categoria', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickSubCategoriaSoporteAlimentario();
    })
    await test.step('Click en Economico del select Sub Categoria', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickSubCategoriaEconomico();
    })
    await test.step('Click en Auspicio del select Sub Categoria', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickSubCategoriaAuspicio();
    })
    await test.step('Click en Albergue del select Sub Categoria', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickSubCategoriaAlbergue();
    })
    await test.step('Modificar datos en Observaciones', async () => {
        await prestacionesTablaModificacionNombrePrestacion.modificarObservaciones();
    })
    await test.step('Click en boton CONFIRMAR', async () => {
        await prestacionesTablaModificacionNombrePrestacion.clickBotonConfirmar();
    })
})
