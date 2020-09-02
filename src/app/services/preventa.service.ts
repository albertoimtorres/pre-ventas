import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Preventa, Generica } from '../models/preventa.models';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})

class PreventaService {

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
    body: {}
  };

  constructor(
    private http: HttpClient,
    private appService: AppService) {
  }

  /**
   * @description
   * Servicio observable - Obtiene las preventas realizando una pretición HTTO GET al servicio /api/v1/presales.
   */
  listaPreventa(): Observable<Preventa[]> {
    return this.http.get<Preventa[]>(`${this.appService.url}/presales`, this.options).pipe(map(res => res));
  }

  crearPreventa(preventa: Preventa): Observable<Preventa[]> {
    return this.http.post<Preventa[]>(`${this.appService.url}/create`, preventa).pipe(map(res => res));
  }

  eliminarPreventa(id: string): Observable<any[]> {
    return this.http.delete<any[]>(`${this.appService.url}/delete/${id}`).pipe(map(res => res));
  }

  facturas(): Observable<Generica[]> {
    return this.http.get<Generica[]>(`${this.appService.apiData}/bills.json`, this.options).pipe(map(res => res));
  }

  lineaNegocio(): Observable<Generica[]> {
    return this.http.get<Generica[]>(`${this.appService.apiData}/businessLine.json`, this.options).pipe(map(res => res));
  }

  campus(): Observable<Generica[]> {
    return this.http.get<Generica[]>(`${this.appService.apiData}/campus.json`, this.options).pipe(map(res => res));
  }

  clientes(): Observable<Generica[]> {
    return this.http.get<Generica[]>(`${this.appService.apiData}/clients.json`, this.options).pipe(map(res => res));
  }

  tipoMonda(): Observable<Generica[]> {
    return this.http.get<Generica[]>(`${this.appService.apiData}/coinTypes.json`, this.options).pipe(map(res => res));
  }

  comercial(): Observable<Generica[]> {
    return this.http.get<Generica[]>(`${this.appService.apiData}/commercial.json`, this.options).pipe(map(res => res));
  }

  companias(): Observable<Generica[]> {
    return this.http.get<Generica[]>(`${this.appService.apiData}/companys.json`, this.options).pipe(map(res => res));
  }

  manager(): Observable<Generica[]> {
    return this.http.get<Generica[]>(`${this.appService.apiData}/manager.json`, this.options).pipe(map(res => res));
  }

  participacion(): Observable<Generica[]> {
    return this.http.get<Generica[]>(`${this.appService.apiData}/participations.json`, this.options).pipe(map(res => res));
  }

  equipoVenta(): Observable<Generica[]> {
    return this.http.get<Generica[]>(`${this.appService.apiData}/salesTeam.json`, this.options).pipe(map(res => res));
  }

  tipoServicio(): Observable<Generica[]> {
    return this.http.get<Generica[]>(`${this.appService.apiData}/typeServices.json`, this.options).pipe(map(res => res));
  }

  restructureObject(preventa) {
    preventa.cuentaAnalitica = preventa.cuentaAnalitica?.label;
    preventa.cliente = preventa.cliente?.label;
    preventa.gerenteComercial = preventa.gerenteComercial?.label;
    preventa.comercial = preventa.comercial?.label;
    preventa.equipoVenta = preventa.equipoVenta?.label;
    preventa.compania = preventa.compania?.label;
    preventa.lineaNegocio = preventa.lineaNegocio?.label;
    preventa.tipoServicio = preventa.tipoServicio?.label;
    preventa.sede = preventa.sede?.label;
    preventa.tipoMoneda = preventa.tipoMoneda?.label;
    preventa.participacion = preventa.participacion?.code;
    return preventa as Preventa;
  }
}

export { PreventaService };
