import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PreventaService } from '../../services/preventa.service';
import { Preventa } from '../../models/preventa.models';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [MessageService]
})
export class ListadoComponent implements OnInit {

  @Output() eventUpdate = new EventEmitter<Preventa>();

  preventas: Preventa[];

  status: any[];

  hideDelete: boolean;

  constructor(private preventaService: PreventaService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.hideDelete = true;
    this.preventaService.listaPreventa().subscribe(preventas => this.preventas = preventas);
    this.status = ['Activo', 'Terminado', 'Proceso', 'Activo', 'Terminado', 'Proceso', 'Proceso', 'Activo'];
  }

  actulizaLista = () => {
    this.preventaService.listaPreventa().subscribe(preventas => this.preventas = preventas);
  }

  editarPreventa = (preventa: Preventa) => {
    console.log(preventa);
  }

  eliminarPreventa = (id: string) => {
    this.preventaService.eliminarPreventa(id).subscribe({
      next: data => {
        this.messageService.add({severity: 'success', summary: `${data}`});
        this.actulizaLista();
      },
      error: err => {
        this.messageService.add({severity: 'error', summary: `${err.error}`});
      }
    });
  }

}
