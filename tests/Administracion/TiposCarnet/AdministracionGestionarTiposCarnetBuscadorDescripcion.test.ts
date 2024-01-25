import test from '../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, administracionGestionarTiposDeCarnet }) => {
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
    await test.step('Click en Gestionar Tipos de Carnet', async () => {
        await administracionGestionarTiposDeCarnet.navegarAdministracionGestionarTiposDeCarnet()
    })
})

test('@Test @Administracion @Regression (IDGS-50) Verificar que al ingresar datos validos en el buscador Descripcion en Gestionar Tipos de Carnet funciona correctamente', async ({gestionarTiposCarnetBuscadorDescripcion}) => {

    await test.step('Ingresar datos en el buscador Descripcion', async () => {
        await gestionarTiposCarnetBuscadorDescripcion.navegarGestionarTiposCarnetBuscadorDescripcion()
    })
})
