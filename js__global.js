/**========================================================================
 * ?                                ABOUT
 * @author         :  Edgardo Ferreyra
 * @email          :  ed20052006@hotmail.com
 * @repo           :  
 * @createdOn      :  14/05/2022
 * @description    :  
 *========================================================================**/
/**
 * description
 * 
 * Usado para Declarar Variable Globales
 */
class datosHamurabi {
    constructor(Poblacion, Alimento, Tierra, Dinero) {
        this.Poblacion = Poblacion;
        this.Alimento = Alimento;
        this.Tierra = Tierra;
        this.Dinero = Dinero;
        this.Densidad = 0;
        this.Etapa = 1;
        this.CantAños = 10;
        this.Nombre = "";
        this.Random = 0;
        this.AliPoblacion = 0;
        /*
          Control Interno
        */
        this.LlegoFinal = false;
        this.NivelJuego = 0;
        this.DensidadFoto = {
                Todo1: 9.5,
                Todo2: 8,
                Todo3: 12
            }
            /*
              Para el Final Estadistico (Libreria Morris)
            */
        this.statNacimientos = [];
        this.statMuertes = [];
        this.statPoblacion = [];
        this.statAlimento = [];
        this.statTierra = [];
        this.statDinero = [];
        this.statValorVenta = [];
        this.statValorCompra = [];
        this.statCantCompraAlimento = [];
        this.statCantCompraTierra = [];
        this.statCantVentaAlimento = [];
        this.statCantVentaTierra = [];
        this.statDensidad = [];
        this.statAliPoblacion = [];
    }
    Sumar(Poblacio, Aliment, Tierr, Diner) {
        if (Poblacio != null && Poblacio != undefined) this.Poblacion += Poblacio;
        if (Aliment != null && Aliment != undefined) this.Alimento += Aliment;
        if (Tierr != null && Tierr != undefined) this.Tierra += Tierr;
        if (Diner != null && Diner != undefined) this.Dinero += Diner;
    }
    Restar(Poblacio, Aliment, Tierr, Diner) {
        if (Poblacio != null && Poblacio != undefined) this.Poblacion -= Poblacio;
        if (Aliment != null && Aliment != undefined) this.Alimento -= Aliment;
        if (Tierr != null && Tierr != undefined) this.Tierra -= Tierr;
        if (Diner != null && Diner != undefined) this.Dinero -= Diner;
    }
    SumarEtapa() {
        if (this.Etapa < this.CantAños) {
            this.Etapa++;
        } else {
            this.LlegoFinal = true;
        }
    }
    CargarDensidad() {
        let densi = this.Tierra / this.Poblacion;
        this.Densidad = Number(densi.toFixed(2));
    }
    CargarEstadistica(Nac, Mue, Pob, Ali, Tie, Din, VVen, VCom, CCAlim, CCTier, CVAlim, CVTier, AliPo) {
        this.statNacimientos.push(Nac);
        this.statMuertes.push(Mue);
        this.statPoblacion.push(Pob);
        this.statAlimento.push(Ali);
        this.statTierra.push(Tie);
        this.statDinero.push(Din);
        this.statValorVenta.push(VVen);
        this.statValorCompra.push(VCom);
        this.statCantCompraAlimento.push(CCAlim);
        this.statCantCompraTierra.push(CCTier);
        this.statCantVentaAlimento.push(CVAlim);
        this.statCantVentaTierra.push(CVTier);
        let densi = Number(Tie) / Number(Pob);
        densi = Number(densi.toFixed(2));
        this.statDensidad.push(densi);
        this.statAliPoblacion.push(AliPo);
    }
}

class NivelDeHamurabi {
    constructor(_Nivel) {
        this.Nivel = 0,
            this.TextNivel = this.PasaTexto(_Nivel),
            this.RnDnivelMuertes = 50,
            this.RnDnivelNacimientos = 10,
            this.RnDCompra = 0,
            this.RnDVenta = 0,
            this.ValorRnDCompra = [0, 0],
            this.ValorRnDVenta = [0, 0]
    }
    PasaTexto(_Nivel) {
        if (_Nivel != 1 && _Nivel != 2 && _Nivel != 3) return "Super";
        if (_Nivel == 1) return "Basico";
        if (_Nivel == 2) return "Avanzado";
        if (_Nivel == 3) return "Experto";
    }
    Inicia(_Nivel) {
        this.Nivel = _Nivel;
        switch (this.Nivel) {
            case 1:
                this.RnDnivelMuertes = 10;
                this.RnDnivelNacimientos = 10;
                this.ValorRnDCompra[0] = 1;
                this.ValorRnDCompra[1] = 10;
                this.ValorRnDVenta[0] = 1;
                this.ValorRnDVenta[1] = 10;
                break;
            case 2:
                this.RnDnivelMuertes = 12;
                this.RnDnivelNacimientos = 5;
                this.ValorRnDCompra[0] = 1;
                this.ValorRnDCompra[1] = 5;
                this.ValorRnDVenta[0] = 1;
                this.ValorRnDVenta[1] = 5;
                break;
            case 3:
                this.RnDnivelMuertes = 15;
                this.RnDnivelNacimientos = 3;
                this.ValorRnDCompra[0] = 1;
                this.ValorRnDCompra[1] = 4;
                this.ValorRnDVenta[0] = 1;
                this.ValorRnDVenta[1] = 4;
                break;
            default:
                this.RnDnivelMuertes = 50;
                this.RnDnivelNacimientos = 10;
                this.ValorRnDCompra[0] = 0;
                this.ValorRnDCompra[1] = 1;
                this.ValorRnDVenta[0] = 0;
                this.ValorRnDVenta[1] = 1;
                break;
        }
        this.TextNivel = this.PasaTexto(this.Nivel);
    }
    ColorNivel() {
        const __varIdInterno = document.getElementById("nombresGeneral");
        switch (this.Nivel) {
            case 1:
                __varIdInterno.setAttribute("class", "nombresGeneral1");
                break;
            case 2:
                __varIdInterno.setAttribute("class", "nombresGeneral2");
                break;
            case 3:
                __varIdInterno.setAttribute("class", "nombresGeneral3");
                break;
            default:
                __varIdInterno.setAttribute("class", "nombresGeneral0");
                break;
        }
    }
    EjecutarRnd() {
        switch (this.Nivel) {
            case 1:
                this.RnDCompra = RnD(this.ValorRnDCompra[0], this.ValorRnDCompra[1], 2);
                this.RnDVenta = RnD(this.ValorRnDVenta[0], this.ValorRnDVenta[1], 2);
                break;
            case 2:
                this.RnDCompra = RnD(this.ValorRnDCompra[0], this.ValorRnDCompra[1], 2);
                this.RnDVenta = RnD(this.ValorRnDVenta[0], this.ValorRnDVenta[1], 2);
                break;
            case 3:
                this.RnDCompra = RnD(this.ValorRnDCompra[0], this.ValorRnDCompra[1], 2);
                this.RnDVenta = this.RnDCompra;
                break;
            default:
                this.RnDCompra = RnD(this.ValorRnDCompra[0], this.ValorRnDCompra[1], 2);
                this.RnDVenta = RnD(this.ValorRnDVenta[0], this.ValorRnDVenta[1], 2);
                break;
        }
    }
}

class innerHTML_Table {
    constructor() {
        this.___table = "",
            this.___tr = "",
            this.___th = "",
            this.___td = "",
            this.___table1 = "",
            this.___tr1 = "",
            this.___th1 = "",
            this.___td1 = "",
            this.___ValorReturn = ""

    }
    AbrirTabla(ValorAdentro) {
        if (ValorAdentro == null || ValorAdentro == undefined) {
            ValorAdentro = "";
        }
        this.___table = `<table class='__table' ${ValorAdentro}>`;
        this.___tr = "<tr class='__tr'>";
        this.___th = "<th class='__th'>";
        this.___td = "<td class='__td'>";
        this.___table1 = "</table>";
        this.___tr1 = "</tr>";
        this.___th1 = "</th>";
        this.___td1 = "</td>";
        this.___ValorReturn = "";
        this.___ValorReturn += this.___table;
    }
    AbrirTr() {
        this.___ValorReturn += this.___tr;
    }
    AbrirTd() {
        this.___ValorReturn += this.___td;
    }
    CerrarTabla() {
        this.___ValorReturn += this.___table1;
    }
    CerrarTr() {
        this.___ValorReturn += this.___tr1;
    }
    CerrarTd() {
        this.___ValorReturn += this.___td1;
    }
    Agregar(___Valor) {
        this.___ValorReturn += ___Valor;
    }
    Resultado() {
        return this.___ValorReturn;
    }
    AgregarTd(ValorAdentro, ValorClass) {
        if (ValorAdentro == null || ValorAdentro == undefined) {
            ValorAdentro = "";
        }
        if (ValorClass == null || ValorClass == undefined) {
            ValorClass = "__td";
        }
        let ___ValorActual;
        ___ValorActual = this.___td + "Ferresoft(2022)" + this.___td1;
        ___ValorActual = ___ValorActual.replace("__td", ValorClass);
        ___ValorActual = ___ValorActual.replace("Ferresoft(2022)", ValorAdentro);
        this.___ValorReturn += ___ValorActual;
    }
    AgregarTdOnClick(ValorAdentro, ValorClass, Funcion, iDUnico) {
        if (ValorAdentro == null || ValorAdentro == undefined) {
            ValorAdentro = "";
        }
        if (ValorClass == null || ValorClass == undefined) {
            ValorClass = "__td";
        }
        let ___ValorActual = this.___td;
        ___ValorActual = ___ValorActual.replace("__td", ValorClass);
        ___ValorActual = ___ValorActual.replace(">", "id=" + iDUnico + " onclick='" + Funcion + "'>");
        ___ValorActual += ValorAdentro;
        ___ValorActual += this.___td1;
        this.___ValorReturn += ___ValorActual;
    }
    AgregarTdVer1(ValorAdentro, ValorClass, iDUnico) {
        if (ValorAdentro == null || ValorAdentro == undefined) {
            ValorAdentro = "";
        }
        if (ValorClass == null || ValorClass == undefined) {
            ValorClass = "__td";
        }
        let ___ValorActual = this.___td;
        ___ValorActual = ___ValorActual.replace("__td", ValorClass);
        ___ValorActual = ___ValorActual.replace(">", "id=" + iDUnico + ">");
        ___ValorActual += ValorAdentro;
        ___ValorActual += this.___td1;
        this.___ValorReturn += ___ValorActual;
    }
    AgregarTrVer1(ValorClass, iDUnico) {
        if (ValorClass == null || ValorClass == undefined) {
            ValorClass = "__tr";
        }
        let ___ValorActual = this.___tr;
        ___ValorActual = ___ValorActual.replace("__tr", ValorClass);
        ___ValorActual = ___ValorActual.replace(">", "id=" + iDUnico + ">");
        this.___ValorReturn += ___ValorActual;
    }
}

const varTablaFinal = new innerHTML_Table();

const poblacionInicial = 100;
const alimentoInicial = 100;
const tierraInicial = 1000;
const dineroInicial = 100;
const minAños = 2;

const nNivel = new NivelDeHamurabi(0);

let varMuertes;
let varNacimientos;
let year_data = []; // Usado en la Estyadistica Final

const varCompraVenta = {
    varCCAlim: 0,
    varCCTier: 0,
    varCVAlim: 0,
    varCVTier: 0,
    VVen: 0,
    VCom: 0
}

let vv;
let varRandom;
let valorInicio1;
let oPcion;

const varHamurabi = new datosHamurabi(poblacionInicial, alimentoInicial, tierraInicial, dineroInicial);



class Mensajes {
    constructor() {}
    ShowNombreAño(mensaje, cssClass, TiempoTimeOUT, iD) {
        if (cssClass == null || cssClass == undefined) cssClass = "Clase" + RnD(1, 800);
        if (TiempoTimeOUT == null || TiempoTimeOUT == undefined) TiempoTimeOUT = 4000;
        if (iD == null || iD == undefined) iD = "iD" + RnD(1, 800);
        const divi = document.createElement("div");
        divi.className = `alert_${cssClass}`;
        divi.id = iD;
        divi.appendChild(document.createTextNode(""));
        const contei = document.querySelector(".muestraNombre");
        const app = document.querySelector("#Error_vformulario");
        contei.insertBefore(divi, app);
        const varId = document.getElementById(iD);
        varId.innerHTML = `<table><tr><td> ${mensaje} </td></tr></table>`;
        setTimeout(() => {
            document.querySelector("#" + iD).remove();
        }, TiempoTimeOUT);
        return (TiempoTimeOUT + 100)
    }
}
const verMensajes = new Mensajes();


/**========================================================================
 * ?                                CLASS
 * @author         :  Edgardo Ferreyra
 * @date           :  2022-05-16 14:26:38
 * @description    :  Se trata de una clase para sacar la cantidad de muertes y 
 *                    nacimientos en base a el alimento y la poblacion Actual
 *========================================================================**/
class ClassControlPoblacion {
    constructor() {
        this.Poblacion = 0;
        this.Alimento = 0;
        this.DePorcentaje = 0;
        this.PorcPobAlim = 0;
        this.DifPorcentaje = 0;
        this.Matar = 0;
        this.Nacer = 0;
        this.PoblacionTotal = 0;
        this.Bien = false;
        this.NivelJuego = 0;
        this.MinPoblacion = 0;
        this.MinAlimento = 0;
        /*
        this.Poblacion = valor Poblacion
        this.Alimento = valor Alimento
        this.DePorcentaje = valor Porcent
        this.PorcPobAlim = Prcentaje entre Poblacion / Alimento
        this.DifPorcentaje = valor Diferencia Porcentaje
        this.Matar = valor Matar
        this.Nacer = valor Nacer
        this.PoblacionTotal = valor Poblacion que queda;
        */
    }
    SubirDatos(Poblacion, Alimento) {
        if (this.Bien == false) {
            this.Poblacion = Poblacion;
            this.Alimento = Alimento;
            this.Bien = true;
        } else { console.log("==========Mal pasado====== Antes de cargarlo denuevo hay que RealizarCalculos()") }
    }
    RealizarCalculos() {
        if (this.Bien == true) {
            switch (this.NivelJuego) {
                case 1:
                    this.DePorcentaje = RnD(0, 50, 0);
                    this.MinPoblacion = 10;
                    this.MinAlimento = 0;
                    break;
                case 2:
                    this.DePorcentaje = RnD(20, 50, 0);
                    this.MinPoblacion = 20;
                    this.MinAlimento = 0;
                    break;
                case 3:
                    this.DePorcentaje = RnD(30, 75, 0);
                    this.MinPoblacion = 30;
                    this.MinAlimento = 0;
                    break;
                default:
                    this.DePorcentaje = RnD(50, 100, 0);
                    this.MinPoblacion = 75;
                    this.MinAlimento = 0;
                    break;
            }
            let varP = (this.Alimento / this.Poblacion) * 100;
            varP = Math.trunc(varP);
            this.PorcPobAlim = varP;
            this.DifPorcentaje = (this.Poblacion * (this.DePorcentaje - varP)) / 100;
            let varD = (this.Poblacion * (this.DePorcentaje - varP)) / 100;
            let varMatar = Math.trunc((this.Poblacion * varD) / 100);
            this.Matar = varMatar;
            let varNacer = 0;
            if (varMatar < 0) {
                varNacer = varMatar * -1;
                this.Matar = 0;
            }
            this.Nacer = varNacer;
            this.PoblacionTotal = (this.Poblacion - varMatar) + varNacer;
            this.Bien = false;
        } else { console.log("==========Mal pasado====== Priemro usar SubirDatos(Poblacion, Alimento)") }
    }
}
/*============================ END OF CLASS ============================ ClassControlPoblacion */

const varEstadoHamurabi = new ClassControlPoblacion();