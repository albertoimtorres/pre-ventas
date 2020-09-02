import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreventaService } from 'src/app/services/preventa.service';
import { Preventa, Generica } from '../../models/preventa.models';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css'],
  providers: [MessageService]
})
export class CreacionComponent implements OnInit {

  preventaForm: FormGroup;

  submitted = false;

  crear = true;
  actualiza = false;

  preventa: Preventa;

  bills: Generica[];
  campus: Generica[];
  clients: Generica[];
  companies: Generica[];
  managers: Generica[];
  coinTypes: Generica[];
  commercial: Generica[];
  salesTeams: Generica[];
  typeServices: Generica[];
  businessLine: Generica[];
  participations: Generica[];

  constructor(
    private formBuilder: FormBuilder,
    private preventaService: PreventaService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.preventaForm = this.formBuilder.group({
      nombreProyecto: ['', [Validators.required]],
      cuentaAnalitica: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      costo: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      fechaCierre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
      ingresos: ['', [Validators.required]],
      gerenteComercial: ['', [Validators.required]],
      comercial: ['', [Validators.required]],
      equipoVenta: ['', [Validators.required]],
      compania: ['', [Validators.required]],
      lineaNegocio: ['', [Validators.required]],
      tipoServicio: ['', [Validators.required]],
      sede: ['', [Validators.required]],
      etiquetaAnaliticas: ['', [Validators.required]],
      tipoMoneda: ['', [Validators.required]],
      participacion: ['', [Validators.required]],
      objetivo: ['', [Validators.required]],
    });

    this.obtieneCatalogos();
  }

  obtieneCatalogos = () => {
    /* Obtiene los catalogos */
    this.preventaService.facturas().subscribe((data: Generica[]) => this.bills = data);
    this.preventaService.lineaNegocio().subscribe((data: Generica[]) => this.businessLine = data);
    this.preventaService.campus().subscribe((data: Generica[]) => this.campus = data);
    this.preventaService.clientes().subscribe((data: Generica[]) => this.clients = data);
    this.preventaService.tipoMonda().subscribe((data: Generica[]) => this.coinTypes = data);
    this.preventaService.comercial().subscribe((data: Generica[]) => this.commercial = data);
    this.preventaService.companias().subscribe((data: Generica[]) => this.companies = data);
    this.preventaService.manager().subscribe((data: Generica[]) => this.managers = data);
    this.preventaService.participacion().subscribe((data: Generica[]) => this.participations = data);
    this.preventaService.equipoVenta().subscribe((data: Generica[]) => this.salesTeams = data);
    this.preventaService.tipoServicio().subscribe((data: Generica[]) => this.typeServices = data);
  }

  /**
   * @decription
   * Limpia el formulario
   */
  reset = () => {
    this.preventaForm.reset();
    this.messageService.clear();
  }

  /**
   * @description
   * Obtiene los campos del formulario.
   */
  get field() {
    return this.preventaForm.controls;
  }

  /**
   * @description
   * Realiza la petición para refecar la vista.
   */
  obtieneListado = () => {
    this.preventaService.listaPreventa();
  }

  /**
   * @description
   * Actualizar los datos del formulario
   */
  actulizaPreventa = (event) => {
    console.log(event);
  }

  onSubmit = () => {
    if (this.preventaForm.invalid) {
      this.submitted = true;
      return;
    }

    this.preventa = this.preventaService.restructureObject(this.preventaForm.value);

    this.preventaService.crearPreventa(this.preventa).subscribe({
      next: data => {
        this.messageService.add({severity: 'success', summary: `${data}`});
        this.obtieneListado();
        this.reset();
      },
      error: err => {
        this.messageService.add({severity: 'error', summary: `${err.error}`});
      }
    });
  }

}
