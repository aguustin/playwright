import test from '../../../config/testManager'

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
    await test.step('Click en el boton +CREAR', async () => {
        await prestacionesBotonCrear.clickBotonCrear();
    })

})

test('@ABCD @Prestaciones @Regression (IDGS-53) Verificar que al ingresar datos validos en la pestania General en el formulario de Prestaciones se cargarn correctamente', async ({prestacionesFormularioGeneral}) => {

    await test.step('Ingresar datos en la pestania General', async () => {
        await prestacionesFormularioGeneral.completarNombrePrestacion();
    })
    await test.step('Click en Servicio del Select Tipo', async () => {
        await prestacionesFormularioGeneral.clickSelectTipoServicio();
    })
    await test.step('Click en Bien del Select Tipo', async () => {
        await prestacionesFormularioGeneral.clickSelectTipoBien();
    })
    await test.step('Click en Masiva del Select Entrega', async () => {
        await prestacionesFormularioGeneral.clickSelectEntregaMasiva();
    })
    await test.step('Click en Normal del Select Entrega', async () => {
        await prestacionesFormularioGeneral.clickSelectEntregaNormal();
    })
    await test.step('Click en SI en Controla Cupo', async () => {
        await prestacionesFormularioGeneral.clickControlaCupoSi();
    })
    await test.step('Click en NO en Controla Cupo', async () => {
        await prestacionesFormularioGeneral.clickControlaCupoNo();
    })
    await test.step('Ingresar Anio', async () => {
        await prestacionesFormularioGeneral.ingresoNumDecretoAni();
    })
    await test.step('Click en SI en Rango Etario', async () => {
        await prestacionesFormularioGeneral.clickRangoEtarioSi();
    })
    await test.step('Click en NO en Rango Etario', async () => {
        await prestacionesFormularioGeneral.clickRangoEtarioNo();
    })
    await test.step('Click en Colaboracion en el select Categoria', async () => {
        await prestacionesFormularioGeneral.clickCategoriaColaboracion();
    })
    await test.step('Click en Pedidos en el select Categoria', async () => {
        await prestacionesFormularioGeneral.clickCategoriaPedidos();
    })
    await test.step('Click en Inscripcion en el select Categoria', async () => {
        await prestacionesFormularioGeneral.clickCategoriaInscripcion();
    })
    await test.step('Click en Inscripcion en el select Categoria', async () => {
        await prestacionesFormularioGeneral.clickCategoriaInscripcion();
    })
    await test.step('Click en Soporte Alimentario en el select Sub Categoria', async () => {
        await prestacionesFormularioGeneral.clickSubCategoriaSoporteAlimentario();
    })
    await test.step('Click en Economico en el select Sub Categoria', async () => {
        await prestacionesFormularioGeneral.clickSubCategoriaEconomico();
    })
    await test.step('Click en Renhabi en el select Sub Categoria', async () => {
        await prestacionesFormularioGeneral.clickSubCategoriaRenhabit();
    })
    await test.step('Click en Renhabi en el select Sub Categoria', async () => {
        await prestacionesFormularioGeneral.clickSubCategoriaRenhabit();
    })
    await test.step('Ingresar Observaciones', async () => {
        await prestacionesFormularioGeneral.ingresoObservaciones();
    })
    await test.step('Click en el boton Guardar y Continuar', async () => {
        await prestacionesFormularioGeneral.clickBotonGuardarContinuar();
    })
})















