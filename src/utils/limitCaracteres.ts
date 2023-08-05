export function limitCaracteres(text: string, limit: number) {
  if (text.length <= limit) {
    return text
  }

  return text.substring(0, limit) + '...'
}