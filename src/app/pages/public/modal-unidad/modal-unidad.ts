import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-unidad',
  imports: [CommonModule],
  templateUrl: './modal-unidad.html',
  styleUrl: './modal-unidad.css',
})
export class ModalUnidad {
  @Input() unidad: any;
  @Input() nombreProyecto: string = '';
  @Input() bloque: string = '';
  @Input() piso: string = '';
  @Output() close = new EventEmitter<void>();

  imagenZoom: string | null = null;

  get whatsappUrl(): string {
    const telefono = '59161166835';
    const texto = `Hola! Me interesa obtener más información sobre la propiedad: ${this.unidad.nombre}, del proyecto: ${this.nombreProyecto}, del bloque "${this.bloque}", del ${this.piso}, con el precio: $${this.unidad.precio || 'Consultar'}`;

    return `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
  }

  cerrarModal() {
    this.close.emit();
  }

  abrirZoom(url: string) {
    this.imagenZoom = url;
  }

  cerrarZoom() {
    this.imagenZoom = null;
  }
}
