import test from '../../../config/testManager'
import {
    PrestacionesBotonCrear
} from '../../../pageObjectModel/header/Administracion/Prestaciones/PrestacionesBotonCrear'

test.beforeEach(async ({ loginPage, menuAdministracion, prestaciones, prestacionesBotonCrear }) => {
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
    await test.step('Click en Prestaciones', async () => {
        await prestaciones.clickPrestaciones()
    })
    await test.step('Click en el boton +CREAR', async () => {
        await prestacionesBotonCrear.clickBotonCrear();
    })

})

test('@ABCD @Prestaciones @Regression (IDGS-53) Verificar que al ingresar datos validos en el formulario de Prestaciones funciona correctamente', async ({prestacionesFormulario}) => {


    await test.step('Click sobre el formulario', async () => {
        await prestacionesFormulario.clickFormularioIframe();
    })
    await test.step('Ingresar datos en el input Descripcion', async () => {
        await prestacionesFormulario.completarPrestacionesFormulario();
    })
    await test.step('Click en el boton CONFIRMAR', async () => {
        await prestacionesFormulario.clickBotonGuardar();
    })
})


















