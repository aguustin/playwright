import test from '../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, administracionGestionarNacionalidades }) => {
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
    await test.step('Click en Gestionar Nacionalidades', async () => {
        await administracionGestionarNacionalidades.navegarAdministracionGestionarNacionalidades()
    })
})

test('@Gestionar @Regression (IDGS-53) Verificar que al ingresar datos validos en el buscador Descripcion en Gestionar Nacionalidades funciona correctamente', async ({gestionarNacionalidadesBuscadorDescripcion}) => {

    await test.step('Ingresar datos en el buscador Descripcion', async () => {
        await gestionarNacionalidadesBuscadorDescripcion.navegarGestionarNacionalidadesBuscadorDescripcion()
    })
})
