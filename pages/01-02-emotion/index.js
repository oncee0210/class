import { Email, EmailInput } from '../../styles/emotion'

export default function emotionPage() {
  return (
    <div>
      <Email>이메일</Email>
      <EmailInput type="text" />
      <button>Click</button>
    </div>
  )
}