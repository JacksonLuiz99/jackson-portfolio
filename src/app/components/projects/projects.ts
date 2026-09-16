import { Component, computed, signal } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { GITHUB_PROFILE_URL, PROJECTS } from '../../data/projects.data';
import { Project } from '../../shared/models';
import { TechLabelComponent } from '../tech-label/tech-label';

type Filter = 'all' | Project['category'];

@Component({
  selector: 'app-projects',
  imports: [TechLabelComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  private readonly previewLimit = 6;
  readonly githubProfileUrl = GITHUB_PROFILE_URL;
  readonly filter = signal<Filter>('all');
  readonly expanded = signal(false);
  readonly caseStudies = PROJECTS.filter((project) => project.caseStudy);

  readonly filters: { key: Filter; labelKey: string }[] = [
    { key: 'all', labelKey: 'projects.filterAll' },
    { key: 'personal', labelKey: 'projects.filterPersonal' },
    { key: 'client', labelKey: 'projects.filterClient' },
    { key: 'work', labelKey: 'projects.filterWork' },
  ];

  readonly filteredProjects = computed(() => {
    const filter = this.filter();
    const sorted = [...PROJECTS].sort((a, b) => Number(b.featured) - Number(a.featured));
    return filter === 'all'
      ? sorted.filter((project) => !project.caseStudy)
      : sorted.filter((project) => project.category === filter);
  });
  readonly visibleProjects = computed(() =>
    this.expanded() ? this.filteredProjects() : this.filteredProjects().slice(0, this.previewLimit),
  );
  readonly hasMoreProjects = computed(() => this.filteredProjects().length > this.previewLimit);

  constructor(readonly i18n: TranslationService) {}

  setFilter(filter: Filter): void {
    this.filter.set(filter);
    this.expanded.set(false);
  }

  toggleExpanded(): void {
    this.expanded.update((expanded) => !expanded);
  }
}
