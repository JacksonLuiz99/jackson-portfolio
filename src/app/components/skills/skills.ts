import { Component } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { SKILLS } from '../../data/profile.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  readonly groups: { titleKey: string; descriptionKey?: string; items: string[] }[] = [
    { titleKey: 'skills.frontend', items: SKILLS.frontend },
    { titleKey: 'skills.backendTools', items: SKILLS.backendTools },
    { titleKey: 'skills.practices', items: SKILLS.practices },
    {
      titleKey: 'skills.aiWorkflow',
      descriptionKey: 'skills.aiWorkflowDescription',
      items: SKILLS.aiWorkflow,
    },
  ];

  constructor(readonly i18n: TranslationService) {}
}
