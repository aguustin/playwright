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
} from '../pageObjectModel/header/Administracion/Capacitaciones/GestionarCapacitacionesBuscadorDescripcion'
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
import {
    GestionarInteresBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/Intereses/GestionarInteresBuscadorDescripcion'
import {
    GestionarEnfermedadesBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/Enfermedades/GestionarEnfermedadesBuscadorDescripcion'
import {
    GestionarProfesionesBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/Profesiones/GestionarProfesionesBuscadorDescripcion'
import {
    GestionarDiscapacidadesBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/Discapacidades/GestionarDiscapacidadesBuscadorDescripcion'
import {
    GestionarEstadoCivilBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/EstadoCivil/GestionarEstadoCivilBuscadorDescripcion'
import {
    GestionarTiposCarnetBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/TiposCarnet/GestionarTiposCarnetBuscadorDescripcion'
import {
    GestionarNivelesIdiomaBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/NivelesIdioma/GestionarNivelesIdiomaBuscadorDescripcion'
import {
    GestionarNivelEstudioBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/NivelEstudio/GestionarNivelEstudioBuscadorDescripcion'
import {
    GestionarNivelesInformaticaBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/NivelesInformatica/GestionarNivelesInformaticaBuscadorDescripcion'
import {
    GestionarIdiomasBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/Idiomas/GestionarIdiomasBuscadorDescripcion'
import {
    GestionarDisponibilidadHorariaBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/DisponibilidadHoraria/GestionarDisponibilidadHorariaBuscadorDescripcion'
import {
    GestionarSexoBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/Sexo/GestionarSexoBuscadorDescripcion'
import {
    GestionarEstadosEstudiosBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/EstadosEstudios/GestionarEstadosEstudiosBuscadorDescripcion'
import {
    GestionarNacionalidadesBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/Nacionalidades/GestionarNacionalidadesBuscadorDescripcion'
import {
    GestionarTitulosBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/Titulos/GestionarTitulosBuscadorDescripcion'
import {
    GestionarVinculosFamiliaresBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/VinculosFamiliares/GestionarVinculosFamiliaresBuscadorDescripcion'
import {
    GestionarEstadosBeneficiarioBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/EstadosBeneficiario/GestionarEstadosBeneficiarioBuscadorDescripcion'
import {
    GestionarCargosBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/Cargos/GestionarCargosBuscadorDescripcion'
import {
    GestionarMotivosBajaBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/MotivosBaja/GestionarMotivosBajaBuscadorDescripcion'
import {
    GestionarPresenciaBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/Presencia/GestionarPresenciaBuscadorDescripcion'
import {
    GestionarPresenciaFormularioCrear
} from '../pageObjectModel/header/Administracion/Presencia/GestionarPresenciaFormularioCrear'
import { ModalFormularioBotonConfirmar } from '../pageObjectModel/header/Administracion/ModalFormularioBotonConfirmar'
import { ModalFormularioHeader } from '../pageObjectModel/header/Administracion/ModalFormularioHeader'
import {
    PrestacionesBuscadorDescripcion
} from '../pageObjectModel/header/Administracion/Prestaciones/PrestacionesBuscadorDescripcion'
import { Prestaciones } from '../pageObjectModel/header/Administracion/Prestaciones/Prestaciones'
import {
    PrestacionesBotonCrear
} from '../pageObjectModel/header/Administracion/Prestaciones/PrestacionesBotonCrear'
import { PrestacionesFiltroVer } from '../pageObjectModel/header/Administracion/Prestaciones/PrestacionesFiltroVer'
import {
    GestionarCapacitacionesFormulario
} from '../pageObjectModel/header/Administracion/Capacitaciones/GestionarCapacitacionesFormulario'
import { PrestacionesFormulario } from '../pageObjectModel/header/Administracion/Prestaciones/PrestacionesFormulario'

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
    gestionarInteresBuscadorDescripcion: GestionarInteresBuscadorDescripcion
    gestionarEnfermedadesBuscadorDescripcion: GestionarEnfermedadesBuscadorDescripcion
    gestionarProfesionesBuscadorDescripcion: GestionarProfesionesBuscadorDescripcion
    gestionarDiscapacidadesBuscadorDescripcion: GestionarDiscapacidadesBuscadorDescripcion
    gestionarEstadoCivilBuscadorDescripcion: GestionarEstadoCivilBuscadorDescripcion
    gestionarTiposCarnetBuscadorDescripcion: GestionarTiposCarnetBuscadorDescripcion
    gestionarNivelesIdiomaBuscadorDescripcion: GestionarNivelesIdiomaBuscadorDescripcion
    gestionarNivelEstudioBuscadorDescripcion: GestionarNivelEstudioBuscadorDescripcion
    gestionarNivelesInformaticaBuscadorDescripcion: GestionarNivelesInformaticaBuscadorDescripcion
    gestionarIdiomasBuscadorDescripcion: GestionarIdiomasBuscadorDescripcion
    gestionarDisponibilidadHorariaBuscadorDescripcion: GestionarDisponibilidadHorariaBuscadorDescripcion
    gestionarSexoBuscadorDescripcion: GestionarSexoBuscadorDescripcion
    gestionarEstadosEstudiosBuscadorDescripcion: GestionarEstadosEstudiosBuscadorDescripcion
    gestionarNacionalidadesBuscadorDescripcion: GestionarNacionalidadesBuscadorDescripcion
    gestionarTitulosBuscadorDescripcion: GestionarTitulosBuscadorDescripcion
    gestionarVinculosFamiliaresBuscadorDescripcion: GestionarVinculosFamiliaresBuscadorDescripcion
    gestionarEstadosBeneficiarioBuscadorDescripcion: GestionarEstadosBeneficiarioBuscadorDescripcion
    gestionarCargosBuscadorDescripcion: GestionarCargosBuscadorDescripcion
    gestionarMotivosBajaBuscadorDescripcion: GestionarMotivosBajaBuscadorDescripcion
    gestionarPresenciaBuscadorDescripcion: GestionarPresenciaBuscadorDescripcion
    gestionarPresenciaFormularioCrear: GestionarPresenciaFormularioCrear
    modalFormularioBotonConfirmar: ModalFormularioBotonConfirmar
    modalFormularioHeader: ModalFormularioHeader
    prestacionesBuscadorDescripcion: PrestacionesBuscadorDescripcion
    prestaciones: Prestaciones
    prestacionesBotonCrear :PrestacionesBotonCrear
    prestacionesFiltroVer: PrestacionesFiltroVer
    gestionarCapacitacionesFormulario: GestionarCapacitacionesFormulario
    prestacionesFormulario: PrestacionesFormulario


}>({
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context, environment))
    },


    // PRESTACIONES
    prestaciones: async ({ page, context }, use) => {
        await use(new Prestaciones(page, context, environment))
    },
    prestacionesBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new PrestacionesBuscadorDescripcion(page, context, environment))
    },
    prestacionesBotonCrear: async ({ page, context }, use) => {
        await use(new PrestacionesBotonCrear(page, context, environment))
    },
    prestacionesFiltroVer: async ({ page, context }, use) => {
        await use(new PrestacionesFiltroVer(page, context, environment))
    },
    prestacionesFormulario: async ({ page, context }, use) => {
        await use(new PrestacionesFormulario(page, context, environment))
    },





    // GESTIONAR CAPACITACIONES
    gestionarCapacitacionesBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarCapacitacionesBuscadorDescripcion(page, context, environment))
    },
    gestionarCapacitacionesFormulario: async ({ page, context }, use) => {
        await use(new GestionarCapacitacionesFormulario(page, context, environment))
    },






    // GESTIONAR INTERES
    gestionarInteresBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarInteresBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR ENFERMEDADES
    gestionarEnfermedadesBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarEnfermedadesBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR PROFESIONES
    gestionarProfesionesBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarProfesionesBuscadorDescripcion(page, context, environment))
    },


    // GESTIONAR DISCAPACIDADES
    gestionarDiscapacidadesBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarDiscapacidadesBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR ESTADO CIVIL
    gestionarEstadoCivilBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarEstadoCivilBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR TIPO CARNET
    gestionarTiposCarnetBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarTiposCarnetBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR NIVELES DE IDIOMA
    gestionarNivelesIdiomaBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarNivelesIdiomaBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR NIVELES DE ESTUDIOS
    gestionarNivelEstudioBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarNivelEstudioBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR NIVELES DE INFORMATICA
    gestionarNivelesInformaticaBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarNivelesInformaticaBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR IDIOMAS
    gestionarIdiomasBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarIdiomasBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR DISPONIBILIDAD HORARIA
    gestionarDisponibilidadHorariaBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarDisponibilidadHorariaBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR SEXO
    gestionarSexoBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarSexoBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR ESTADO DE ESTUDIOS | CAPACITACIONES
    gestionarEstadosEstudiosBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarEstadosEstudiosBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR NACIONALIDADES
    gestionarNacionalidadesBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarNacionalidadesBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR TITULOS
    gestionarTitulosBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarTitulosBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR VINCULOS FAMILIARES
    gestionarVinculosFamiliaresBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarVinculosFamiliaresBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR ESTADOS DE BENEFICIARIO
    gestionarEstadosBeneficiarioBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarEstadosBeneficiarioBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR CARGOS
    gestionarCargosBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarCargosBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR MOTIVOS DE BAJA
    gestionarMotivosBajaBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarMotivosBajaBuscadorDescripcion(page, context, environment))
    },

    // GESTIONAR PRESENCIA
    gestionarPresenciaBuscadorDescripcion: async ({ page, context }, use) => {
        await use(new GestionarPresenciaBuscadorDescripcion(page, context, environment))
    },
    gestionarPresenciaFormularioCrear: async ({ page, context }, use) => {
        await use(new GestionarPresenciaFormularioCrear(page, context, environment))
    },



    // ELEMENTOS COMUNES
    administracionBotonExportExcel: async ({ page, context }, use) => {
        await use(new AdministracionBotonExportExcel(page, context, environment))
    },
    administracionBotonAgregar: async ({ page, context }, use) => {
        await use(new AdministracionBotonAgregar(page, context, environment))
    },
    modalFormularioBotonConfirmar: async ({ page, context }, use) => {
        await use(new ModalFormularioBotonConfirmar(page, context, environment))
    },
    modalFormularioHeader: async ({ page, context }, use) => {
        await use(new ModalFormularioHeader(page, context, environment))
    },



    // ADMINISTRACION
    administracionGestionarCapacitaciones: async ({ page, context }, use) => {
        await use(new AdministracionGestionarCapacitaciones(page, context, environment))
    },
    administracionGestionarIntereses: async ({ page, context }, use) => {
        await use(new AdministracionGestionarIntereses(page, context, environment))
    },
    administracionGestionarEnfermedades: async ({ page, context }, use) => {
        await use(new AdministracionGestionarEnfermedades(page, context, environment))
    },
    administracionGestionarProfesiones: async ({ page, context }, use) => {
        await use(new AdministracionGestionarProfesiones(page, context, environment))
    },
    administracionListadoBeneficiariosValidados: async ({ page, context }, use) => {
        await use(new AdministracionListadoBeneficiariosValidados(page, context, environment))
    },
    administracionGestionarDiscapacidades: async ({ page, context }, use) => {
        await use(new AdministracionGestionarDiscapacidades(page, context, environment))
    },
    administracionGestionarEstadoCivil: async ({ page, context }, use) => {
        await use(new AdministracionGestionarEstadoCivil(page, context, environment))
    },
    administracionGestionarTiposDeCarnet: async ({ page, context }, use) => {
        await use(new AdministracionGestionarTiposDeCarnet(page, context, environment))
    },
    administracionGestionarNivelesIdioma: async ({ page, context }, use) => {
        await use(new AdministracionGestionarNivelesIdioma(page, context, environment))
    },
    administracionGestionarNivelEstudio: async ({ page, context }, use) => {
        await use(new AdministracionGestionarNivelEstudio(page, context, environment))
    },
    administracionGestionarNivelesInformatica: async ({ page, context }, use) => {
        await use(new AdministracionGestionarNivelesInformatica(page, context, environment))
    },
    administracionGestionarIdiomas: async ({ page, context }, use) => {
        await use(new AdministracionGestionarIdiomas(page, context, environment))
    },
    administracionGestionarDisponibilidadHoraria: async ({ page, context }, use) => {
        await use(new AdministracionGestionarDisponibilidadHoraria(page, context, environment))
    },
    administracionGestionarSexo: async ({ page, context }, use) => {
        await use(new AdministracionGestionarSexo(page, context, environment))
    },
    administracionGestionarEstadosEstudios: async ({ page, context }, use) => {
        await use(new AdministracionGestionarEstadosEstudios(page, context, environment))
    },
    administracionGestionarNacionalidades: async ({ page, context }, use) => {
        await use(new AdministracionGestionarNacionalidades(page, context, environment))
    },
    administracionGestionarTitulos: async ({ page, context }, use) => {
        await use(new AdministracionGestionarTitulos(page, context, environment))
    },
    administracionGestionarVinculosFamiliares: async ({ page, context }, use) => {
        await use(new AdministracionGestionarVinculosFamiliares(page, context, environment))
    },
    administracionGestionarEstadosBeneficiario: async ({ page, context }, use) => {
        await use(new AdministracionGestionarEstadosBeneficiario(page, context, environment))
    },
    administracionGestionarCargos: async ({ page, context }, use) => {
        await use(new AdministracionGestionarCargos(page, context, environment))
    },
    administracionGestionarMotivosBaja: async ({ page, context }, use) => {
        await use(new AdministracionGestionarMotivosBaja(page, context, environment))
    },
    administracionGestionarPresencia: async ({ page, context }, use) => {
        await use(new AdministracionGestionarPresencia(page, context, environment))
    },



    // HEADER
    menuQRMiniaplicacion: async ({ page, context }, use) => {
        await use(new MenuQRMiniaplicacion(page, context, environment))
    },
    menuBuscarBeneficiario: async ({ page, context }, use) => {
        await use(new MenuBuscarBeneficiario(page, context, environment))
    },
    menuBuscarListadoPrestaciones: async ({ page, context }, use) => {
        await use(new MenuBuscarListadoPrestaciones(page, context, environment))
    },
    menuEntregaPrestaciones: async ({ page, context }, use) => {
        await use(new MenuEntregaPrestaciones(page, context, environment))
    },
    menuAccionesMasivas: async ({ page, context }, use) => {
        await use(new MenuAccionesMasivas(page, context, environment))
    },
    menuIngresarBeneficiario: async ({ page, context }, use) => {
        await use(new MenuIngresarBeneficiario(page, context, environment))
    },
    menuAdministracion: async ({ page, context }, use) => {
        await use(new MenuAdministracion(page, context, environment))
    },
    menuCerrarSesion: async ({ page, context }, use) => {
        await use(new MenuCerrarSesion(page, context, environment))
    },


})

export default test
