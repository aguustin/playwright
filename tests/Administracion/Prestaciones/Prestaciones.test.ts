import test from '../../../config/testManager'

test.beforeEach(async ({ loginPage, menuAdministracion, prestaciones }) => {
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
        await prestaciones.navegarPrestaciones()
    })

})

test('@Prestaciones @Regression (IDGS-53) Verificar que al ingresar datos validos en el buscador Descripcion en Prestaciones funciona correctamente', async ({prestacionesBuscadorDescripcion}) => {

    await test.step('Ingresar datos en el buscador Descripcion', async () => {
        await prestacionesBuscadorDescripcion.ingresoBuscadorDescripcion()
    })
})
test('@Prestaciones @Regression (IDGS-53) Verificar que funciona correctamente el boton +CREAR en la ventana de Prestaciones', async ({prestacionesBotonCrear}) => {

    await test.step('Click en el boton +CREAR', async () => {
        await prestacionesBotonCrear.navegarPrestacionesBotonCrear()
    })
})
test('@Test @Prestaciones @Regression (IDGS-53) Verificar que funciona correctamente el boton VER de los filtros en la ventana de Prestaciones', async ({prestacionesFiltroVer}) => {

    await test.step('Click en el boton VER de los filtros', async () => {
        await prestacionesFiltroVer.navegarPrestacionesFiltroVer()
    })
})
















