import test from '../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, administracionGestionarPresencia, administracionBotonAgregar }) => {
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
    await test.step('Click en Gestionar Presencia', async () => {
        await administracionGestionarPresencia.navegarAdministracionGestionarPresencia()
    })
    await test.step('Click en el boton +CREAR', async () => {
        await administracionBotonAgregar.navegarAdministracionBotonAgregar()
    })
})

test('@Test @FormularioCrear @Regression (IDGS-53) Verificar que al ingresar datos en el formulario de Presencia y clickear el boton CONFIRMAR los datos se almacenan correctamente en BD', async ({gestionarPresenciaFormularioCrear}) => {

    await test.step('Ingresar datos en el input Descripcion', async () => {
        await gestionarPresenciaFormularioCrear.ingresoBuscadorDescripcion()
    })
})

test.afterEach(async ({ formularioBotonConfirmar }) => {

    await test.step('Click en el boton CONFIRMAR', async () => {
        await formularioBotonConfirmar.navegarFormularioBotonConfirmar()
    })
})
