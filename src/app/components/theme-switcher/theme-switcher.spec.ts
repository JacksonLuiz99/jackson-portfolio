import { TestBed } from '@angular/core/testing';
import { ThemeSwitcherComponent } from './theme-switcher';

describe('ThemeSwitcherComponent', () => {
  afterEach(() => {
    localStorage.removeItem('portfolio-theme');
    delete document.documentElement.dataset['theme'];
  });

  it('applies and saves a selected theme', () => {
    const fixture = TestBed.createComponent(ThemeSwitcherComponent);
    fixture.detectChanges();

    const darkButton = fixture.nativeElement.querySelector(
      '[data-theme-option="dark"]',
    ) as HTMLButtonElement;
    const amberButton = fixture.nativeElement.querySelector(
      '[data-theme-option="amber"]',
    ) as HTMLButtonElement;
    expect(darkButton.getAttribute('aria-pressed')).toBe('true');

    amberButton.click();
    fixture.detectChanges();

    expect(document.documentElement.dataset['theme']).toBe('amber');
    expect(localStorage.getItem('portfolio-theme')).toBe('amber');
    expect(amberButton.getAttribute('aria-pressed')).toBe('true');
    expect(darkButton.getAttribute('aria-pressed')).toBe('false');
  });

  it('restores a saved theme when the switcher loads', () => {
    localStorage.setItem('portfolio-theme', 'light');

    const fixture = TestBed.createComponent(ThemeSwitcherComponent);
    fixture.detectChanges();

    const lightButton = fixture.nativeElement.querySelector(
      '[data-theme-option="light"]',
    ) as HTMLButtonElement;
    expect(lightButton.getAttribute('aria-pressed')).toBe('true');
    expect(document.documentElement.dataset['theme']).toBe('light');
  });
});
