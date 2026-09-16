import { Component } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { EXPERIENCE } from '../../data/profile.data';
import { TechLabelComponent } from '../tech-label/tech-label';

@Component({
  selector: 'app-experience',
  imports: [TechLabelComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE;

  constructor(readonly i18n: TranslationService) {}
}
