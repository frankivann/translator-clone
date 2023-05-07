import { TRANSLATE_SECTION } from './constats'
import { LanguageSelector } from './components/LanguageSelector'
import { useTranslate } from './hooks/useTranslate'
import { ArrowsIcon } from './components/Icons'
import { TextArea } from './components/TextArea'
import './styles/App.css'

export default function App () {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    setInterchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useTranslate()

  return (
    <div className="app">
      <h1>Translator Clone 💭</h1>
      <main className='main'>

        <div>
          <LanguageSelector
            type={TRANSLATE_SECTION.FROM}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <TextArea
            value={fromText}
            onChange={setFromText}
            loading={loading}
            type={TRANSLATE_SECTION.FROM}
          />
        </div>

        <div>
          <button
            onClick={setInterchangeLanguages}
            className='interChange'
          >
            <ArrowsIcon />
          </button>
        </div>

        <div>
          <LanguageSelector
            type={TRANSLATE_SECTION.TO}
            value={toLanguage}
            onChange={setToLanguage}
          />
          <TextArea
            value={result}
            loading={loading}
            onChange={setResult}
            type={TRANSLATE_SECTION.TO}
          />
        </div>

      </main>
    </div>
  )
}
