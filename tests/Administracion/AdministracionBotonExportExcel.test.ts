import test from '../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion}) => {
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
})

test('@Test @Administracion @Regression (IDGS-35) Verificar que al clickear el boton EXPORT Excel en Capacitaciones funciona correctamente', async ({administracionGestionarCapacitaciones}) => {

    await test.step('Click el boton EXPORT en Capacitaciones', async () => {
        await administracionGestionarCapacitaciones.navegarAdministracionGestionarCapacitaciones()
    })
})
test('@Test @Administracion @Regression (IDGS-37) Verificar que al clickear el boton EXPORT Excel en Intereses funciona correctamente', async ({administracionGestionarIntereses}) => {

    await test.step('Click el boton EXPORT en Intereses', async () => {
        await administracionGestionarIntereses.navegarAdministracionGestionarIntereses()
    })
})
test('@Test @Administracion @Regression (IDGS-40) Verificar que al clickear el boton EXPORT Excel en Enfermedades funciona correctamente', async ({administracionGestionarEnfermedades}) => {

    await test.step('Click el boton EXPORT en Enfermedades', async () => {
        await administracionGestionarEnfermedades.navegarAdministracionGestionarEnfermedades()
    })
})
test('Test @Administracion @Regression (IDGS-43) Verificar que al clickear el boton EXPORT Excel en Profesiones funciona correctamente', async ({administracionGestionarProfesiones}) => {

    await test.step('Click el boton EXPORT Excel en Profesiones', async () => {
        await administracionGestionarProfesiones.navegarAdministracionGestionarProfesiones()
    })
})
test('Test @Administracion @Regression (IDGS-46) Verificar que al clickear el boton EXPORT Excel en Discapacidades funciona correctamente', async ({administracionGestionarDiscapacidades}) => {

    await test.step('Click el boton EXPORT Excel en Discapacidades', async () => {
        await administracionGestionarDiscapacidades.navegarAdministracionGestionarDiscapacidades()
    })
})









test.afterEach(async ({ administracionBotonExportExcel }) => {

    await test.step('Click en el boton EXPORT', async () => {
        await administracionBotonExportExcel.navegarAdministracionBotonExportExcel()
    })
})