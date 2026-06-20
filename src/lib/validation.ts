export interface ContactFormData {
  companyName: string
  email: string
  message: string
}

/** Error codes — mapped to localized text in the UI (dict.validation). */
export type FieldErrorCode =
  | 'companyRequired'
  | 'companyTooLong'
  | 'emailRequired'
  | 'emailInvalid'
  | 'messageRequired'
  | 'messageTooLong'

export interface ValidationErrors {
  companyName?: FieldErrorCode
  email?: FieldErrorCode
  message?: FieldErrorCode
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(data: ContactFormData): ValidationErrors {
  const errors: ValidationErrors = {}

  if (!data.companyName.trim()) {
    errors.companyName = 'companyRequired'
  } else if (data.companyName.trim().length > 100) {
    errors.companyName = 'companyTooLong'
  }

  if (!data.email.trim()) {
    errors.email = 'emailRequired'
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = 'emailInvalid'
  }

  if (!data.message.trim()) {
    errors.message = 'messageRequired'
  } else if (data.message.trim().length > 10000) {
    errors.message = 'messageTooLong'
  }

  return errors
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0
}
