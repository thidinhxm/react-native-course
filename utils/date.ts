export function getDateMinusDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function getFormattedDate(date: Date) {
  return date.toISOString().slice(0, 10);
}