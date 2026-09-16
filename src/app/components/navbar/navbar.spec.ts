import { TestBed } from '@angular/core/testing';
import { TranslationService } from '../../core/i18n/translation.service';
import { NavbarComponent } from './navbar';

describe('NavbarComponent', () => {
  it('offers three flagged languages and switches to Spanish', () => {
    const i18n = TestBed.inject(TranslationService);
    i18n.setLang('pt');
    const fixture = TestBed.createComponent(NavbarComponent);

    try {
      fixture.detectChanges();
      const flags = fixture.nativeElement.querySelectorAll(
        '[role="group"][aria-label="Idioma"] button',
      );
      expect(Array.from(flags, (button: Element) => button.textContent?.trim())).toEqual([
        '🇧🇷',
        '🇺🇸',
        '🇪🇸',
      ]);

      (flags[2] as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(i18n.lang()).toBe('es');
      expect(document.documentElement.lang).toBe('es-ES');
      expect(flags[2].getAttribute('aria-pressed')).toBe('true');
      expect(fixture.nativeElement.textContent).toContain('Proyectos');
    } finally {
      fixture.destroy();
      localStorage.removeItem('portfolio-lang');
    }
  });
});
