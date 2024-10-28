import tailwindColors from 'tailwindcss/colors'
import { useGlobalTheme } from '../../models/theme'

const globalTheme = useGlobalTheme()

// See `tailwind.config.js` for used colors.

export class Theme {
  constructor(public name: string) {}

  level(level: number): number {
    if (globalTheme.name === 'dark') {
      return 1000 - level
    }

    return level
  }

  // Only used by `this.color()`.
  transName(name: string): string {
    if (name === 'blue') {
      return 'sky'
    }

    if (name === 'yellow') {
      return 'amber'
    }

    return name
  }

  color(level: number): string {
    const colors = (tailwindColors as any)[this.transName(this.name)]
    return colors[this.level(level)]
  }

  bg(level: number): string {
    return `bg-${this.name}-${this.level(level)}`
  }

  ring(level: number): string {
    return this.name === 'white'
      ? 'dark:ring-white ring-black'
      : `ring-${this.name}-${this.level(level)}`
  }

  border(level: number): string {
    return this.name === 'white'
      ? 'border-black dark:border-white'
      : `border-${this.name}-${this.level(level)}`
  }

  text(level: number): string {
    console.log(`text-${this.name}-${this.level(level)}`)
    return this.name === 'white'
      ? 'dark:text-white text-black'
      : `text-${this.name}-${this.level(level)}`
  }
}
