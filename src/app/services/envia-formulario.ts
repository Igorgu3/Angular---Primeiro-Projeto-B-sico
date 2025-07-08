import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormulario {

  constructor() { }

  envia(info: string){
      console.log("enviando para o backend");
    }
}
