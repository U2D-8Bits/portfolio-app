import { Component, OnInit,  } from '@angular/core';
import { CommonModule } from '@angular/common';

//? Módulos de PrimeNG
import { DividerModule } from 'primeng/divider';

//? Módulos / Interfaces personalizados
import { ExperienceInterface } from '../../../core/domain/interfaces';
import { CustomDatePipe } from '../../../application/pipes';
import { ExperienceService } from '../../../application/services/experience/experience.service';


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
  experiences: ExperienceInterface[] = [];

  constructor(private experienceService: ExperienceService) {}

  //? Ciclo de vida de ngOnInit
  ngOnInit(): void {
    this.experiences = this.experienceService.getExperiences();
  }

}
