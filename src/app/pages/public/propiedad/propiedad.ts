import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalUnidad } from '../modal-unidad/modal-unidad';

@Component({
  selector: 'app-propiedad',
  imports: [CommonModule, ModalUnidad],
  templateUrl: './propiedad.html',
  styleUrl: './propiedad.css',
})

export class Propiedad {

  public proyecto = {
    "proyecto_id": 1,
    "nombre": "Warita",
    "configuracion": {
      "moneda": "USD",
      "pisos_omitidos": [0]
    },
    "niveles": [
      {
        "nro_piso": -1,
        "etiqueta": "Sótano 1",
        "tipo_nivel": "compartido",
        "bloques": [
          {
            "nombre": "General",
            "unidades": [
              { "id": "P1", "nombre": "Parqueo General", "dormitorios": 0, "estado": "no_disponible", "tipo": "comun", "precio": 35900 }
            ]
          }
        ]
      },
      {
        "nro_piso": 1,
        "etiqueta": "Piso 1",
        "tipo_nivel": "dividido",
        "bloques": [
          {
            "nombre": "A",
            "unidades": [
              {
                "id": "A101", "nombre": "Oficina 1", "area": 22, "dormitorios": 0, "precio": 35900, "estado": "disponible", "tipo": "oficina",
                "planos": ["images/planos/planoof1.png", "images/planos/planoof1_2.png"]
              },
              {
                "id": "A102", "nombre": "Oficina 2", "area": 23, "dormitorios": 0, "precio": 35900, "estado": "disponible", "tipo": "oficina",
                "planos": ["images/planos/planoof2.png", "images/planos/planoof2_2.png"]
              },
              {
                "id": "A103", "nombre": "Oficina 3", "area": 24, "dormitorios": 0, "precio": 35900, "estado": "disponible", "tipo": "oficina",
                "planos": ["images/planos/planoof3.png", "images/planos/planoof3_2.png"]
              }
            ]
          },
          {
            "nombre": "B",
            "unidades": [
              { "id": "B101", "nombre": "Depto 101-B", "dormitorios": 2, "area": 61, "precio": 75900, "estado": "disponible", "tipo": "departamento", "planos": ["images/planos/planod2db.png", "images/planos/planod2db_2.png"] },
              { "id": "B102", "nombre": "Depto 102-B", "dormitorios": 1, "area": 36.68, "precio": 45900, "estado": "disponible", "tipo": "departamento", "planos": ["images/planos/planod1db.png", "images/planos/planod1db_2.png"] }
            ]
          }
        ]
      },
      {
        "nro_piso": 2,
        "etiqueta": "Piso 2",
        "tipo_nivel": "dividido",
        "bloques": [
          {
            "nombre": "A",
            "unidades": [
              { "id": "A201", "nombre": "Depto 201-A", "dormitorios": 2, "area": 93.07, "precio": 95900, "estado": "disponible", "tipo": "departamento", "planos": ["images/planos/planod2a.jpg", "images/planos/planod2a_2.png"] }
            ]
          },
          {
            "nombre": "B",
            "unidades": [
              { "id": "B201", "nombre": "Depto 201-B", "dormitorios": 2, "area": 61, "precio": 75900, "estado": "disponible", "tipo": "departamento", "planos": ["images/planos/planod2db.png", "images/planos/planod2db_2.png"] },
              { "id": "B202", "nombre": "Depto 202-B", "dormitorios": 1, "area": 36.68, "precio": 45900, "estado": "disponible", "tipo": "departamento", "planos": ["images/planos/planod1db.png", "images/planos/planod1db_2.png"] }
            ]
          }
        ]
      },
      {
        "nro_piso": 3,
        "etiqueta": "Piso 3",
        "tipo_nivel": "dividido",
        "bloques": [
          {
            "nombre": "A",
            "unidades": [
              { "id": "A301", "nombre": "Depto 301-A", "dormitorios": 1, "area": 44.11, "precio": 51900, "estado": "disponible", "tipo": "departamento", "planos": ["url_a301_1", "url_a301_2"] },
              { "id": "A302", "nombre": "Depto 302-A", "dormitorios": 1, "area": 47, "precio": 54900, "estado": "disponible", "tipo": "departamento", "planos": ["url_a302_1", "url_a302_2"] }
            ]
          },
          {
            "nombre": "B",
            "unidades": [
              { "id": "B301", "nombre": "Depto 301-B", "dormitorios": 2, "area": 61, "precio": 75900, "estado": "disponible", "tipo": "departamento", "planos": ["images/planos/planod2db.png", "images/planos/planod2db_2.png"] },
              { "id": "B302", "nombre": "Depto 302-B", "dormitorios": 1, "area": 36.68, "precio": 45900, "estado": "vendido", "tipo": "departamento", "planos": ["images/planos/planod1db.png", "images/planos/planod1db_2.png"] },
            ]
          }
        ]
      },
      {
        "nro_piso": 4,
        "etiqueta": "Piso 4",
        "tipo_nivel": "dividido",
        "bloques": [
          {
            "nombre": "A",
            "unidades": [
              { "id": "A401", "nombre": "Depto 401-A", "dormitorios": 2, "area": 93.07, "precio": 95900, "estado": "disponible", "tipo": "departamento", "planos": ["images/planos/planod2a.jpg", "images/planos/planod2a_2.png"] }
            ]
          },
          {
            "nombre": "B",
            "unidades": [
              { "id": "B401", "nombre": "Depto 401-B", "dormitorios": 2, "area": 61, "precio": 75900, "estado": "vendido", "tipo": "departamento", "planos": ["images/planos/planod2db.png", "images/planos/planod2db_2.png"] },
              { "id": "B402", "nombre": "Depto 402-B", "dormitorios": 1, "area": 36.68, "precio": 45900, "estado": "vendido", "tipo": "departamento", "planos": ["images/planos/planod1db.png", "images/planos/planod1db_2.png"] },
            ]
          }
        ]
      },
      {
        "nro_piso": 5,
        "etiqueta": "Piso 5",
        "tipo_nivel": "dividido",
        "bloques": [
          {
            "nombre": "A",
            "unidades": [
              { "id": "A501", "nombre": "Depto 501-A", "dormitorios": 2, "area": 93.07, "precio": 95900, "estado": "disponible", "tipo": "departamento", "planos": ["images/planos/planod2a.jpg", "images/planos/planod2a_2.png"] }
            ]
          },
          {
            "nombre": "B",
            "unidades": [
              { "id": "B501", "nombre": "Depto 501-B", "dormitorios": 3, "area": 100.09, "precio": 129900, "estado": "disponible", "tipo": "departamento", "planos": ["images/planos/planod3db.png", "images/planos/planod3db_2.png"] }
            ]
          }
        ]
      },
      {
        "nro_piso": 6,
        "etiqueta": "Piso 6",
        "tipo_nivel": "dividido",
        "bloques": [
          {
            "nombre": "A",
            "unidades": [
              { "id": "A601", "nombre": "Depto 601-A", "dormitorios": 2, "area": 93.07, "precio": 95900, "estado": "disponible", "tipo": "departamento", "planos": ["images/planos/planod2a.jpg", "images/planos/planod2a_2.png"] }
            ]
          },
          {
            "nombre": "B",
            "unidades": [
              { "id": "B601", "nombre": "Depto 601-B", "dormitorios": 3, "area": 100.09, "precio": 129900, "estado": "disponible", "tipo": "departamento", "planos": ["images/planos/planod3db.png", "images/planos/planod3db_2.png"] }
            ]
          }
        ]
      },
      {
        "nro_piso": 7,
        "etiqueta": "Piso 7",
        "tipo_nivel": "dividido",
        "bloques": [
          {
            "nombre": "A",
            "unidades": [
              { "id": "A701", "nombre": "Penthouse A", "dormitorios": 0, "estado": "vendido", "tipo": "penthouse", "planos": [], "precio": 0 }
            ]
          },
          {
            "nombre": "B",
            "unidades": [
              { "id": "B701", "nombre": "Penthouse B", "dormitorios": 0, "estado": "vendido", "tipo": "penthouse", "planos": [], "precio": 0 }
            ]
          }
        ]
      },
      {
        "nro_piso": 8,
        "etiqueta": "Terraza",
        "tipo_nivel": "compartido",
        "bloques": [
          {
            "nombre": "General",
            "unidades": [
              { "id": "T1", "nombre": "Terraza Social", "dormitorios": 0, "estado": "no_disponible", "tipo": "area_social", "precio": 35900 }
            ]
          }
        ]
      }
    ]
  };

  public pisoSeleccionado: string = '';
  public unidadSeleccionada: any = null;
  public bloqueActivo: string = 'A'; // Por defecto bloque A

  ngOnInit(): void {
    // Invertimos los niveles para que el piso 8 aparezca arriba y el -1 abajo
    this.proyecto.niveles.sort((a, b) => b.nro_piso - a.nro_piso);
  }

  public imagenZoom: string | null = null; // Almacena la URL de la imagen a ampliar

  abrirZoom(url: string) {
    this.imagenZoom = url;
  }

  cerrarZoom() {
    this.imagenZoom = null;
  }

  cerrarDetalle() {
    this.unidadSeleccionada = null;
  }


  seleccionarUnidad(u: any, pisoEtiqueta: string) {
    if (u.estado === 'vendido') return;
    this.unidadSeleccionada = u;
    this.pisoSeleccionado = pisoEtiqueta; // Guardamos el piso
  }
}
