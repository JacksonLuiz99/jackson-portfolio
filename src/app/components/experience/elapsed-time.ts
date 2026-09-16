import { Lang } from '../../shared/models';

export function formatElapsedTime(start: string, now: number, lang: Lang): string {
  const startTime = Date.parse(start);
  if (Number.isNaN(startTime)) return '—';

  const startDate = new Date(startTime);
  const nowDate = new Date(Math.max(now, startTime));
  let months =
    (nowDate.getUTCFullYear() - startDate.getUTCFullYear()) * 12 +
    nowDate.getUTCMonth() -
    startDate.getUTCMonth();
  const monthStart = (count: number) => {
    const firstDay = Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth() + count, 1);
    const lastDay = new Date(
      Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth() + count + 1, 0),
    ).getUTCDate();
    return (
      firstDay +
      (Math.min(startDate.getUTCDate(), lastDay) - 1) * 86_400_000 +
      startDate.getUTCHours() * 3_600_000 +
      startDate.getUTCMinutes() * 60_000 +
      startDate.getUTCSeconds() * 1_000 +
      startDate.getUTCMilliseconds()
    );
  };
  if (monthStart(months) > nowDate.getTime()) months--;

  let remaining = Math.floor((nowDate.getTime() - monthStart(months)) / 1000);
  const days = Math.floor(remaining / 86_400);
  remaining %= 86_400;
  const hours = Math.floor(remaining / 3_600);
  remaining %= 3_600;
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  const labels =
    lang === 'pt'
      ? [
          ['mês', 'meses'],
          ['dia', 'dias'],
          ['hora', 'horas'],
          ['minuto', 'minutos'],
          ['segundo', 'segundos'],
        ]
      : [
          ['month', 'months'],
          ['day', 'days'],
          ['hour', 'hours'],
          ['minute', 'minutes'],
          ['second', 'seconds'],
        ];
  const parts = [months, days, hours, minutes, seconds].map(
    (value, index) => `${value} ${labels[index][value === 1 ? 0 : 1]}`,
  );
  return `${parts.slice(0, -1).join(', ')} ${lang === 'pt' ? 'e' : 'and'} ${parts[4]}`;
}
