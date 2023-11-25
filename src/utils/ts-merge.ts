import { twMerge, type ClassNameValue } from 'tailwind-merge'

export function tw(...classNames: ClassNameValue[]) {
  return twMerge(...classNames)
}