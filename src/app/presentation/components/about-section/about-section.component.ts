import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//* Importacciones personalizadas
import { AppImageInterface } from '../../../core/domain/interfaces';
import { response } from 'express';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about-section',
  imports: [// Añade HttpClientModule aquí
    CommonModule // Añade esto si usas *ngIf, *ngFor, etc.
  ],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent  implements OnInit{
  //? Constructor
  constructor(
    private http: HttpClient,
  ) {}

  //? Propiedades y variables
  public aboutMeImg: AppImageInterface = {
    src: 'assets/images/about-me-img.png',
    alt: 'Imagen de perfil',
    title: 'Imagen de perfil',
  }



  //? Metodos del ciclo de vida
  ngOnInit(): void {
  }

  //? Metodos y funciones
  //* Funcion para descargar el CV
  async downloadCV(): Promise<void> {
    try {
      const pdfUrl: string = 'assets/docs/CV-Pablo-Bolaños.pdf';
      const pdfBlob = await this.http.get(pdfUrl, { responseType: 'blob' }).toPromise();

      if (pdfBlob) {
        const blobUrl = window.URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'CV-Pablo-Bolaños.pdf'; // Nombre del archivo descargado
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Liberar memoria después de 1 segundo
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
        }, 1000);
      } else {
        console.error('No se pudo obtener el archivo PDF');
      }
    } catch (error) {
      console.error('Error al descargar CV:', error);
    }
  }

}
