import test from '../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ loginPage, menuAdministracion }) => {
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

test('@Administracion (IDGS-02) Verificar que al clickear en Gestionar Capacitaciones funciona correctamente', async ({administracionGestionarCapacitaciones}) => {

    await test.step('Click en Gestionar Capacitaciones', async () => {
        await administracionGestionarCapacitaciones.navegarGestionarCapacitaciones()
    })
})









