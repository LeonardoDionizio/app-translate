import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from './../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {
  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta = '';
  public msg: string;

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;

  public tentativas = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  public atualizaResposta(resposta: Event): void {
    this.msg = '';
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      // trocar pergunta da rodada
      this.rodada += 1;

      // progresso
      this.progresso += 100 / this.frases.length;

      //
      if (this.rodada >= this.frases.length) {
        this.encerrarJogo.emit('vitoria');
      }

      // atualiza o obj rodadaFrase
      this.atualizaRodada();
    } else {
      this.msg = 'Resposta incorreta!';
      // decrementar a variavel tentativas
      this.tentativas -= 1;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    // define a frase a ser traduzida
    this.rodadaFrase = this.frases[this.rodada];

    // limpar resposta
    this.resposta = '';
  }
}
