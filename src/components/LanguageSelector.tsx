import { DETECT_LANGUAGE, SUPPORTED_LANGUAGES, TRANSLATE_SECTION } from "../constats"
import { type FromLanguage, type Language } from "../types.d"

type Props =
  | { type: TRANSLATE_SECTION.FROM, value: FromLanguage, onChange: (payload: FromLanguage) => void }
  | { type: TRANSLATE_SECTION.TO, value: Language, onChange: (payload: Language) => void }

export const LanguageSelector: React.FC<Props> = ({ type, value, onChange }) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    onChange(event.target.value as Language)
  }

  return (
    <header>

      <select name="" style={{ width: '100%', fontSize: '15px' }} onChange={handleChange} value={value}>
        {type === TRANSLATE_SECTION.FROM && <option value={DETECT_LANGUAGE}>{DETECT_LANGUAGE}</option>}
        {
          Object.entries(SUPPORTED_LANGUAGES).map(([key, language]) => (
            <option key={key} value={key}>{language}</option>
          ))
        }
      </select>
    </header>
  )
}
