function getRandomChar(str: string) {
  return str.charAt(Math.floor(Math.random() * str.length))
}

function shuffle(array: string[]) {
  let currentIndex = array.length
  let randomIndex: number

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}

type GeneratePasswordArgs = {
  length: number
  hasUppercase: boolean
  hasLowercase: boolean
  hasNumbers: boolean
  hasSymbols: boolean
}

export function generatePassword({
  length,
  hasLowercase,
  hasUppercase,
  hasNumbers,
  hasSymbols
}: GeneratePasswordArgs) {
  const groups: string[] = []
  const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    symbols: '!@#$%^&()_+~`|}{[]:;?><,./-='
  }

  if (hasLowercase) {
    groups.push(charSets.lowercase)
  }

  if (hasUppercase) {
    groups.push(charSets.uppercase)
  }

  if (hasNumbers) {
    groups.push(charSets.numeric)
  }

  if (hasSymbols) {
    groups.push(charSets.symbols)
  }

  let password = groups.map(getRandomChar).join('')

  const str = groups.join('')

  for (let i = password.length; i <= length; i++) {
    password += getRandomChar(str)
  }

  return shuffle([password]).join('').slice(0, length)
}
