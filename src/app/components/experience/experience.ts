import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, NgZone, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { EXPERIENCE } from '../../data/profile.data';
import { TechLabelComponent } from '../tech-label/tech-label';
import { formatElapsedTime } from './elapsed-time';

@Component({
  selector: 'app-experience',
  imports: [TechLabelComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly zone = inject(NgZone);
  readonly experience = EXPERIENCE;
  readonly now = signal(Date.now());

  constructor(readonly i18n: TranslationService) {
    const view = this.document.defaultView;
    if (!view) return;

    const interval = this.zone.runOutsideAngular(() =>
      view.setInterval(() => this.now.set(Date.now()), 1_000),
    );
    this.destroyRef.onDestroy(() => view.clearInterval(interval));
  }

  elapsedSince(start: string): string {
    return formatElapsedTime(start, this.now(), this.i18n.lang());
  }
}
