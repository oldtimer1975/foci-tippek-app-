export function getHourDiff(dateStr: string, timeStr: string) {
  if (!dateStr || !timeStr) return 999;
  const now = new Date();
  const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  const matchDate = new Date(`${dateStr}T${timeStr}:00Z`);
  return (matchDate.getTime() - utcNow.getTime()) / 1000 / 3600;
}
