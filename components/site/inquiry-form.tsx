'use client'

import { useActionState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import {
  submitInquiry,
  type InquiryKind,
  type InquiryState,
} from '@/app/actions/inquiries'
import { services } from '@/lib/site-data'
import { Honeypot, SelectField, TextArea, TextField } from './form-fields'

const initial: InquiryState = { status: 'idle' }

const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: 'not-sure', label: 'Not sure yet — help me decide' },
]

const systemOptions = [
  { value: 'conference-room', label: 'Conference / meeting room' },
  { value: 'projector-display', label: 'Projector or display' },
  { value: 'audio', label: 'Audio / microphones / speakers' },
  { value: 'control', label: 'Control panel or touch screen' },
  { value: 'video-conferencing', label: 'Video conferencing (Teams, Zoom, etc.)' },
  { value: 'residential', label: 'Home theater / residential system' },
  { value: 'event', label: 'Event support' },
  { value: 'other', label: 'Something else' },
]

const urgencyOptions = [
  { value: 'down', label: 'System is down — urgent' },
  { value: 'degraded', label: 'Working, but not correctly' },
  { value: 'scheduled', label: 'Schedule a maintenance visit' },
  { value: 'question', label: 'Just a question' },
]

const budgetOptions = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-15k', label: '$5,000 – $15,000' },
  { value: '15k-50k', label: '$15,000 – $50,000' },
  { value: '50k-plus', label: '$50,000+' },
  { value: 'unsure', label: 'Not sure yet' },
]

const copy: Record<
  InquiryKind,
  { submit: string; successTitle: string; successBody: string }
> = {
  contact: {
    submit: 'Send message',
    successTitle: 'Thanks — we got your message.',
    successBody:
      'Someone from the crew will reply within one business day. If it cannot wait, call us.',
  },
  quote: {
    submit: 'Request my quote',
    successTitle: 'Your quote request is in.',
    successBody:
      'We will review the details and follow up with questions or a proposal, usually within one business day.',
  },
  service: {
    submit: 'Submit service request',
    successTitle: 'Service request received.',
    successBody:
      'A technician will reach out to triage the issue. Many problems are solved by phone or remote session at no charge.',
  },
}

export function InquiryForm({
  kind,
  defaultService,
}: {
  kind: InquiryKind
  defaultService?: string
}) {
  const action = submitInquiry.bind(null, kind)
  const [state, formAction, pending] = useActionState(action, initial)
  const errors = state.errors ?? {}

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-md border border-border bg-card p-6 shadow-sm sm:p-8"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <CheckCircle2 className="size-6" aria-hidden />
        </span>
        <div>
          <h3 className="font-heading text-2xl font-bold text-primary">
            {copy[kind].successTitle}
          </h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{copy[kind].successBody}</p>
        </div>
        {state.reference && (
          <p className="rounded bg-muted px-3 py-2 font-mono text-sm text-foreground">
            Reference: {state.reference}
          </p>
        )}
      </div>
    )
  }

  return (
    <form
      action={formAction}
      noValidate
      className="relative flex flex-col gap-5 rounded-md border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <Honeypot />

      {state.status === 'error' && state.message && (
        <p
          role="alert"
          className="rounded-md border border-accent/30 bg-accent/5 px-4 py-3 text-sm font-medium text-accent"
        >
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="name"
          label="Your name"
          autoComplete="name"
          required
          error={errors.name}
        />
        <TextField
          id="organization"
          label="Company or organization"
          autoComplete="organization"
          error={errors.organization}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
          error={errors.email}
        />
        <TextField
          id="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
          required={kind !== 'contact'}
          error={errors.phone}
          hint={kind === 'contact' ? 'Optional, but the fastest way to reach you.' : undefined}
        />
      </div>

      {kind === 'quote' && (
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            id="service"
            label="What do you need?"
            options={serviceOptions}
            defaultValue={defaultService}
            required
            error={errors.service}
          />
          <TextField
            id="location"
            label="Project location"
            placeholder="City, State or venue"
            autoComplete="address-level2"
            error={errors.location}
          />
          <TextField
            id="eventDate"
            label="Target date"
            type="date"
            hint="Event date or desired completion."
            error={errors.eventDate}
          />
          <SelectField
            id="budget"
            label="Approximate budget"
            options={budgetOptions}
            error={errors.budget}
          />
        </div>
      )}

      {kind === 'service' && (
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            id="system"
            label="What needs attention?"
            options={systemOptions}
            required
            error={errors.system}
          />
          <SelectField
            id="urgency"
            label="How urgent is it?"
            options={urgencyOptions}
            error={errors.urgency}
          />
          <TextField
            id="location"
            label="Site or room"
            placeholder="Building, floor, room name"
            className="sm:col-span-2"
            error={errors.location}
          />
        </div>
      )}

      <TextArea
        id="message"
        label={
          kind === 'service'
            ? 'Describe the problem'
            : kind === 'quote'
              ? 'Tell us about the project'
              : 'How can we help?'
        }
        rows={kind === 'contact' ? 5 : 6}
        required
        error={errors.message}
        placeholder={
          kind === 'service'
            ? 'What is it doing, what did it used to do, and when did it start?'
            : kind === 'quote'
              ? 'Room size, audience, goals, existing equipment — anything that helps us scope it.'
              : undefined
        }
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground">
          We reply within one business day. Your details are only used to respond to your
          request.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-heading text-base font-bold tracking-wide text-accent-foreground uppercase shadow-md transition-colors hover:bg-accent/90 disabled:opacity-70"
        >
          {pending ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <ArrowRight className="size-4" aria-hidden />
          )}
          {pending ? 'Sending…' : copy[kind].submit}
        </button>
      </div>
    </form>
  )
}
