import { Injectable } from '@angular/core';
import { ProjectInterface } from '../../../core/domain/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: ProjectInterface[] = [
    {
      name: 'DiabControl App',
      description:
        'Plataforma web asíncrona para el seguimiento de pacientes diabéticos, que implementa sistema de notificaciones y recordatorios con el fin de mejorar la adherencia al tratamiento.',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'TypeScript'],
      image: 'assets/images/projects/diabcontrol-app.png',
      repository: 'https://github.com/U2D-8Bits/diabControl-client',
      url: 'https://diabcontrol.netlify.app/auth/home',
      type: 'FullStack',
      bgColor: 'linear-gradient(135deg, #0369a1 0%, #0ea5e9 50%, #bae6fd 100%)',
    },
    {
      name: 'Diseño de Portfolio Personal',
      description:
        'Diseño de Portfolio personal enfocado en resaltar de manera adecuada mi información personal como profesional.',
      technologies: ['Angular', 'TypeScript'],
      image: 'assets/images/projects/portfolio-app.png',
      repository: 'https://github.com/U2D-8Bits/portfolio-app',
      url: '',
      type: 'FrontEnd',
      bgColor: 'linear-gradient(135deg, #747b8a 0%, #7e22ce 50%, #111621 100%)',
    },
    {
      name: 'ClassBuddy',
      description:
        'Aplicación web enfocada en la gestión de clases y tareas, que permite a los usuarios el generar material de estudio usando ChatGPT mejorando la experiencia de aprendizaje.',
      technologies: ['Angular', 'Kotlin', 'PostgreSQL', 'TypeScript'],
      image: 'assets/images/no-image.png',
      repository: 'https://github.com/Homero22/ClassBuddy',
      url: '',
      type: 'FullStack',
      bgColor: 'linear-gradient(135deg, #9a3412 0%, #ea580c 50%, #f97316 100%)',
    },
    {
      name: 'App AeroBox',
      description:
        'Plataforma web para la gestión de archivos en la nube, que permite a los usuarios almacenar y compartir archivos de manera segura y eficiente.',
      technologies: ['NextJS', 'TypeScript'],
      image: 'assets/images/projects/aerobox-app.png',
      repository: 'https://github.com/AlexanderSantanaDev/app-aerobox',
      url: 'https://app-aerobox.vercel.app/login',
      type: 'FrontEnd',
      bgColor: 'linear-gradient(135deg, #00d4ff 0%, #1ebee6 50%, #be18a2 100%)',
    },
  ];

  getProjects(): ProjectInterface[]{
    return this.projects;
  }

}
