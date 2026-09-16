import { Component, computed, signal } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { GITHUB_PROFILE_URL, PROJECTS } from '../../data/projects.data';
import { Project } from '../../shared/models';

type Filter = 'all' | Project['category'];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  readonly githubProfileUrl = GITHUB_PROFILE_URL;
  readonly filter = signal<Filter>('all');

  readonly filters: { key: Filter; labelKey: string }[] = [
    { key: 'all', labelKey: 'projects.filterAll' },
    { key: 'personal', labelKey: 'projects.filterPersonal' },
    { key: 'client', labelKey: 'projects.filterClient' },
    { key: 'work', labelKey: 'projects.filterWork' },
  ];

  readonly visibleProjects = computed(() => {
    const filter = this.filter();
    const sorted = [...PROJECTS].sort((a, b) => Number(b.featured) - Number(a.featured));
    return filter === 'all' ? sorted : sorted.filter((project) => project.category === filter);
  });

  constructor(readonly i18n: TranslationService) {}

  setFilter(filter: Filter): void {
    this.filter.set(filter);
  }
}
