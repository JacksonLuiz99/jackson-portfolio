import { Component } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { EXPERIENCE } from '../../data/profile.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE;

  constructor(readonly i18n: TranslationService) {}
}
