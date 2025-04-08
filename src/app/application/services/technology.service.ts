import { Injectable } from '@angular/core';

import { TechnologiesInterface, TechnologyCategory } from '../../core/domain/interfaces';

@Injectable({
  providedIn: 'root'
})

export class TechnologyService {

  //* Variables
  private allTechnologies: TechnologiesInterface[] = [
    //! Frontend
    {
      svgUrl: 'assets/images/frontend/html-icon.png',
      alt: 'HTML5',
      category: 'Frontend',
    },
    {
      svgUrl: 'assets/images/frontend/css-icon.png',
      alt: 'CSS 3',
      category: 'Frontend',
    },
    {
      svgUrl: 'assets/images/frontend/javascript-icon.png',
      alt: 'JavaScript',
      category: 'Frontend',
    },
    {
      svgUrl: 'assets/images/frontend/angular-icon.png',
      alt: 'Angular',
      category: 'Frontend',
    },
    {
      svgUrl: 'assets/images/frontend/vue-icon.png',
      alt: 'Vue.js',
      category: 'Frontend',
    },
    {
      svgUrl: 'assets/images/frontend/next-icon.png',
      alt: 'Next.js',
      category: 'Frontend',
    },
    {
      svgUrl: 'assets/images/frontend/typescript-icon.png',
      alt: 'TypeScript',
      category: 'Frontend',
    },
    {
      svgUrl: 'assets/images/frontend/tailwind-icon.png',
      alt: 'Tailwind CSS',
      category: 'Frontend',
    },
    //! Backend
    {
      svgUrl: 'assets/images/backend/node-icon.png',
      alt: 'Node.js',
      category: 'Backend',
    },
    {
      svgUrl: 'assets/images/backend/nest-icon.png',
      alt: 'Nest.js',
      category: 'Backend',
    },
    {
      svgUrl: 'assets/images/backend/mongodb-icon.png',
      alt: 'MongoDB',
      category: 'Backend',
    },
    {
      svgUrl: 'assets/images/backend/postgresql-icon.png',
      alt: 'PostgreSQL',
      category: 'Backend',
    },
    {
      svgUrl:'assets/images/backend/mysql-icon.png',
      alt: 'MySQL',
      category: 'Backend',
    },
    //! Learning
    {
      svgUrl:'assets/images/learning/react-js-icon.png',
      alt: 'React',
      category: 'Learning',
    },
    {
      svgUrl:'assets/images/learning/flutter-icon.png',
      alt: 'Flutter',
      category: 'Learning',
    },
    {
      svgUrl:'assets/images/learning/azure-icon.png',
      alt: 'Azure',
      category: 'Learning',
    },
    {
      svgUrl:'assets/images/learning/docker-icon.png',
      alt: 'Docker',
      category: 'Learning',
    },
    //! Tools
    {
      svgUrl:'assets/images/tools/git-icon.png',
      alt: 'Git',
      category: 'Tools',
    },
    {
      svgUrl:'assets/images/tools/github-icon.png',
      alt: 'GitHub',
      category: 'Tools',
    },
    {
      svgUrl:'assets/images/tools/visual-studio-icon.png',
      alt: 'Visual Studio Code',
      category: 'Tools',
    },
    {
      svgUrl:'assets/images/tools/npm-icon.png',
      alt: 'Npm',
      category: 'Tools',
    },
    {
      svgUrl:'assets/images/tools/notion-icon.png',
      alt: 'Notion',
      category: 'Tools',
    },
    {
      svgUrl:'assets/images/tools/figma-icon.png',
      alt: 'Figma',
      category: 'Tools',
    },
  ]


  //? Función para obtener las tecnologias por categoría
  getTechnologiesByCategory(category: TechnologyCategory): TechnologiesInterface[] {
    return this.allTechnologies.filter( tech => tech.category === category);
  }

  //? Función para obtener todas las tecnologías
  getAllTechnologies(): TechnologiesInterface[]{
    return this.allTechnologies;
  }

  //? Función para obtener todas las categorías
  getAllCategories(): TechnologyCategory[]{
    return ['Frontend', 'Backend', 'Learning', 'Tools'];
  }

}
