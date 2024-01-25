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
test('@Test @Administracion @Regression (IDGS-42) Verificar que al clickear el boton +AGREGAR en Profesiones funciona correctamente', async ({administracionGestionarProfesiones}) => {

    await test.step('Click el boton +AGREGAR en Profesiones', async () => {
        await administracionGestionarProfesiones.navegarAdministracionGestionarProfesiones()
    })
})
test('@Test @Administracion @Regression (IDGS-45) Verificar que al clickear el boton +AGREGAR en Discapacidades funciona correctamente', async ({administracionGestionarDiscapacidades}) => {

    await test.step('Click el boton +AGREGAR en Discapacidades', async () => {
        await administracionGestionarDiscapacidades.navegarAdministracionGestionarDiscapacidades()
    })
})
test('@Test @Administracion @Regression (IDGS-48) Verificar que al clickear el boton +AGREGAR en Estado Civil funciona correctamente', async ({administracionGestionarEstadoCivil}) => {

    await test.step('Click el boton +AGREGAR en Estado Civil', async () => {
        await administracionGestionarEstadoCivil.navegarAdministracionGestionarEstadoCivil()
    })
})
test('@Test @Administracion @Regression (IDGS-51) Verificar que al clickear el boton +AGREGAR en Estado Civil funciona correctamente', async ({administracionGestionarTiposDeCarnet}) => {

    await test.step('Click el boton +AGREGAR en Tipos de Carnet', async () => {
        await administracionGestionarTiposDeCarnet.navegarAdministracionGestionarTiposDeCarnet()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton +AGREGAR en Niveles de Idioma funciona correctamente', async ({administracionGestionarNivelesIdioma}) => {

    await test.step('Click el boton +AGREGAR en Niveles de Idioma', async () => {
        await administracionGestionarNivelesIdioma.navegarAdministracionGestionarNivelesIdioma()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton +AGREGAR en Niveles de Estudio funciona correctamente', async ({administracionGestionarNivelEstudio}) => {

    await test.step('Click el boton +AGREGAR en Nivel de Estudio', async () => {
        await administracionGestionarNivelEstudio.navegarAdministracionGestionarNivelEstudio()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton +AGREGAR en Niveles de Informatica funciona correctamente', async ({administracionGestionarNivelesInformatica}) => {

    await test.step('Click el boton +AGREGAR en Nivel de Informatica', async () => {
        await administracionGestionarNivelesInformatica.navegarAdministracionGestionarNivelesInformatica()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton +AGREGAR en Idiomas funciona correctamente', async ({administracionGestionarIdiomas}) => {

    await test.step('Click el boton +AGREGAR en Idiomas', async () => {
        await administracionGestionarIdiomas.navegarAdministracionGestionarIdiomas()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton +AGREGAR en Disponibilidad Horaria funciona correctamente', async ({administracionGestionarDisponibilidadHoraria}) => {

    await test.step('Click el boton +AGREGAR en Disponibilidad Horaria', async () => {
        await administracionGestionarDisponibilidadHoraria.navegarAdministracionGestionarDisponibilidadHoraria()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton +AGREGAR en Sexo funciona correctamente', async ({administracionGestionarSexo}) => {

    await test.step('Click el boton +AGREGAR en Sexo', async () => {
        await administracionGestionarSexo.navegarAdministracionGestionarSexo()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton +AGREGAR en Estados de Estudios funciona correctamente', async ({administracionGestionarEstadosEstudios}) => {

    await test.step('Click el boton +AGREGAR en Estados de Estudios', async () => {
        await administracionGestionarEstadosEstudios.navegarAdministracionGestionarEstadosEstudios()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton +AGREGAR en Nacionalidades funciona correctamente', async ({administracionGestionarNacionalidades}) => {

    await test.step('Click el boton +AGREGAR en Nacionalidades', async () => {
        await administracionGestionarNacionalidades.navegarAdministracionGestionarNacionalidades()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton +AGREGAR en Titulos funciona correctamente', async ({administracionGestionarTitulos}) => {

    await test.step('Click el boton +AGREGAR en Titulos', async () => {
        await administracionGestionarTitulos.navegarAdministracionGestionarTitulos()
    })
})









test.afterEach(async ({ administracionBotonAgregar }) => {

    await test.step('Click en el boton +AGREGAR', async () => {
        await administracionBotonAgregar.navegarAdministracionBotonAgregar()
    })
})
