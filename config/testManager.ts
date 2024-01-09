import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageObjectModel/LoginPage'
import { MenuQRMiniaplicacion } from '../pageObjectModel/header/MenuQRMiniaplicacion'
import { MenuBuscarBeneficiario } from '../pageObjectModel/header/MenuBuscarBeneficiario'
import { MenuBuscarListadoPrestaciones } from '../pageObjectModel/header/MenuBuscarListadoPrestaciones'
import { MenuEntregaPrestaciones } from '../pageObjectModel/header/MenuEntregaPrestaciones'

const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    loginPage: LoginPage
    menuQRMiniaplicacion: MenuQRMiniaplicacion
    menuBuscarBeneficiario: MenuBuscarBeneficiario
    menuBuscarListadoPrestaciones: MenuBuscarListadoPrestaciones
    menuEntregaPrestaciones: MenuEntregaPrestaciones

}>({
    loginPage: async ({ page, context }, use) => {
        const loginPage = new LoginPage(page, context, environment)
        await use(loginPage)
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



})

export default test
