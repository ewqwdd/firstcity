export type Color = 'primary' | 'secondary' | 'cyan' | 'gray' | 'blue'

export const colorMapper: Record<Color, string> = {
    cyan: 'FMC_cyan',
    blue: 'FMC_blue',
    gray: 'FMC_lightgray',
    primary: 'FMC_primary',
    secondary: 'FMC_secondary'
}