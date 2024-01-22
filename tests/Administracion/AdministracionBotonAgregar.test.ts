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

test('@Test @Administracion @Regression (IDGS-34) Verificar que al clickear el boton +AGREGAR en Capacitaciones funciona correctamente', async ({administracionGestionarCapacitaciones}) => {

    await test.step('Click el boton +AGREGAR en Capacitaciones', async () => {
        await administracionGestionarCapacitaciones.navegarAdministracionGestionarCapacitaciones()
    })
})
test('@Test @Administracion @Regression (IDGS-36) Verificar que al clickear el boton +AGREGAR en Intereses funciona correctamente', async ({administracionGestionarIntereses}) => {

    await test.step('Click el boton +AGREGAR en Intereses', async () => {
        await administracionGestionarIntereses.navegarAdministracionGestionarIntereses()
    })
})
test('@Test @Administracion @Regression (IDGS-40) Verificar que al clickear el boton +AGREGAR en Enfermedades funciona correctamente', async ({administracionGestionarEnfermedades}) => {

    await test.step('Click el boton +AGREGAR en Enfermedades', async () => {
        await administracionGestionarEnfermedades.navegarAdministracionGestionarEnfermedades()
    })
})
test('Test @Administracion @Regression (IDGS-42) Verificar que al clickear el boton +AGREGAR en Profesiones funciona correctamente', async ({administracionGestionarProfesiones}) => {

    await test.step('Click el boton +AGREGAR en Profesiones', async () => {
        await administracionGestionarProfesiones.navegarAdministracionGestionarProfesiones()
    })
})
test('Test @Administracion @Regression (IDGS-45) Verificar que al clickear el boton +AGREGAR en Discapacidades funciona correctamente', async ({administracionGestionarDiscapacidades}) => {

    await test.step('Click el boton +AGREGAR en Discapacidades', async () => {
        await administracionGestionarDiscapacidades.navegarAdministracionGestionarDiscapacidades()
    })
})









test.afterEach(async ({ administracionBotonAgregar }) => {

    await test.step('Click en el boton +AGREGAR', async () => {
        await administracionBotonAgregar.navegarAdministracionBotonAgregar()
    })
})
