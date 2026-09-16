import { TestBed } from '@angular/core/testing';
import { TranslationService } from '../../core/i18n/translation.service';
import { TechLabelComponent } from './tech-label';

describe('TechLabelComponent', () => {
  it('keeps the technology name visible beside a decorative icon', () => {
    const fixture = TestBed.createComponent(TechLabelComponent);
    fixture.componentRef.setInput('label', 'Angular 22');
    fixture.detectChanges();

    const label = fixture.nativeElement as HTMLElement;
    const icon = label.querySelector('img');
    expect(label.textContent).toContain('Angular 22');
    expect(icon?.getAttribute('src')).toBe('tech-icons/angular.svg');
    expect(icon?.getAttribute('alt')).toBe('');
  });

  it('shows practices without a decorative technology icon', () => {
    const fixture = TestBed.createComponent(TechLabelComponent);
    fixture.componentRef.setInput('label', 'SDD');
    fixture.detectChanges();

    const label = fixture.nativeElement as HTMLElement;
    expect(label.textContent).toContain('SDD');
    expect(label.querySelector('img')).toBeNull();
  });

  it('translates practice labels when Spanish is selected', () => {
    const i18n = TestBed.inject(TranslationService);
    i18n.setLang('es');
    const fixture = TestBed.createComponent(TechLabelComponent);
    try {
      fixture.componentRef.setInput('label', 'Testes unitários');
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain('Pruebas unitarias');
    } finally {
      fixture.destroy();
      localStorage.removeItem('portfolio-lang');
    }
  });

  it('links PJC Kit to its documentation', () => {
    const fixture = TestBed.createComponent(TechLabelComponent);
    fixture.componentRef.setInput('label', 'PJC Kit');
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(link.textContent).toContain('PJC Kit');
    expect(link.href).toBe('https://pjckit.geia.vip/docs/v0/inicio');
  });
});
