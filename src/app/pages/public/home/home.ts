import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  public mensajeUsuario: string = '';
  private readonly telefono: string = '59161166835';

  // Objeto que simula la respuesta del Backend
  public data: any = {
    config: {
      empresa_nombre: "Buonarroti Constructora",
      hero_image: "/images/constructora.png", // Asegúrate de tener esta ruta
      mostrar_nombre_hero: true
    },
    proyectos: [
      {
        id: 1,
        nombre: "Edificio Warita",
        tipo: "edificio",
        imagen: "images/warita.webp",
        ubicacion: "Zona Sopocachi",
        resumen: "13 departamentos y 3 oficinas disponibles",
        tipo_venta: "Preventa"
      }
    ],
    unidades_independientes: [
      {
        id: 101,
        nombre: "Casa de Lujo - Los Pinos",
        tipo: "casa",
        precio: 155000,
        imagen: "images/warita.webp",
        entrega_inmediata: true
      },
      {
        id: 102,
        nombre: "Terreno Amplio - Urbanización Sur",
        tipo: "terreno",
        precio: 45000,
        imagen: "images/warita.webp",
        entrega_inmediata: true
      },
      {
        id: 103,
        nombre: "Oficina Central - Torre Empresarial",
        tipo: "oficina",
        precio: 85000,
        imagen: "images/warita.webp",
        entrega_inmediata: false
      }
    ]
  };

  // Variables para el filtrado
  public unidadesFiltradas: any[] = [];
  public filtroSeleccionado: string = 'todos';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Inicialmente mostramos todas las unidades
    this.unidadesFiltradas = this.data.unidades_independientes;
  }

  irAWhatsApp(): void {
    if (!this.mensajeUsuario.trim()) {
      alert("Por favor, escribe tu consulta antes de enviar.");
      return;
    }

    // Codificamos el mensaje para la URL
    const mensajeUrl = encodeURIComponent(this.mensajeUsuario);
    const url = `https://wa.me/${this.telefono}?text=${mensajeUrl}`;

    // Abrimos en una pestaña nueva
    window.open(url, '_blank');
  }

  /**
   * Filtra las unidades independientes por tipo
   * @param tipo El tipo de inmueble (casa, terreno, etc.)
   */
  filtrarPor(tipo: string): void {
    this.filtroSeleccionado = tipo;

    if (tipo === 'todos') {
      this.unidadesFiltradas = this.data.unidades_independientes;
    } else {
      this.unidadesFiltradas = this.data.unidades_independientes.filter(
        (u: any) => u.tipo.toLowerCase() === tipo.toLowerCase()
      );
    }
  }

  /**
   * Redirección opcional o acción al hacer clic en un proyecto
   */
  verProyecto(id: number): void {
    console.log('Navegando al proyecto:', id);
    this.router.navigate(['/home/propiedad', id]);
  }
}
