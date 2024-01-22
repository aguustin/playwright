import test from '../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion }) => {
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

test('@Administracion @Regression (IDGS-10) Verificar que al clickear en Gestionar Capacitaciones funciona correctamente', async ({administracionGestionarCapacitaciones}) => {

    await test.step('Click en Gestionar Capacitaciones', async () => {
        await administracionGestionarCapacitaciones.navegarAdministracionGestionarCapacitaciones()
    })
})
test('@Administracion @Regression (IDGS-13) Verificar que al clickear en Gestionar Intereses funciona correctamente', async ({administracionGestionarIntereses}) => {

    await test.step('Click en Gestionar Intereses', async () => {
        await administracionGestionarIntereses.navegarAdministracionGestionarIntereses()
    })
})
test('@Administracion @Regression (IDGS-14) Verificar que al clickear en Gestionar Enfermedades funciona correctamente', async ({administracionGestionarEnfermedades}) => {

    await test.step('Click en Gestionar Enfermedades', async () => {
        await administracionGestionarEnfermedades.navegarAdministracionGestionarEnfermedades()
    })
})
test('@Administracion @Regression (IDGS-15) Verificar que al clickear en Gestionar Profesiones funciona correctamente', async ({administracionGestionarProfesiones}) => {

    await test.step('Click en Gestionar Profesiones', async () => {
        await administracionGestionarProfesiones.navegarAdministracionGestionarProfesiones()
    })
})
test('@Administracion @Regression (IDGS-16) Verificar que al clickear en Listado Beneficiarios Validados funciona correctamente', async ({administracionListadoBeneficiariosValidados}) => {

    await test.step('Click en Listado Beneficiarios Validados', async () => {
        await administracionListadoBeneficiariosValidados.navegarAdministracionListadoBeneficiariosValidados()
    })
})
test('@Administracion @Regression (IDGS-17) Verificar que al clickear en Gestionar Discapacidades funciona correctamente', async ({administracionGestionarDiscapacidades}) => {

    await test.step('Click en Gestionar Discapacidades', async () => {
        await administracionGestionarDiscapacidades.navegarAdministracionGestionarDiscapacidades()
    })
})
test('@Administracion @Regression (IDGS-18) Verificar que al clickear en Gestionar Estado Civil funciona correctamente', async ({administracionGestionarEstadoCivil}) => {

    await test.step('Click en Gestionar Estado Civil', async () => {
        await administracionGestionarEstadoCivil.navegarAdministracionGestionarEstadoCivil()
    })
})
test('@Administracion @Regression (IDGS-19) Verificar que al clickear en Gestionar Tipos de Carnet funciona correctamente', async ({administracionGestionarTiposDeCarnet}) => {

    await test.step('Click en Gestionar Tipos de Carnet', async () => {
        await administracionGestionarTiposDeCarnet.navegarAdministracionGestionarTiposDeCarnet()
    })
})
test('@Administracion @Regression (IDGS-20) Verificar que al clickear en Gestionar Niveles de Idioma funciona correctamente', async ({administracionGestionarNivelesIdioma}) => {

    await test.step('Click en Gestionar Niveles de Idioma', async () => {
        await administracionGestionarNivelesIdioma.navegarAdministracionGestionarNivelesIdioma()
    })
})
test('@Administracion @Regression (IDGS-21) Verificar que al clickear en Gestionar Nivel de Estudio funciona correctamente', async ({administracionGestionarNivelEstudio}) => {

    await test.step('Click en Gestionar Nivel de Estudio', async () => {
        await administracionGestionarNivelEstudio.navegarAdministracionGestionarNivelEstudio()
    })
})
test('@Administracion @Regression (IDGS-22) Verificar que al clickear en Gestionar Niveles de Informatica funciona correctamente', async ({administracionGestionarNivelesInformatica}) => {

    await test.step('Click en Gestionar Niveles de Informatica', async () => {
        await administracionGestionarNivelesInformatica.navegarAdministracionGestionarNivelesInformatica()
    })
})
test('@Administracion @Regression (IDGS-23) Verificar que al clickear en Gestionar Idiomas funciona correctamente', async ({administracionGestionarIdiomas}) => {

    await test.step('Click en Gestionar Idiomas', async () => {
        await administracionGestionarIdiomas.navegarAdministracionGestionarIdiomas()
    })
})
test('@Administracion @Regression (IDGS-24) Verificar que al clickear en Gestionar Disponibilidad horaria funciona correctamente', async ({administracionGestionarDisponibilidadHoraria}) => {

    await test.step('Click en Gestionar Disponibilidad horaria', async () => {
        await administracionGestionarDisponibilidadHoraria.navegarAdministracionGestionarDisponibilidadHoraria()
    })
})
test('@Administracion @Regression (IDGS-25) Verificar que al clickear en Gestionar Sexo funciona correctamente', async ({administracionGestionarSexo}) => {

    await test.step('Click en Gestionar Sexo', async () => {
        await administracionGestionarSexo.navegarAdministracionGestionarSexo()
    })
})
test('@Administracion @Regression (IDGS-26) Verificar que al clickear en Gestionar Estados de Estudios funciona correctamente', async ({administracionGestionarEstadosEstudios}) => {

    await test.step('Click en Gestionar Estados de Estudios', async () => {
        await administracionGestionarEstadosEstudios.navegarAdministracionGestionarEstadosEstudios()
    })
})
test('@Administracion @Regression (IDGS-27) Verificar que al clickear en Gestionar Nacionalidades funciona correctamente', async ({administracionGestionarNacionalidades}) => {

    await test.step('Click en Gestionar Nacionalidades', async () => {
        await administracionGestionarNacionalidades.navegarAdministracionGestionarNacionalidades()
    })
})
test('@Administracion @Regression (IDGS-28) Verificar que al clickear en Gestionar Titulos funciona correctamente', async ({administracionGestionarTitulos}) => {

    await test.step('Click en Gestionar Titulos', async () => {
        await administracionGestionarTitulos.navegarAdministracionGestionarTitulos()
    })
})
test('@Administracion @Regression (IDGS-29) Verificar que al clickear en Gestionar Vinculos Familiares funciona correctamente', async ({administracionGestionarVinculosFamiliares}) => {

    await test.step('Click en Gestionar Vinculos Familiares', async () => {
        await administracionGestionarVinculosFamiliares.navegarAdministracionGestionarVinculosFamiliares()
    })
})
test('@Administracion @Regression (IDGS-30) Verificar que al clickear en Gestionar Estados de Beneficiario funciona correctamente', async ({administracionGestionarEstadosBeneficiario}) => {

    await test.step('Click en Gestionar Estados de Beneficiario', async () => {
        await administracionGestionarEstadosBeneficiario.navegarAdministracionGestionarEstadosBeneficiario()
    })
})
test('@Administracion @Regression (IDGS-31) Verificar que al clickear en Gestionar Cargos funciona correctamente', async ({administracionGestionarCargos}) => {

    await test.step('Click en Gestionar Cargos', async () => {
        await administracionGestionarCargos.navegarAdministracionGestionarCargos()
    })
})
test('@Administracion @Regression (IDGS-32) Verificar que al clickear en Gestionar Motivos de Baja funciona correctamente', async ({administracionGestionarMotivosBaja}) => {

    await test.step('Click en Gestionar Motivos de Baja', async () => {
        await administracionGestionarMotivosBaja.navegarAdministracionGestionarMotivosBaja()
    })
})
test('@Administracion @Regression (IDGS-33) Verificar que al clickear en Gestionar Presencia funciona correctamente', async ({administracionGestionarPresencia}) => {

    await test.step('Click en Gestionar Presencia', async () => {
        await administracionGestionarPresencia.navegarAdministracionGestionarPresencia()
    })
})















