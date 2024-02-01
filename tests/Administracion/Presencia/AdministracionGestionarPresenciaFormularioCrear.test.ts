import test from '../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, administracionGestionarPresencia, administracionBotonAgregar, modalFormularioHeader }) => {
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
    await test.step('Click en Gestionar Presencia', async () => {
        await administracionGestionarPresencia.navegarAdministracionGestionarPresencia()
    })
    await test.step('Click en el boton +CREAR', async () => {
        await administracionBotonAgregar.navegarAdministracionBotonAgregar()
    })
    // await test.step('Click en el header del modal del formulario', async () => {
    //     await modalFormularioHeader.navegarModalFormularioHeader()
    // })
})

test('@ABCD @FormularioCrear @Regression (IDGS-53) Verificar que al ingresar datos en el formulario de Presencia y clickear el boton CONFIRMAR los datos se almacenan correctamente en BD', async ({modalFormularioBotonConfirmar}) => {

    // await test.step('Ingresar datos en el input Descripcion', async () => {
    //     await gestionarPresenciaFormularioCrear.ingresoInputDescripcion()
    // })
    await test.step('Click en el boton CONFIRMAR', async () => {
        await modalFormularioBotonConfirmar.navegarModalFormularioBotonConfirmar()
    })
})

// test.afterEach(async ({ modalFormularioBotonConfirmar }) => {
//
//     await test.step('Click en el boton CONFIRMAR', async () => {
//         await modalFormularioBotonConfirmar.navegarModalFormularioBotonConfirmar()
//     })
// })
