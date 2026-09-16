import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { TranslationService } from '../../core/i18n/translation.service';
import { ExperienceComponent } from './experience';

describe('ExperienceComponent', () => {
  it('updates the current role duration every second', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-04-01T00:00:01-04:00'));
    TestBed.inject(TranslationService).setLang('pt');

    const fixture = TestBed.createComponent(ExperienceComponent);
    try {
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent.replace(/\s+/g, ' ')).toContain(
        '01/04/2026 — atual · 0 meses, 0 dias, 0 horas, 0 minutos e 1 segundo',
      );

      vi.advanceTimersByTime(1_000);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain(
        '0 meses, 0 dias, 0 horas, 0 minutos e 2 segundos',
      );
    } finally {
      fixture.destroy();
      localStorage.removeItem('portfolio-lang');
      vi.useRealTimers();
    }
  });
});
