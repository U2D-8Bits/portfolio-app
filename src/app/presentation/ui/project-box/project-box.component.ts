import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProjectInterface } from '../../../core/domain/interfaces';
@Component({
  selector: 'app-project-box',
  imports: [
    CommonModule
  ],
  templateUrl: './project-box.component.html',
  styleUrl: './project-box.component.css'
})
export class ProjectBoxComponent implements OnInit {


  //? Atributos de la clase
  projects: ProjectInterface[] = [
    {
      name: 'DiabControl App',
      description: 'Plataforma web asíncrona para el seguimiento de pacientes diabéticos, que implementa sistema de notificaciones y recordatorios con el fin de mejorar la adherencia al tratamiento.',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1741802856123-04d9f001270f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      repository: 'https://github.com/U2D-8Bits/diabControl-client',
      url: 'https://diabcontrol.netlify.app/auth/home',
      type: 'FullStack'
    },
    {
      name: 'Diseño de Portfolio Personal',
      description: 'Diseño de Portfolio personal enfocado en resaltar de manera adecuada mi información personal como profesional.',
      technologies: ['Angular','TypeScript'],
      image: 'https://images.unsplash.com/photo-1741802856123-04d9f001270f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      repository: 'https://github.com/U2D-8Bits/portfolio-app',
      url: '',
      type: 'FrontEnd'
    },
    {
      name: 'ClassBuddy',
      description: 'Aplicación web enfocada en la gestión de clases y tareas, que permite a los usuarios el generar material de estudio usando ChatGPT mejorando la experiencia de aprendizaje.',
      technologies: ['Angular', 'Kotlin', 'PostgreSQL', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1741802856123-04d9f001270f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      repository: 'https://github.com/Homero22/ClassBuddy',
      url: '',
      type: 'FullStack'
    },
    {
      name: 'App AeroBox',
      description: 'Plataforma web para la gestión de archivos en la nube, que permite a los usuarios almacenar y compartir archivos de manera segura y eficiente.',
      technologies: ['NextJS', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1741802856123-04d9f001270f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      repository: 'https://github.com/U2D-8Bits/nextjs-dashboard-app',
      url: 'https://app-aerobox.vercel.app/login',
      type: 'FrontEnd'
    },

  ]


  //? Constructor de la clase
  constructor() { }


  //? Método que se ejecuta al inicializar el componente
  ngOnInit(): void {}
}
