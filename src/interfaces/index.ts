
export type Led = 'red' | 'green' | 'yellow' | 'gray'

export type Language = 'en-US' | 'pt-BR'

export interface LedProp {
  type: Led
}

export interface authType {
  token: string
  trainer: string
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

export interface signUp {
  trainer: string
  email: string
  password: string
  confirmPassword: string
}

export type signUpData = Omit<signUp, 'confirmPassword'>

export interface authData {
  email: string
  password: string
}

export type CreateUserSettingsData = {
  colorRed: number;
  colorBlue: number;
  colorGreen: number;
  language: string;
  fontSize: number;
}

export type CatchPokemon = {
  pokemonId: number;
  tentatives: number;
}

export interface WhoIsThatType {
  id: number,
  pokemonId: number,
  name: string,
  spriteURL: string,
  blackSpriteURL: string
}
