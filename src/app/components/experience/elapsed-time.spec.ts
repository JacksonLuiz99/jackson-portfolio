import { formatElapsedTime } from './elapsed-time';

describe('formatElapsedTime', () => {
  const start = '2026-04-01T00:00:00-04:00';

  it('shows calendar months, days, hours, minutes and seconds in Portuguese and English', () => {
    const now = Date.parse('2026-05-03T02:03:04-04:00');

    expect(formatElapsedTime(start, now, 'pt')).toBe(
      '1 mês, 2 dias, 2 horas, 3 minutos e 4 segundos',
    );
    expect(formatElapsedTime(start, now, 'en')).toBe(
      '1 month, 2 days, 2 hours, 3 minutes and 4 seconds',
    );
  });

  it('starts at zero before the employment start date', () => {
    expect(formatElapsedTime(start, Date.parse('2026-03-31T23:59:00-04:00'), 'pt')).toBe(
      '0 meses, 0 dias, 0 horas, 0 minutos e 0 segundos',
    );
  });
});
