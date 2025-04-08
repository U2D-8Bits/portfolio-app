import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesBoxComponent } from '../../ui';

@Component({
  selector: 'app-technologies-section',
  imports: [
    CommonModule,
    TechnologiesBoxComponent
],
  templateUrl: './technologies-section.component.html',
  styleUrl: './technologies-section.component.css'
})
export class TechnologiesSectionComponent implements OnInit {

  //? Constructor
  constructor(
  ) { }

  //? Ciclo de vida
  ngOnInit(): void {}


}
