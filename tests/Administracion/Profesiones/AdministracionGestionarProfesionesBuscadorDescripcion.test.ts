import test from '../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, administracionGestionarProfesiones }) => {
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
    await test.step('Click en Gestionar Profesiones', async () => {
        await administracionGestionarProfesiones.navegarAdministracionGestionarProfesiones()
    })
})

test('@a @Gestionar @Regression (IDGS-41) Verificar que al ingresar datos validos en el buscador Descripcion en Profesiones funciona correctamente', async ({gestionarProfesionesBuscadorDescripcion}) => {

    await test.step('Ingresar datos en el buscador Descripcion', async () => {
        await gestionarProfesionesBuscadorDescripcion.navegarGestionarProfesionesBuscadorDescripcion()
    })
})
