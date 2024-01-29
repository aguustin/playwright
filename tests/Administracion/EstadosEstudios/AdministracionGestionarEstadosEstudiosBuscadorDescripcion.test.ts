import test from '../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, administracionGestionarEstadosEstudios }) => {
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
    await test.step('Click en Gestionar Estados de Estudios', async () => {
        await administracionGestionarEstadosEstudios.navegarAdministracionGestionarEstadosEstudios()
    })
})

test('@GestionarCapacitaciones @Regression (IDGS-53) Verificar que al ingresar datos validos en el buscador Descripcion en Gestionar Estados de Estudios funciona correctamente', async ({gestionarEstadosEstudiosBuscadorDescripcion}) => {

    await test.step('Ingresar datos en el buscador Descripcion', async () => {
        await gestionarEstadosEstudiosBuscadorDescripcion.navegarGestionarEstadosEstudiosBuscadorDescripcion()
    })
})
