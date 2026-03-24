export interface ContactFormData {
  companyName: string
  email: string
  message: string
}

export interface ValidationErrors {
  companyName?: string
  email?: string
  message?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(data: ContactFormData): ValidationErrors {
  const errors: ValidationErrors = {}

  if (!data.companyName.trim()) {
    errors.companyName = '会社名を入力してください。'
  } else if (data.companyName.trim().length > 100) {
    errors.companyName = '会社名は100文字以内で入力してください。'
  }

  if (!data.email.trim()) {
    errors.email = 'メールアドレスを入力してください。'
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = '正しいメールアドレス形式で入力してください。'
  }

  if (!data.message.trim()) {
    errors.message = 'お問い合わせ内容を入力してください。'
  } else if (data.message.trim().length > 10000) {
    errors.message = 'お問い合わせ内容は10,000文字以内で入力してください。'
  }

  return errors
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0
}
