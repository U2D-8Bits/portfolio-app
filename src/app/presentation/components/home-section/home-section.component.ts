import { Component } from '@angular/core';

import { AppImageInterface } from '../../../core/domain/interfaces';
@Component({
  selector: 'app-home-section',
  imports: [],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css',
})
export class HomeSectionComponent {

  profileImg: AppImageInterface = {
    src: '../../../../assets/images/Profile-image.png',
    alt: 'Profile Image',
  };

}
