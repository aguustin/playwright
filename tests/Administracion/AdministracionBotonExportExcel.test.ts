import test from '../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, administracionGestionarCapacitaciones }) => {
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
    await test.step('Click en Gestionar Capacitaciones', async () => {
        await administracionGestionarCapacitaciones.navegarGestionarCapacitaciones()
    })
})

test('@GestionarCapacitaciones @Regression (IDGS-12) Verificar que al ingresar datos validos en el buscador Descripcion funciona correctamente', async ({gestionarCapacitacionesBuscadorDescripcion}) => {

    await test.step('Click en Gestionar Capacitaciones', async () => {
        await gestionarCapacitacionesBuscadorDescripcion.navegarGestionarCapacitacionesBuscadorDescripcion()
    })
})

test.afterEach(async ({ administracionBotonExportExcel }) => {
    await test.step('Click en el boton EXPORT', async () => {
        await administracionBotonExportExcel.navegarAdministracionBotonExportExcel()
    })

})









