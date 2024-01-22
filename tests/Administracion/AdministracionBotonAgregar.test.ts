import test from '../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion}) => {
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
})

test('@Test @Administracion @Regression (IDGS-34) Verificar que al clickear el boton +AGREGAR en Capacitaciones funciona correctamente', async ({administracionGestionarCapacitaciones}) => {

    await test.step('Click en Gestionar Capacitaciones', async () => {
        await administracionGestionarCapacitaciones.navegarAdministracionGestionarCapacitaciones()
    })

})

test.afterEach(async ({ administracionBotonAgregar }) => {

    await test.step('Click en el boton +AGREGAR', async () => {
        await administracionBotonAgregar.navegarAdministracionBotonAgregar()
    })
})