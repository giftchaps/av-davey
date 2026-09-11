'use server'

export type InquiryKind = 'contact' | 'quote' | 'service'

export type InquiryState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Record<string, string>
  reference?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9()+\-.\s]{7,20}$/

const limits = {
  name: 80,
  organization: 120,
  email: 120,
  phone: 20,
  short: 160,
  message: 3000,
}

function clean(value: FormDataEntryValue | null, max: number) {
  return String(value ?? '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
    .trim()
    .slice(0, max)
}

function requiredFields(kind: InquiryKind) {
  switch (kind) {
    case 'quote':
      return ['name', 'email', 'phone', 'service', 'message']
    case 'service':
      return ['name', 'email', 'phone', 'system', 'message']
    default:
      return ['name', 'email', 'message']
  }
}

function makeReference(kind: InquiryKind) {
  const prefix = { contact: 'CT', quote: 'QT', service: 'SV' }[kind]
  const stamp = Date.now().toString(36).toUpperCase().slice(-5)
  const rand = Math.random().toString(36).toUpperCase().slice(2, 5)
  return `${prefix}-${stamp}${rand}`
}

export async function submitInquiry(
  kind: InquiryKind,
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // Honeypot: real users never see or fill this field.
  if (clean(formData.get('website'), 100)) {
    return { status: 'success', reference: makeReference(kind) }
  }

  const data = {
    name: clean(formData.get('name'), limits.name),
    organization: clean(formData.get('organization'), limits.organization),
    email: clean(formData.get('email'), limits.email).toLowerCase(),
    phone: clean(formData.get('phone'), limits.phone),
    service: clean(formData.get('service'), limits.short),
    system: clean(formData.get('system'), limits.short),
    location: clean(formData.get('location'), limits.short),
    eventDate: clean(formData.get('eventDate'), 40),
    budget: clean(formData.get('budget'), limits.short),
    urgency: clean(formData.get('urgency'), limits.short),
    message: clean(formData.get('message'), limits.message),
  }

  const errors: Record<string, string> = {}
  for (const field of requiredFields(kind)) {
    if (!data[field as keyof typeof data]) errors[field] = 'This field is required.'
  }
  if (data.email && !EMAIL_RE.test(data.email)) errors.email = 'Enter a valid email address.'
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = 'Enter a valid phone number.'
  if (data.message && data.message.length < 10) {
    errors.message = 'Tell us a little more so we can help.'
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please correct the highlighted fields.',
      errors,
    }
  }

  const reference = makeReference(kind)

  // Delivery hook: connect an email provider (e.g. Resend) here to forward
  // submissions to the A/V DAVEY inbox. Until then, submissions are logged.
  console.log(`[inquiry:${kind}] ${reference}`, JSON.stringify(data))

  return { status: 'success', reference }
}
