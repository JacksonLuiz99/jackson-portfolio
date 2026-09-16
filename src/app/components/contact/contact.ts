import { Component } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { CONTACT } from '../../data/contact.data';

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  iconPath: string;
  messageKey?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  readonly channels: ContactChannel[] = [
    {
      label: 'E-mail',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      iconPath: 'contact-icons/email.svg',
    },
    {
      label: 'WhatsApp',
      value: '+55 65 99916-1859',
      href: CONTACT.whatsapp,
      iconPath: 'contact-icons/whatsapp.svg',
      messageKey: 'contact.whatsappMessage',
    },
    {
      label: 'LinkedIn',
      value: 'in/jacksonluizdev',
      href: CONTACT.linkedin,
      iconPath: 'contact-icons/linkedin.svg',
    },
    {
      label: 'GitHub',
      value: 'JacksonLuiz99',
      href: CONTACT.github,
      iconPath: 'tech-icons/github.svg',
    },
    {
      label: 'Instagram',
      value: '@jacksonluiz99',
      href: CONTACT.instagram,
      iconPath: 'contact-icons/instagram.svg',
    },
  ];

  constructor(readonly i18n: TranslationService) {}

  hrefFor(channel: ContactChannel): string {
    return channel.messageKey
      ? `${channel.href}&text=${encodeURIComponent(this.i18n.t(channel.messageKey))}`
      : channel.href;
  }
}
