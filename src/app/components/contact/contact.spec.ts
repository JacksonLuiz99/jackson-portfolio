import { TestBed } from '@angular/core/testing';
import { TranslationService } from '../../core/i18n/translation.service';
import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  it('opens WhatsApp with a prefilled message in the selected language', () => {
    const i18n = TestBed.inject(TranslationService);
    const fixture = TestBed.createComponent(ContactComponent);

    try {
      for (const lang of ['pt', 'en', 'es'] as const) {
        i18n.setLang(lang);
        fixture.detectChanges();
        const link = Array.from(fixture.nativeElement.querySelectorAll('a')).find(
          (anchor): anchor is HTMLAnchorElement =>
            anchor instanceof HTMLAnchorElement && anchor.href.includes('api.whatsapp.com/send'),
        );
        const url = new URL(link!.href);
        expect(url.searchParams.get('phone')).toBe('5565999161859');
        expect(url.searchParams.get('text')).toBe(i18n.t('contact.whatsappMessage'));
      }
    } finally {
      fixture.destroy();
      localStorage.removeItem('portfolio-lang');
    }
  });
});
