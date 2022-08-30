type Options = {
  length: number
  hasUppercase: boolean
  hasLowercase: boolean
  hasNumbers: boolean
  hasSymbols: boolean
}

export function calculatePasswordStrength({
  length,
  hasUppercase,
  hasLowercase,
  hasNumbers,
  hasSymbols
}: Options): number {
  const hasNoOptions =
    !hasUppercase && !hasLowercase && !hasNumbers && !hasSymbols

  if (length === 0 && hasNoOptions) {
    return 0
  }

  if (length < 8 || hasNoOptions) {
    return 1
  }

  const optionsCount = [
    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasSymbols
  ].reduce((acc, curr) => (curr ? acc + 1 : acc), 0)

  let strength = (length / 8) * optionsCount

  if (hasUppercase) {
    strength *= 3
  }

  if (hasLowercase) {
    strength *= 3
  }

  if (hasNumbers) {
    strength *= 2
  }

  if (hasSymbols) {
    strength *= 4
  }

  if (strength <= 30) {
    return 2
  }

  if (strength >= 360) {
    return 4
  }

  return 3
}
