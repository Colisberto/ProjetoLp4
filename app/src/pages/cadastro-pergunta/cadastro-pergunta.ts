/** CRIADO POR COLISBERTO */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pergunta} from  '../../modules/pergunta';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CadastroPerguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-pergunta',
  templateUrl: 'cadastro-pergunta.html',
})
export class CadastroPerguntaPage {

  private orderForm;
  public pergunta: Pergunta;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    ) {
      this.pergunta = new Pergunta();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPerguntaPage');
  }

}


 