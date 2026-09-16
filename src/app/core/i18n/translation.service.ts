import { Injectable, signal } from '@angular/core';
import { Lang } from '../../shared/models';
import { TRANSLATIONS } from './translations';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly lang = signal<Lang>(this.readInitialLang());

  toggle(): void {
    this.setLang(this.lang() === 'pt' ? 'en' : 'pt');
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* localStorage indisponível (modo privado, etc.) */
    }
  }

  t(key: string): string {
    const value = key
      .split('.')
      .reduce<any>((node, part) => node?.[part], TRANSLATIONS[this.lang()]);
    return typeof value === 'string' ? value : key;
  }

  private readInitialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'pt' || saved === 'en') {
        return saved;
      }
    } catch {
      /* localStorage indisponível */
    }
    return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'pt';
  }
}
