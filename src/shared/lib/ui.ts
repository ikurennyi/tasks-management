export function capitalizeFirstLetter(string: string): string {
  return String(string).charAt(0).toUpperCase() + String(string).slice(1)
}

export function formatDate(date: Date) {
  return date.toISOString().split('T')[0].replace(/-/g, '-')
}
