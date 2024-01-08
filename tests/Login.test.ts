import test from '../config/testManager'

// We can use steps like this to reproduce Cucumber formatting

test('@Smoke (IDGS-01) Acceder al sitio de Gestion Social con credenciales validas', async ({ loginPage }) => {
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
