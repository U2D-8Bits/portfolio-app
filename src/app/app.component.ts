import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutSectionComponent, ExperienceSectionComponent, HomeSectionComponent, ProjectsSectionComponent, TechnologiesSectionComponent } from './presentation/components';
import { FooterUiComponent, HeaderUiComponent } from './presentation/ui';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,

    HomeSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    AboutSectionComponent,
    TechnologiesSectionComponent,

    HeaderUiComponent,
    FooterUiComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
}
