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

test('@Test @Administracion @Regression (IDGS-35) Verificar que al clickear el boton EXPORTAR a Excel en Capacitaciones funciona correctamente', async ({administracionGestionarCapacitaciones}) => {

    await test.step('Click el boton EXPORTAR a Excel en Capacitaciones', async () => {
        await administracionGestionarCapacitaciones.navegarAdministracionGestionarCapacitaciones()
    })
})
test('@Test @Administracion @Regression (IDGS-37) Verificar que al clickear el boton EXPORTAR a Excel en Intereses funciona correctamente', async ({administracionGestionarIntereses}) => {

    await test.step('Click el boton EXPORTAR a Excel en Intereses', async () => {
        await administracionGestionarIntereses.navegarAdministracionGestionarIntereses()
    })
})
test('@Test @Administracion @Regression (IDGS-40) Verificar que al clickear el boton EXPORTAR a Excel en Enfermedades funciona correctamente', async ({administracionGestionarEnfermedades}) => {

    await test.step('Click el boton EXPORTAR a Excel en Enfermedades', async () => {
        await administracionGestionarEnfermedades.navegarAdministracionGestionarEnfermedades()
    })
})
test('@Test @Administracion @Regression (IDGS-43) Verificar que al clickear el boton EXPORTAR Excel en Profesiones funciona correctamente', async ({administracionGestionarProfesiones}) => {

    await test.step('Click el EXPORTAR a Excel Excel en Profesiones', async () => {
        await administracionGestionarProfesiones.navegarAdministracionGestionarProfesiones()
    })
})
test('@Test @Administracion @Regression (IDGS-46) Verificar que al clickear el boton EXPORTAR a Excel en Discapacidades funciona correctamente', async ({administracionGestionarDiscapacidades}) => {

    await test.step('Click el boton EXPORTAR a Excel en Discapacidades', async () => {
        await administracionGestionarDiscapacidades.navegarAdministracionGestionarDiscapacidades()
    })
})
test('@Test @Administracion @Regression (IDGS-49) Verificar que al clickear el boton EXPORTAR a Excel en Estado Civil funciona correctamente', async ({administracionGestionarEstadoCivil}) => {

    await test.step('Click el boton EXPORTAR a Excel en Estado Civil', async () => {
        await administracionGestionarEstadoCivil.navegarAdministracionGestionarEstadoCivil()
    })
})
test('@Test @Administracion @Regression (IDGS-52) Verificar que al clickear el boton EXPORTAR a Excel en Estado Civil funciona correctamente', async ({administracionGestionarTiposDeCarnet}) => {

    await test.step('Click el boton EXPORTAR a Excel en Tipos de Carnet', async () => {
        await administracionGestionarTiposDeCarnet.navegarAdministracionGestionarTiposDeCarnet()
    })
})
test('@Test @Administracion @Regression (IDGS-55) Verificar que al clickear el boton EXPORTAR a Excel en Niveles de Idioma funciona correctamente', async ({administracionGestionarNivelesIdioma}) => {

    await test.step('Click el boton EXPORTAR a Excel en Niveles de Idioma', async () => {
        await administracionGestionarNivelesIdioma.navegarAdministracionGestionarNivelesIdioma()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton EXPORTAR a Excel en Niveles de Estudio funciona correctamente', async ({administracionGestionarNivelEstudio}) => {

    await test.step('Click el boton EXPORTAR a Excel en Niveles de Estudio', async () => {
        await administracionGestionarNivelEstudio.navegarAdministracionGestionarNivelEstudio()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton EXPORTAR a Excel en Niveles de Informatica funciona correctamente', async ({administracionGestionarNivelesInformatica}) => {

    await test.step('Click el boton EXPORTAR a Excel en Nivel de Informatica', async () => {
        await administracionGestionarNivelesInformatica.navegarAdministracionGestionarNivelesInformatica()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton EXPORTAR a Excel en Idiomas funciona correctamente', async ({administracionGestionarIdiomas}) => {

    await test.step('Click el boton EXPORTAR a Excel en Idiomas', async () => {
        await administracionGestionarIdiomas.navegarAdministracionGestionarIdiomas()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton  EXPORTAR a Excel en Disponibilidad Horaria funciona correctamente', async ({administracionGestionarDisponibilidadHoraria}) => {

    await test.step('Click el boton  EXPORTAR a Excel en Disponibilidad Horaria', async () => {
        await administracionGestionarDisponibilidadHoraria.navegarAdministracionGestionarDisponibilidadHoraria()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton  EXPORTAR a Excel en Sexo funciona correctamente', async ({administracionGestionarSexo}) => {

    await test.step('Click el boton  EXPORTAR a Excel en Sexo', async () => {
        await administracionGestionarSexo.navegarAdministracionGestionarSexo()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton EXPORTAR a Excel en Estados de Estudios funciona correctamente', async ({administracionGestionarEstadosEstudios}) => {

    await test.step('Click el boton  EXPORTAR a Excel en Estados de Estudios', async () => {
        await administracionGestionarEstadosEstudios.navegarAdministracionGestionarEstadosEstudios()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton EXPORTAR a Excel en Nacionalidades funciona correctamente', async ({administracionGestionarNacionalidades}) => {

    await test.step('Click el boton EXPORTAR a Excel en Nacionalidades', async () => {
        await administracionGestionarNacionalidades.navegarAdministracionGestionarNacionalidades()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton EXPORTAR a Excel en Titulos funciona correctamente', async ({administracionGestionarTitulos}) => {

    await test.step('Click el boton EXPORTAR a Excel en Titulos', async () => {
        await administracionGestionarTitulos.navegarAdministracionGestionarTitulos()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton EXPORTAR a Excel en Vinculos Familiares funciona correctamente', async ({administracionGestionarVinculosFamiliares}) => {

    await test.step('Click el EXPORTAR a Excel en Vinculos Familiares', async () => {
        await administracionGestionarVinculosFamiliares.navegarAdministracionGestionarVinculosFamiliares()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton EXPORTAR a Excel en Estados de Beneficiario funciona correctamente', async ({administracionGestionarEstadosBeneficiario}) => {

    await test.step('Click el boton EXPORTAR a Excel en Estados de Beneficiario', async () => {
        await administracionGestionarEstadosBeneficiario.navegarAdministracionGestionarEstadosBeneficiario()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton EXPORTAR a Excel en Cargos funciona correctamente', async ({administracionGestionarCargos}) => {

    await test.step('Click el boton EXPORTAR a Excel en Cargos', async () => {
        await administracionGestionarCargos.navegarAdministracionGestionarCargos()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton +CREAR en Motivos de Baja funciona correctamente', async ({administracionGestionarMotivosBaja}) => {

    await test.step('Click el boton EXPORTAR a Excel en Motivos de Baja', async () => {
        await administracionGestionarMotivosBaja.navegarAdministracionGestionarMotivosBaja()
    })
})
test('@Test @Administracion @Regression (IDGS-54) Verificar que al clickear el boton EXPORTAR a Excel en Presencia funciona correctamente', async ({administracionGestionarPresencia}) => {

    await test.step('Click el boton EXPORTAR a Excel en Presencia', async () => {
        await administracionGestionarPresencia.navegarAdministracionGestionarPresencia()
    })
})

test.afterEach(async ({ administracionBotonExportExcel }) => {

    await test.step('Click en el boton EXPORT', async () => {
        await administracionBotonExportExcel.navegarAdministracionBotonExportExcel()
    })
})
