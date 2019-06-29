import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos: any = [];
  filterProd = '';

  constructor(private services: ProductosService, 
              private router: Router) { }

  ngOnInit() {
    this.getProd();
  }

  getProd() {
    this.services.getProducts().subscribe((data) => {
      console.log(data);
      this.productos = data;
    });
  }

  detailProd(prod) {
    localStorage.setItem('producto', JSON.stringify(prod));
    this.router.navigate([`/detallesP/${prod.id}/${prod.nombre}`]);
  }

}
