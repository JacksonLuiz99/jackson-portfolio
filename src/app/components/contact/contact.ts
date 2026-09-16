import { Component } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { CONTACT } from '../../data/contact.data';

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  readonly channels: ContactChannel[] = [
    { label: 'E-mail', value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: '✉' },
    { label: 'WhatsApp', value: '+55 65 99916-1859', href: CONTACT.whatsapp, icon: '↗' },
    { label: 'LinkedIn', value: 'in/jacksonluizdev', href: CONTACT.linkedin, icon: 'in' },
    { label: 'GitHub', value: 'JacksonLuiz99', href: CONTACT.github, icon: '</>' },
    { label: 'Instagram', value: '@jacksonluiz99', href: CONTACT.instagram, icon: '@' },
  ];

  constructor(readonly i18n: TranslationService) {}
}
