import { Component } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  constructor(readonly i18n: TranslationService) {}
}
