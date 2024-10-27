export function leftPadLineNumber(max: number, n: number): string {
  const length = max.toString().length
  return n.toString().padStart(length, ' ')
}
