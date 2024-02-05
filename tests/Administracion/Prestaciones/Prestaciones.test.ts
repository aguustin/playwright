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
        await prestaciones.clickPrestaciones()
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
        await prestacionesFiltroVer.clickPrestacionesFiltroVer()
    })
    await test.step('Click en checkbox ID. Deseleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickUnCheckboxId()
    })
    await test.step('Click en checkbox ID. Seleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickCheckboxId()
    })
    await test.step('Click en checkbox Nombre. Deseleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickUnCheckboxNombre()
    })
    await test.step('Click en checkbox Nombre. Seleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickCheckboxNombre()
    })
    await test.step('Click en checkbox Fecha Activacio. Deseleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickUnCheckboxFechaActivacio()
    })
    await test.step('Click en checkbox Fecha Activacio. Seleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickCheckboxFechaActivacio()
    })
    await test.step('Click en checkbox Fecha Baja. Deseleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickUnCheckboxFechaBaja()
    })
    await test.step('Click en checkbox Fecha Baja. Seleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickCheckboxFechaBaja()
    })
    await test.step('Click en checkbox Categoria. Deseleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickUnCheckboxCategoria()
    })
    await test.step('Click en checkbox Categoria. Seleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickCheckboxCategoria()
    })
    await test.step('Click en checkbox Cupo. Deseleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickUnCheckboxCupo()
    })
    await test.step('Click en checkbox Cupo. Seleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickCheckboxCupo()
    })
    await test.step('Click en checkbox Estado. Deseleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickUnCheckboxEstado()
    })
    await test.step('Click en checkbox Estado. Seleccionar checkbox', async () => {
        await prestacionesFiltroVer.clickCheckboxEstado()
    })
})
















