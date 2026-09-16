import { Component, input } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { Theme, ThemeService } from '../../core/theme/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.html',
})
export class ThemeSwitcherComponent {
  readonly fullWidth = input(false);
  readonly options: { value: Theme; labelKey: string; preview: string }[] = [
    {
      value: 'dark',
      labelKey: 'nav.themeDark',
      preview: 'linear-gradient(135deg, #0a0a0f 55%, #22d3ee 55%)',
    },
    {
      value: 'light',
      labelKey: 'nav.themeLight',
      preview: 'linear-gradient(135deg, #f4f7fb 55%, #006f83 55%)',
    },
    {
      value: 'amber',
      labelKey: 'nav.themeAmber',
      preview: 'linear-gradient(135deg, #f7f1e6 55%, #96502c 55%)',
    },
  ];

  constructor(
    readonly i18n: TranslationService,
    readonly theme: ThemeService,
  ) {}
}
