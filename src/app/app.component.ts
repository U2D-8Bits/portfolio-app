import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutSectionComponent, ExperienceSectionComponent, HomeSectionComponent, ProjectsSectionComponent, TechnologiesSectionComponent } from './presentation/components';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,

    HomeSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    AboutSectionComponent,
    TechnologiesSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
}
