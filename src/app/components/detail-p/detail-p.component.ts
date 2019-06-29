import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detail-p',
  templateUrl: './detail-p.component.html',
  styleUrls: ['./detail-p.component.scss']
})
export class DetailPComponent implements OnInit {

  productos: any;
  uid: string = '';
  nombre: string = '';
  prodS = '';


  constructor(private active: ActivatedRoute, private services: ProductosService) {
    this.uid = this.active.snapshot.paramMap.get('id');
    this.nombre = this.active.snapshot.paramMap.get('nombre');


  }

  ngOnInit() {
    this.productos = JSON.parse(localStorage.getItem('producto'));
    console.log(this.productos);
  }

}
