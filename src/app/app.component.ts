import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],  // Para ngIf, ngFor y demás
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Yancarlos Huacre Cardenas';
  carrera: string = 'Ingeniería en Sistemas';
  edad: number = 19;
  correo: string = 'yancarlos.huacre@vallegrande.edu.pe';
  mostrarInfoExtra: boolean = false;
  colorFondo: string = '#f9f9f9';

  fraseFavorita: string = 'El conocimiento es poder.';
  hobbies: string[] = ['Leer', 'Programar', 'Fútbol'];
  skills: string[] = ['Angular', 'HTML', 'CSS', 'JavaScript'];

  toggleExtra() {
    this.mostrarInfoExtra = !this.mostrarInfoExtra;
  }

  cambiarColor() {
    this.colorFondo = this.colorFondo === '#f9f9f9' ? '#e0f7fa' : '#f9f9f9';
  }
}
