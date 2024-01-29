import test from '../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, administracionGestionarDisponibilidadHoraria }) => {
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
    await test.step('Click en Gestionar Disponibilidad horaria', async () => {
        await administracionGestionarDisponibilidadHoraria.navegarAdministracionGestionarDisponibilidadHoraria()
    })
})

test('@GestionarCapacitaciones @Regression (IDGS-53) Verificar que al ingresar datos validos en el buscador Descripcion en Gestionar Disponibilidad Horaria funciona correctamente', async ({gestionarDisponibilidadHorariaBuscadorDescripcion}) => {

    await test.step('Ingresar datos en el buscador Descripcion', async () => {
        await gestionarDisponibilidadHorariaBuscadorDescripcion.navegarGestionarDisponibilidadHorariaBuscadorDescripcion()
    })
})
