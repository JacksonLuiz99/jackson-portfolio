import { Component, computed, input } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { LocalizedText } from '../../shared/models';

interface TechIcon {
  svg?: string;
  mark?: string;
  background: string;
}

const ICONS: Record<string, TechIcon> = {
  Angular: { svg: 'angular', background: '#9f1239' },
  'Angular Material': { svg: 'angular', background: '#9f1239' },
  TypeScript: { svg: 'typescript', background: '#235b99' },
  JavaScript: { svg: 'javascript', background: '#796600' },
  RxJS: { svg: 'reactivex', background: '#9b146f' },
  'Tailwind CSS': { svg: 'tailwindcss', background: '#087e9b' },
  PrimeNG: { svg: 'primeng', background: '#1769aa' },
  'PJC Kit': { mark: 'P', background: '#006f83' },
  Fuse: { mark: 'F', background: '#6648a8' },
  HTML: { svg: 'html5', background: '#ae3c1d' },
  CSS: { svg: 'css', background: '#155e9b' },
  SCSS: { svg: 'sass', background: '#a82d6c' },
  Java: { mark: 'J', background: '#a24d24' },
  Quarkus: { svg: 'quarkus', background: '#24568c' },
  PostgreSQL: { svg: 'postgresql', background: '#336791' },
  Docker: { svg: 'docker', background: '#1877b5' },
  Firebase: { svg: 'firebase', background: '#8b5300' },
  'Node.js': { svg: 'nodedotjs', background: '#3d752c' },
  Git: { svg: 'git', background: '#b53419' },
  GitHub: { svg: 'github', background: '#555b66' },
  GitLab: { svg: 'gitlab', background: '#b64a0d' },
  Postman: { svg: 'postman', background: '#bd4619' },
  Vue: { svg: 'vuedotjs', background: '#277c57' },
  'GitLab CI/CD': { svg: 'gitlab', background: '#b64a0d' },
  WebSocket: { mark: 'WS', background: '#3b7282' },
};

const LABELS: Record<string, LocalizedText> = {
  'Testes unitários': { pt: 'Testes unitários', en: 'Unit tests', es: 'Pruebas unitarias' },
  'Padrões de projeto': {
    pt: 'Padrões de projeto',
    en: 'Design patterns',
    es: 'Patrones de diseño',
  },
  Componentização: { pt: 'Componentização', en: 'Componentization', es: 'Componentización' },
  'Suporte Técnico': { pt: 'Suporte Técnico', en: 'Technical support', es: 'Soporte técnico' },
  Infraestrutura: { pt: 'Infraestrutura', en: 'Infrastructure', es: 'Infraestructura' },
  Redes: { pt: 'Redes', en: 'Networks', es: 'Redes' },
};

function iconFor(label: string): TechIcon | undefined {
  if (label.startsWith('Angular ') && label !== 'Angular Material') return ICONS['Angular'];
  if (label === 'HTML5' || label === 'HTML') return ICONS['HTML'];
  if (label === 'CSS3/SCSS') return ICONS['SCSS'];
  if (label === 'CSS3' || label === 'CSS') return ICONS['CSS'];
  return ICONS[label];
}

@Component({
  selector: 'app-tech-label',
  templateUrl: './tech-label.html',
})
export class TechLabelComponent {
  readonly label = input.required<string>();
  readonly documentationUrl = input<string>();
  readonly icon = computed(() => iconFor(this.label()));
  readonly href = computed(
    () =>
      this.documentationUrl() ??
      (this.label() === 'PJC Kit' ? 'https://pjckit.geia.vip/docs/v0/inicio' : undefined),
  );

  constructor(readonly i18n: TranslationService) {}

  displayLabel(): string {
    return LABELS[this.label()]?.[this.i18n.lang()] ?? this.label();
  }
}
