import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { TechnologyService } from '../../../application/services/technology.service';
import {
  TechnologiesInterface,
  TechnologyCategory,
} from '../../../core/domain/interfaces';

@Component({
  selector: 'app-technologies-box',
  imports: [CommonModule],
  templateUrl: './technologies-box.component.html',
  styleUrl: './technologies-box.component.css',
})
export class TechnologiesBoxComponent implements OnInit {
  //? Constructor
  constructor(
    private techService: TechnologyService,
    private sanitizer: DomSanitizer
  ) {}

  //? Propiedades
  technologies: TechnologiesInterface[] = [];

  frontendTechnologies: TechnologiesInterface[] = [];
  backendTechnologies: TechnologiesInterface[] = [];
  learningTechnologies: TechnologiesInterface[] = [];
  toolTechnologies: TechnologiesInterface[] = [];

  categories = [
    {
      name: 'Frontend',
      textColor: 'text-[#0F8FDE]',
      technologies: this.frontendTechnologies,
    },
    {
      name: 'Backend',
      textColor: 'text-[#3F4B5E]',
      technologies: this.backendTechnologies,
    },
    {
      name: 'Learning',
      textColor: 'text-[#DE7D0F]',
      technologies: this.learningTechnologies,
    },
    {
      name: 'Tools',
      textColor: 'text-[#088708]',
      technologies: this.toolTechnologies,
    },
  ];

  //? Lifecycle Hooks
  ngOnInit(): void {
    this.getAllTechnologies();
  }

  //? Metodos

  getAllTechnologies() {
    this.techService.getAllTechnologies();
    this.technologies = this.techService.getAllTechnologies();
    this.filterTechnologiesByCategory();
  }

  //* Metodo para filtrar las tecnologias por categoria
  filterTechnologiesByCategory() {
    this.frontendTechnologies = this.technologies.filter(
      (tech) => tech.category === 'Frontend'
    );
    this.backendTechnologies = this.technologies.filter(
      (tech) => tech.category === 'Backend'
    );
    this.learningTechnologies = this.technologies.filter(
      (tech) => tech.category === 'Learning'
    );
    this.toolTechnologies = this.technologies.filter(
      (tech) => tech.category === 'Tools'
    );

    //* Asignar las tecnologias a las categorias
    this.categories[0].technologies = this.frontendTechnologies;
    this.categories[1].technologies = this.backendTechnologies;
    this.categories[2].technologies = this.learningTechnologies;
    this.categories[3].technologies = this.toolTechnologies;
  }

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
