import { Component } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { CERTIFICATIONS, EDUCATION, LANGUAGES } from '../../data/profile.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  readonly education = EDUCATION;
  readonly certifications = CERTIFICATIONS;
  readonly languages = LANGUAGES;

  constructor(readonly i18n: TranslationService) {}
}
