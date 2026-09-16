import { Component, HostListener, signal } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher';

interface NavLink {
  key: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  imports: [ThemeSwitcherComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  readonly mobileOpen = signal(false);
  readonly scrolled = signal(false);

  readonly links: NavLink[] = [
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'education', href: '#education' },
    { key: 'contact', href: '#contact' },
  ];

  constructor(readonly i18n: TranslationService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
