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

test('@Administracion @Regression (IDGS-34) Verificar que al clickear el boton +CREAR en Capacitaciones funciona correctamente', async ({administracionGestionarCapacitaciones}) => {

    await test.step('Click el boton +CREAR en Capacitaciones', async () => {
        await administracionGestionarCapacitaciones.navegarAdministracionGestionarCapacitaciones()
    })
})
test('@Administracion @Regression (IDGS-36) Verificar que al clickear el boton +CREAR en Intereses funciona correctamente', async ({administracionGestionarIntereses}) => {

    await test.step('Click el boton +CREAR en Intereses', async () => {
        await administracionGestionarIntereses.navegarAdministracionGestionarIntereses()
    })
})
test('@Administracion @Regression (IDGS-40) Verificar que al clickear el boton +CREAR en Enfermedades funciona correctamente', async ({administracionGestionarEnfermedades}) => {

    await test.step('Click el boton +CREAR en Enfermedades', async () => {
        await administracionGestionarEnfermedades.navegarAdministracionGestionarEnfermedades()
    })
})
test('@Administracion @Regression (IDGS-42) Verificar que al clickear el boton +CREAR en Profesiones funciona correctamente', async ({administracionGestionarProfesiones}) => {

    await test.step('Click el boton +CREAR en Profesiones', async () => {
        await administracionGestionarProfesiones.navegarAdministracionGestionarProfesiones()
    })
})
test('@Administracion @Regression (IDGS-45) Verificar que al clickear el boton +AGCREARREGAR en Discapacidades funciona correctamente', async ({administracionGestionarDiscapacidades}) => {

    await test.step('Click el boton +CREAR en Discapacidades', async () => {
        await administracionGestionarDiscapacidades.navegarAdministracionGestionarDiscapacidades()
    })
})
test('@Administracion @Regression (IDGS-48) Verificar que al clickear el boton +CREAR en Estado Civil funciona correctamente', async ({administracionGestionarEstadoCivil}) => {

    await test.step('Click el boton +CREAR en Estado Civil', async () => {
        await administracionGestionarEstadoCivil.navegarAdministracionGestionarEstadoCivil()
    })
})
test('@Administracion @Regression (IDGS-51) Verificar que al clickear el boton +CREAR en Estado Civil funciona correctamente', async ({administracionGestionarTiposDeCarnet}) => {

    await test.step('Click el boton +CREAR en Tipos de Carnet', async () => {
        await administracionGestionarTiposDeCarnet.navegarAdministracionGestionarTiposDeCarnet()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Niveles de Idioma funciona correctamente', async ({administracionGestionarNivelesIdioma}) => {

    await test.step('Click el boton +CREAR en Niveles de Idioma', async () => {
        await administracionGestionarNivelesIdioma.navegarAdministracionGestionarNivelesIdioma()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Niveles de Estudio funciona correctamente', async ({administracionGestionarNivelEstudio}) => {

    await test.step('Click el boton +CREAR en Nivel de Estudio', async () => {
        await administracionGestionarNivelEstudio.navegarAdministracionGestionarNivelEstudio()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Niveles de Informatica funciona correctamente', async ({administracionGestionarNivelesInformatica}) => {

    await test.step('Click el boton +CREAR en Nivel de Informatica', async () => {
        await administracionGestionarNivelesInformatica.navegarAdministracionGestionarNivelesInformatica()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Idiomas funciona correctamente', async ({administracionGestionarIdiomas}) => {

    await test.step('Click el boton +CREAR en Idiomas', async () => {
        await administracionGestionarIdiomas.navegarAdministracionGestionarIdiomas()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Disponibilidad Horaria funciona correctamente', async ({administracionGestionarDisponibilidadHoraria}) => {

    await test.step('Click el boton +CREAR en Disponibilidad Horaria', async () => {
        await administracionGestionarDisponibilidadHoraria.navegarAdministracionGestionarDisponibilidadHoraria()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Sexo funciona correctamente', async ({administracionGestionarSexo}) => {

    await test.step('Click el boton +CREAR en Sexo', async () => {
        await administracionGestionarSexo.navegarAdministracionGestionarSexo()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Estados de Estudios funciona correctamente', async ({administracionGestionarEstadosEstudios}) => {

    await test.step('Click el boton +CREAR en Estados de Estudios', async () => {
        await administracionGestionarEstadosEstudios.navegarAdministracionGestionarEstadosEstudios()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Nacionalidades funciona correctamente', async ({administracionGestionarNacionalidades}) => {

    await test.step('Click el boton +CREAR en Nacionalidades', async () => {
        await administracionGestionarNacionalidades.navegarAdministracionGestionarNacionalidades()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Titulos funciona correctamente', async ({administracionGestionarTitulos}) => {

    await test.step('Click el boton +CREAR en Titulos', async () => {
        await administracionGestionarTitulos.navegarAdministracionGestionarTitulos()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Vinculos Familiares funciona correctamente', async ({administracionGestionarVinculosFamiliares}) => {

    await test.step('Click el boton +CREAR en Vinculos Familiares', async () => {
        await administracionGestionarVinculosFamiliares.navegarAdministracionGestionarVinculosFamiliares()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Estados de Beneficiario funciona correctamente', async ({administracionGestionarEstadosBeneficiario}) => {

    await test.step('Click el boton +CREAR en Estados de Beneficiario', async () => {
        await administracionGestionarEstadosBeneficiario.navegarAdministracionGestionarEstadosBeneficiario()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Cargos funciona correctamente', async ({administracionGestionarCargos}) => {

    await test.step('Click el boton +CREAR en Cargos', async () => {
        await administracionGestionarCargos.navegarAdministracionGestionarCargos()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Motivos de Baja funciona correctamente', async ({administracionGestionarMotivosBaja}) => {

    await test.step('Click el boton +CREAR en Motivos de Baja', async () => {
        await administracionGestionarMotivosBaja.navegarAdministracionGestionarMotivosBaja()
    })
})
test('@Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Presencia funciona correctamente', async ({administracionGestionarPresencia}) => {

    await test.step('Click el boton +CREAR en Presencia', async () => {
        await administracionGestionarPresencia.navegarAdministracionGestionarPresencia()
    })
})

test.afterEach(async ({ administracionBotonAgregar }) => {

    await test.step('Click en el boton +CREAR', async () => {
        await administracionBotonAgregar.navegarAdministracionBotonAgregar()
    })
})
