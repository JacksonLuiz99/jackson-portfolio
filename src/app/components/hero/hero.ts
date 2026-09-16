import { Component } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  constructor(readonly i18n: TranslationService) {}
}
