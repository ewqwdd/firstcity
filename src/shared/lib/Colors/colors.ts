export type Color = 'primary' | 'secondary' | 'cyan' | 'gray' | 'blue'

export const colorMapper: Record<Color, string> = {
    cyan: 'FMC-cyan',
    blue: 'FMC-blue',
    gray: 'FMC-gray',
    primary: 'FMC-primary',
    secondary: 'FMC-secondary'
}