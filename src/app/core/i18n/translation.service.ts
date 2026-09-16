import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { Lang } from '../../shared/models';
import { TRANSLATIONS } from './translations';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly document = inject(DOCUMENT);
  readonly lang = signal<Lang>(this.readInitialLang());

  constructor() {
    this.document.documentElement.lang = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' }[this.lang()];
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    this.document.documentElement.lang = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' }[lang];
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
      if (saved === 'pt' || saved === 'en' || saved === 'es') {
        return saved;
      }
    } catch {
      /* localStorage indisponível */
    }
    const browserLang = navigator.language?.toLowerCase();
    return browserLang?.startsWith('es') ? 'es' : browserLang?.startsWith('en') ? 'en' : 'pt';
  }
}
