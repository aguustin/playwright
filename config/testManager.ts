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
import { AdministracionBotonAgregar } from '../pageObjectModel/header/Administracion/AdministracionBotonAgregar'
import {
    AdministracionGestionarIntereses
} from '../pageObjectModel/header/Administracion/AdministracionGestionarIntereses'
import {
    AdministracionGestionarEnfermedades
} from '../pageObjectModel/header/Administracion/AdministracionGestionarEnfermedades'
import {
    AdministracionGestionarProfesiones
} from '../pageObjectModel/header/Administracion/AdministracionGestionarProfesiones'
import {
    AdministracionListadoBeneficiariosValidados
} from '../pageObjectModel/header/Administracion/AdministracionListadoBeneficiariosValidados'
import {
    AdministracionGestionarDiscapacidades
} from '../pageObjectModel/header/Administracion/AdministracionGestionarDiscapacidades'
import {
    AdministracionGestionarEstadoCivil
} from '../pageObjectModel/header/Administracion/AdministracionGestionarEstadoCivil'
import {
    AdministracionGestionarTiposDeCarnet
} from '../pageObjectModel/header/Administracion/AdministracionGestionarTiposDeCarnet'
import {
    AdministracionGestionarNivelesIdioma
} from '../pageObjectModel/header/Administracion/AdministracionGestionarNivelesIdioma'
import {
    AdministracionGestionarNivelEstudio
} from '../pageObjectModel/header/Administracion/AdministracionGestionarNivelEstudio'
import {
    AdministracionGestionarNivelesInformatica
} from '../pageObjectModel/header/Administracion/AdministracionGestionarNivelesInformatica'
import { AdministracionGestionarIdiomas } from '../pageObjectModel/header/Administracion/AdministracionGestionarIdiomas'
import {
    AdministracionGestionarDisponibilidadHoraria
} from '../pageObjectModel/header/Administracion/AdministracionGestionarDisponibilidadHoraria'
import { AdministracionGestionarSexo } from '../pageObjectModel/header/Administracion/AdministracionGestionarSexo'
import {
    AdministracionGestionarEstadosEstudios
} from '../pageObjectModel/header/Administracion/AdministracionGestionarEstadosEstudios'
import {
    AdministracionGestionarNacionalidades
} from '../pageObjectModel/header/Administracion/AdministracionGestionarNacionalidades'
import { AdministracionGestionarTitulos } from '../pageObjectModel/header/Administracion/AdministracionGestionarTitulos'
import {
    AdministracionGestionarVinculosFamiliares
} from '../pageObjectModel/header/Administracion/AdministracionGestionarVinculosFamiliares'
import {
    AdministracionGestionarEstadosBeneficiario
} from '../pageObjectModel/header/Administracion/AdministracionGestionarEstadosBeneficiario'
import { AdministracionGestionarCargos } from '../pageObjectModel/header/Administracion/AdministracionGestionarCargos'
import {
    AdministracionGestionarMotivosBaja
} from '../pageObjectModel/header/Administracion/AdministracionGestionarMotivosBaja'
import {
    AdministracionGestionarPresencia
} from '../pageObjectModel/header/Administracion/AdministracionGestionarPresencia'

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
    administracionBotonAgregar: AdministracionBotonAgregar
    administracionGestionarIntereses: AdministracionGestionarIntereses
    administracionGestionarEnfermedades: AdministracionGestionarEnfermedades
    administracionGestionarProfesiones: AdministracionGestionarProfesiones
    administracionListadoBeneficiariosValidados: AdministracionListadoBeneficiariosValidados
    administracionGestionarDiscapacidades: AdministracionGestionarDiscapacidades
    administracionGestionarEstadoCivil: AdministracionGestionarEstadoCivil
    administracionGestionarTiposDeCarnet: AdministracionGestionarTiposDeCarnet
    administracionGestionarNivelesIdioma: AdministracionGestionarNivelesIdioma
    administracionGestionarNivelEstudio: AdministracionGestionarNivelEstudio
    administracionGestionarNivelesInformatica: AdministracionGestionarNivelesInformatica
    administracionGestionarIdiomas: AdministracionGestionarIdiomas
    administracionGestionarDisponibilidadHoraria: AdministracionGestionarDisponibilidadHoraria
    administracionGestionarSexo: AdministracionGestionarSexo
    administracionGestionarEstadosEstudios: AdministracionGestionarEstadosEstudios
    administracionGestionarNacionalidades: AdministracionGestionarNacionalidades
    administracionGestionarTitulos: AdministracionGestionarTitulos
    administracionGestionarVinculosFamiliares: AdministracionGestionarVinculosFamiliares
    administracionGestionarEstadosBeneficiario: AdministracionGestionarEstadosBeneficiario
    administracionGestionarCargos: AdministracionGestionarCargos
    administracionGestionarMotivosBaja: AdministracionGestionarMotivosBaja
    administracionGestionarPresencia: AdministracionGestionarPresencia


}>({
    loginPage: async ({ page, context }, use) => {
        const loginPage = new LoginPage(page, context, environment)
        await use(loginPage)
    },



    administracionGestionarEstadosBeneficiario: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarEstadosBeneficiario(page, context, environment)
        await use(menu)
    },
    administracionGestionarCargos: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarCargos(page, context, environment)
        await use(menu)
    },
    administracionGestionarMotivosBaja: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarMotivosBaja(page, context, environment)
        await use(menu)
    },
    administracionGestionarPresencia: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarPresencia(page, context, environment)
        await use(menu)
    },




    // ADMINISTRACION
    administracionGestionarCapacitaciones: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarCapacitaciones(page, context, environment)
        await use(menu)
    },
    administracionGestionarIntereses: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarIntereses(page, context, environment)
        await use(menu)
    },
    administracionGestionarEnfermedades: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarEnfermedades(page, context, environment)
        await use(menu)
    },
    administracionGestionarProfesiones: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarProfesiones(page, context, environment)
        await use(menu)
    },
    administracionListadoBeneficiariosValidados: async ({ page, context }, use) => {
        const menu = new AdministracionListadoBeneficiariosValidados(page, context, environment)
        await use(menu)
    },
    administracionGestionarDiscapacidades: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarDiscapacidades(page, context, environment)
        await use(menu)
    },
    administracionGestionarEstadoCivil: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarEstadoCivil(page, context, environment)
        await use(menu)
    },
    administracionGestionarTiposDeCarnet: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarTiposDeCarnet(page, context, environment)
        await use(menu)
    },
    administracionGestionarNivelesIdioma: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarNivelesIdioma(page, context, environment)
        await use(menu)
    },
    administracionGestionarNivelEstudio: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarNivelEstudio(page, context, environment)
        await use(menu)
    },
    administracionGestionarNivelesInformatica: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarNivelesInformatica(page, context, environment)
        await use(menu)
    },
    administracionGestionarIdiomas: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarIdiomas(page, context, environment)
        await use(menu)
    },
    administracionGestionarDisponibilidadHoraria: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarDisponibilidadHoraria(page, context, environment)
        await use(menu)
    },
    administracionGestionarSexo: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarSexo(page, context, environment)
        await use(menu)
    },
    administracionGestionarEstadosEstudios: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarEstadosEstudios(page, context, environment)
        await use(menu)
    },
    administracionGestionarNacionalidades: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarNacionalidades(page, context, environment)
        await use(menu)
    },
    administracionGestionarTitulos: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarTitulos(page, context, environment)
        await use(menu)
    },
    administracionGestionarVinculosFamiliares: async ({ page, context }, use) => {
        const menu = new AdministracionGestionarVinculosFamiliares(page, context, environment)
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
    administracionBotonAgregar: async ({ page, context }, use) => {
        const menu = new AdministracionBotonAgregar(page, context, environment)
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
