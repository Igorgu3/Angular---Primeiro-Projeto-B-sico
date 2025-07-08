import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home{
    nome = "Igor"
    idButton = "Ok";
    private enviaFormularioService = inject(EnviaFormulario);

    @Input("name") teste!:string;

    @Output() emitindo = new EventEmitter<string>();

    submit(){
      this.emitindo.emit(this.nome);
      //this.enviaFormularioService.envia("toma lentinho");
    }
}
