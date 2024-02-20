import test from '../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, administracionGestionarCapacitaciones, administracionBotonAgregar }) => {
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
        await menuAdministracion.clickMenuAdministracion()
    })
    await test.step('Click en Gestionar Capacitaciones', async () => {
        await administracionGestionarCapacitaciones.clickGestionarCapacitaciones()
    })
    // await test.step('Click en el boton +CREAR', async () => {
    //     await administracionBotonAgregar.clickBotonAgregar()
    // })
})

test('@Test @FormularioCrear @Regression (IDGS-53) Verificar que al clickear el boton CONFIRMAR los datos del formulario Capacitacion se guardan correctamente', async ({gestionarCapacitacionesFormulario}) => {

    await test.step('Click en el boton +CREAR', async () => {
        await gestionarCapacitacionesFormulario.clickBotonAgregar();
    })
    await test.step('Click sobre el formulario', async () => {
        await gestionarCapacitacionesFormulario.clickFormularioIframe();
    })
    await test.step('Ingresar datos en el input Descripcion', async () => {
        await gestionarCapacitacionesFormulario.completarCapacitacionesFormulario();
    })
    await test.step('Click en el boton CONFIRMAR', async () => {
        await gestionarCapacitacionesFormulario.clickBotonConfirmar();
    })

})
