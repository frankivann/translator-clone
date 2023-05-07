import { TRANSLATE_SECTION } from "../constats"

interface Props {
  type: TRANSLATE_SECTION
  value: string
  loading: boolean
  onChange: (payload: string) => void
}

function getPlaceholder ({ type, loading }: { type: TRANSLATE_SECTION, loading: boolean }) {
  if (type === TRANSLATE_SECTION.FROM) return 'Enter Text'
  if (loading) return 'Translating...'

  return 'Translate'
}

export const TextArea: React.FC<Props> = ({ type, value, loading, onChange }) => {

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <textarea
      cols={30}
      rows={6}
      placeholder={getPlaceholder({ type, loading })}
      disabled={type === TRANSLATE_SECTION.TO}
      value={value}
      onChange={handleChange}
    />
  )
}
