import { Injectable } from '@angular/core';
import { IData } from './modal/idata';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiodataService {

  private biodataSubject = new ReplaySubject<IData>();
  public photo = new ReplaySubject<string | ArrayBuffer | null | undefined>();

  // private biodataSubject = new BehaviorSubject<IData | null>(null);

  constructor() { }

  getData() {
    return this.biodataSubject.asObservable();
  }

  setData(data: IData) {
    this.biodataSubject.next(data);
  }

}
