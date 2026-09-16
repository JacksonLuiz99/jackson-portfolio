import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light' | 'amber';

const STORAGE_KEY = 'portfolio-theme';

export function isTheme(value: string): value is Theme {
  return value === 'dark' || value === 'light' || value === 'amber';
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly current = signal<Theme>(this.readInitialTheme());

  constructor() {
    this.apply(this.current());
  }

  setTheme(theme: Theme): void {
    this.current.set(theme);
    this.apply(theme);
    try {
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage may be unavailable in private browsing.
    }
  }

  private apply(theme: Theme): void {
    this.document.documentElement.dataset['theme'] = theme;
  }

  private readInitialTheme(): Theme {
    try {
      const saved = this.document.defaultView?.localStorage.getItem(STORAGE_KEY);
      if (saved && isTheme(saved)) return saved;
    } catch {
      // Fall back to the current dark theme.
    }
    return 'dark';
  }
}
