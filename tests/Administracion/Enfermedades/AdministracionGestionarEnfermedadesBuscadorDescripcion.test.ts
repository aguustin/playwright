import test from '../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, administracionGestionarEnfermedades }) => {
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
    await test.step('Click en Gestionar Enfermedades', async () => {
        await administracionGestionarEnfermedades.navegarAdministracionGestionarEnfermedades()
    })
})

test('@Gestionar @Regression (IDGS-38) Verificar que al ingresar datos validos en el buscador Descripcion en Gestionar Enfermedades funciona correctamente', async ({gestionarEnfermedadesBuscadorDescripcion}) => {

    await test.step('Ingresar datos en el buscador Enfermedades', async () => {
        await gestionarEnfermedadesBuscadorDescripcion.navegarGestionarEnfermedadesBuscadorDescripcion()
    })
})
