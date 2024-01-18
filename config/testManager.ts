import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageObjectModel/LoginPage'
import { MenuQRMiniaplicacion } from '../pageObjectModel/header/MenuQRMiniaplicacion'
import { MenuBuscarBeneficiario } from '../pageObjectModel/header/MenuBuscarBeneficiario'
import { MenuBuscarListadoPrestaciones } from '../pageObjectModel/header/MenuBuscarListadoPrestaciones'
import { MenuEntregaPrestaciones } from '../pageObjectModel/header/MenuEntregaPrestaciones'
import { MenuAccionesMasivas } from '../pageObjectModel/header/MenuAccionesMasivas'
import { MenuIngresarBeneficiario } from '../pageObjectModel/header/MenuIngresarBeneficiario'
import { MenuAdministracion } from '../pageObjectModel/header/MenuAdministracion'
import { MenuCerrarSesion } from '../pageObjectModel/header/MenuCerrarSesion'
import {
    AdministracionGestionarCapacitaciones
} from '../pageObjectModel/header/Administracion/AdministracionGestionarCapacitaciones'
import {
    GestionarCapacitacionesBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/GestionarCapacitaciones/GestionarCapacitacionesBuscadorDescripcion'
import {
    AdministracionBotonExportExcel
} from '../pageObjectModel/header/Administracion/AdministracionBotonExportExcel'

const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    loginPage: LoginPage
    menuQRMiniaplicacion: MenuQRMiniaplicacion
    menuBuscarBeneficiario: MenuBuscarBeneficiario
    menuBuscarListadoPrestaciones: MenuBuscarListadoPrestaciones
    menuEntregaPrestaciones: MenuEntregaPrestaciones
    menuAccionesMasivas: MenuAccionesMasivas
    menuIngresarBeneficiario: MenuIngresarBeneficiario
    menuAdministracion: MenuAdministracion
    menuCerrarSesion: MenuCerrarSesion
    administracionGestionarCapacitaciones: AdministracionGestionarCapacitaciones
    gestionarCapacitacionesBuscadorDescripcion: GestionarCapacitacionesBuscadorDescripcion
    administracionBotonExportExcel: AdministracionBotonExportExcel

}>({
    loginPage: async ({ page, context }, use) => {
        const loginPage = new LoginPage(page, context, environment)
        await use(loginPage)
    },


    // ADMINISTRACION
    administracionGestionarCapacitaciones: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarCapacitaciones(page, context, environment)
        await use(menu)
    },

    // GESTIONAR CAPACITACIONES
    gestionarCapacitacionesBuscadorDescripcion: async ({ page, context }, use) => {
        const menu = new GestionarCapacitacionesBuscadorDescripcion(page, context, environment)
        await use(menu)
    },
    administracionBotonExportExcel: async ({ page, context }, use) => {
        const menu = new AdministracionBotonExportExcel(page, context, environment)
        await use(menu)
    },





    // HEADER
    menuQRMiniaplicacion: async ({ page, context }, use) => {
        const menu = new MenuQRMiniaplicacion(page, context, environment)
        await use(menu)
    },
    menuBuscarBeneficiario: async ({ page, context }, use) => {
        const menu = new MenuBuscarBeneficiario(page, context, environment)
        await use(menu)
    },
    menuBuscarListadoPrestaciones: async ({ page, context }, use) => {
        const menu = new MenuBuscarListadoPrestaciones(page, context, environment)
        await use(menu)
    },
    menuEntregaPrestaciones: async ({ page, context }, use) => {
        const menu = new MenuEntregaPrestaciones(page, context, environment)
        await use(menu)
    },
    menuAccionesMasivas: async ({ page, context }, use) => {
        const menu = new MenuAccionesMasivas(page, context, environment)
        await use(menu)
    },
    menuIngresarBeneficiario: async ({ page, context }, use) => {
        const menu = new MenuIngresarBeneficiario(page, context, environment)
        await use(menu)
    },
    menuAdministracion: async ({ page, context }, use) => {
        const menu = new MenuAdministracion(page, context, environment)
        await use(menu)
    },
    menuCerrarSesion: async ({ page, context }, use) => {
        const menu = new MenuCerrarSesion(page, context, environment)
        await use(menu)
    },



})

export default test
