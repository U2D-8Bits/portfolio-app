import { Component, OnInit,  } from '@angular/core';
import { CommonModule } from '@angular/common';

//? Módulos de PrimeNG
import { DividerModule } from 'primeng/divider';

//? Módulos / Interfaces personalizados
import { ExperienceInterface } from '../../../core/domain/interfaces';
import { CustomDatePipe } from '../../../application/pipes';


@Component({
  selector: 'app-experience-box',
  imports: [
    DividerModule,
    CommonModule,
    CustomDatePipe
  ],
  templateUrl: './experience-box.component.html',
  styleUrl: './experience-box.component.css'
})
export class ExperienceBoxComponent implements OnInit {

  //? Propiedades
  experiences: ExperienceInterface[] = [
    {
      company: 'GISSAN (ESPOCH)',
      position: 'Practicante Desarrollador Full Stack',
      startDate: new Date('2023-10-01'),
      endDate: new Date('2024-02-01'),
      description: 'Desarrollé el Frontend de la página web de GISSAN con Angular, creando una interfaz intuitiva y responsive, e implementé la limpieza de ubicaciones geográficas mediante MyMaps para un censo preciso. Optimicé el flujo de datos reconectando Looker con Google Drive, facilitando el acceso a información crítica. Colaboré en metodologías ágiles para entregas oportunas y desarrollé un sistema de scrapping en Google Colab para extraer datos automatizados de Riobamba.com.ec.'
    },
    {
      company: 'Municipio de Riobamba',
      position: 'Practicante Desarrollador Full Stack',
      startDate: new Date('2023-11-01'),
      endDate: new Date('2023-12-01'),
      description: 'Colaboré con el equipo de informática y comunicaciones para analizar problemáticas, desarrollé pruebas automatizadas con Dynamo BIM para optimizar análisis de sistemas, y capacité al equipo en el uso de esta herramienta, asegurando la correcta ejecución de las pruebas.'
    },
    {
      company: 'DTIC (ESPOCH)',
      position: 'Practicante Desarrollador Frontend',
      startDate: new Date('2023-04-01'),
      endDate: new Date('2023-09-01'),
      description: 'Como parte integral del equipo de desarrollo, trabajé en estrecha colaboración con el área de producción para analizar, interpretar y transformar los requerimientos empresariales en soluciones técnicas robustas, con especial enfoque en la optimización de sistemas de gestión de inventarios. Utilizando Angular y TypeScript, diseñé y desarrollé componentes modulares y reutilizables que mejoraron la estructura del código y facilitaron el mantenimiento futuro. Además, optimicé la interfaz de usuario, logrando un incremento del 20% en la eficiencia general del sistema. '
    },

  ]

  //? Ciclo de vida de ngOnInit
  ngOnInit(): void {

  }

}
