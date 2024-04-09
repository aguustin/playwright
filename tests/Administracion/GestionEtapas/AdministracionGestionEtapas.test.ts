import test from '../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, administracionBotonGestionEtapas }) => {
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
    await test.step('Click en Gestion de Etapas', async () => {
        await administracionBotonGestionEtapas.clickBotonGestionEtapas()
    })
})

test('@ABCD (IDGS-XXX) Verificar que al clickear el boton + Agregar se direcciona correctamente', async ({gestionEtapasBotonAgregar}) => {

    await test.step('clickear el boton + Agregar', async () => {
        await gestionEtapasBotonAgregar.clickBotonAgregar()
    })
})
