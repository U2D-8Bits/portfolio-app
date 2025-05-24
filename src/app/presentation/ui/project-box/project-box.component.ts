import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//? Módulos  / Interfaces personalizados
import { ProjectInterface } from '../../../core/domain/interfaces';

//? Servicios 
import { ProjectsService } from '../../../application/services/projects/projects.service';

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
  projects: ProjectInterface[] = []


  //? Constructor de la clase
  constructor(
    private projectSrv: ProjectsService,
  ) { }


  //? Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.projects = this.projectSrv.getProjects();
  }
}
