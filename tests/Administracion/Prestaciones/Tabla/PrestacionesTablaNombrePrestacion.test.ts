import test from '../../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, prestaciones, prestacionesBotonCrear }) => {
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
    await test.step('Click en Prestaciones', async () => {
        await prestaciones.clickPrestaciones()
    })

})

test(' () Click sobre una fila de la tabla y acceder a los datos para su modificacion ', async ({prestacionesTablaNombrePrestacion}) => {

    await test.step('Clickear sobre la tabla', async () => {
        await prestacionesTablaNombrePrestacion.clickTabla();
    })
    await test.step('Click sobre una fila de la tabla', async () => {
        await prestacionesTablaNombrePrestacion.clickTablaNombrePrestacion();
    })
    await test.step('Clickear el boton MODIFICAR', async () => {
        await prestacionesTablaNombrePrestacion.clickBotonModificar();
    })

})















