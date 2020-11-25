import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {AgregarProductoPage} from '../agregar-producto/agregar-producto.page';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos: any=[{ titulo:"titulo2",texto:"texto"}]; 
  constructor(public navCtrl:NavController, public modalController:ModalController) { }

  ngOnInit() {
  }
  getItems($event){
    const valor = $event.target.value;
    console.log("valor del control"+valor)

  }
  agregarProducto(){
    //this.navCtrl.push(agregarPage);
   // var modal= this.modalController.create();
   console.log("operacoin agregar")

  }
  editar(item){
    console.log("operacion editar")
  }
  eliminar(item){
    console.log("operacion eliminar")

  }
}
