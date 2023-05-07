import { DETECT_LANGUAGE, SUPPORTED_LANGUAGES } from './constats'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type detectLanguage = typeof DETECT_LANGUAGE
export type FromLanguage = Language | detectLanguage

export interface TranslateState {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export type TranslateAction =
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
  | { type: 'SET_TO_LANGUAGE', payload: Language }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_RESULT', payload: string }
