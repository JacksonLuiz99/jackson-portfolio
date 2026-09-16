import { TRANSLATIONS } from './translations';

describe('translations', () => {
  it('has a Spanish translation for every interface label', () => {
    for (const [section, labels] of Object.entries(TRANSLATIONS.pt)) {
      for (const key of Object.keys(labels)) {
        expect(TRANSLATIONS.es[section]?.[key], `${section}.${key}`).toBeTruthy();
      }
    }
  });
});
