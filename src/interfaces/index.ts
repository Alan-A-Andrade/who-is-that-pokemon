
export type Led = 'red' | 'green' | 'yellow' | 'gray'

export type Language = 'en-US' | 'pt-BR'

export interface LedProp {
  type: Led
}

export interface authType {
  token: string
  name: string
}

export interface authContextType {
  auth: authType
  login: Function
  logoff: Function
}

export interface LedIndicatorProp {
  text: string
  type: Led
}

export interface userSettings {
  color: number[]
  fontSize : number
  language: string
}

export interface settingsOptionsLedColors {
  color: Led,
  language: Led,
  font: Led
}

export interface landingOptionsLedColors {
  login: Led,
  signup: Led,
}

export interface headerOptionsLedColors {
  home: Led,
  settings: Led,
  logout: Led
}
