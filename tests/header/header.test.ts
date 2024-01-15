import test from '../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ loginPage }) => {
    await test.step('Navegar en la url de Gestion Social', async () => {
        await loginPage.navigateToLoginPage()
    })
    await test.step('Ingresar Usuario y Contrasenia validas', async () => {
        await loginPage.ingresoCredenciales()
    })
    await test.step('Click en el boton INGRESAR', async () => {
        await loginPage.ingresoSitio()
    })
})

test('@MenuHeader (IDGS-02) Verificar que al clickear en el icono QR de la miniaplicacion funciona correctamente', async ({menuQRMiniaplicacion}) => {

    await test.step('Click en el icono QR de la miniaplicacion', async () => {
        await menuQRMiniaplicacion.clickMenuQRMiniaplicacion()
    })
})
test('@MenuHeader (IDGS-03) Verificar que al clickear en el icono de la lupa Buscar beneficiario funciona correctamente', async ({menuBuscarBeneficiario}) => {

    await test.step('Click en el icono de la lupa Buscar beneficiario', async () => {
        await menuBuscarBeneficiario.clickMenuBuscarBeneficiario()
    })
})
test('@MenuHeader (IDGS-04) Verificar que al clickear en el icono de la lupa Buscar Listado de Prestaciones funciona correctamente', async ({menuBuscarListadoPrestaciones}) => {

    await test.step('Click en el icono de la lupa Buscar Listado de Prestaciones', async () => {
        await menuBuscarListadoPrestaciones.clickMenuBuscarListadoPrestaciones()
    })
})
test('@MenuHeader (IDGS-05) Verificar que al clickear en el icono de Entrega de Prestaciones funciona correctamente', async ({menuEntregaPrestaciones}) => {

    await test.step('Click en el icono de Entrega de Prestaciones', async () => {
        await menuEntregaPrestaciones.clickMenuEntregaPrestaciones()
    })
})
test('@MenuHeader (IDGS-06) Verificar que al clickear en el icono de Acciones Masivas funciona correctamente', async ({menuAccionesMasivas}) => {

    await test.step('Click en el icono de Acciones Masivas', async () => {
        await menuAccionesMasivas.clickMenuAccionesMasivas()
    })
})





