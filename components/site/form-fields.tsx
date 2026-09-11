import { cn } from '@/lib/utils'

const control =
  'w-full rounded-md border border-border bg-card px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none aria-[invalid=true]:border-accent'

type BaseProps = {
  id: string
  label: string
  error?: string
  hint?: string
  required?: boolean
  className?: string
}

function FieldShell({
  id,
  label,
  error,
  hint,
  required,
  className,
  children,
}: BaseProps & { children: React.ReactNode }) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
        {required && (
          <span className="text-accent" aria-hidden>
            {' '}
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-accent">
          {error}
        </p>
      )}
    </div>
  )
}

function describedBy(id: string, error?: string, hint?: string) {
  if (error) return `${id}-error`
  if (hint) return `${id}-hint`
  return undefined
}

export function TextField({
  type = 'text',
  autoComplete,
  placeholder,
  defaultValue,
  ...props
}: BaseProps & {
  type?: string
  autoComplete?: string
  placeholder?: string
  defaultValue?: string
}) {
  return (
    <FieldShell {...props}>
      <input
        id={props.id}
        name={props.id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={props.required}
        aria-invalid={props.error ? true : undefined}
        aria-describedby={describedBy(props.id, props.error, props.hint)}
        className={control}
      />
    </FieldShell>
  )
}

export function TextArea({
  rows = 5,
  placeholder,
  ...props
}: BaseProps & { rows?: number; placeholder?: string }) {
  return (
    <FieldShell {...props}>
      <textarea
        id={props.id}
        name={props.id}
        rows={rows}
        placeholder={placeholder}
        required={props.required}
        aria-invalid={props.error ? true : undefined}
        aria-describedby={describedBy(props.id, props.error, props.hint)}
        className={cn(control, 'resize-y leading-relaxed')}
      />
    </FieldShell>
  )
}

export function SelectField({
  options,
  placeholder = 'Select one',
  defaultValue,
  ...props
}: BaseProps & {
  options: { value: string; label: string }[]
  placeholder?: string
  defaultValue?: string
}) {
  return (
    <FieldShell {...props}>
      <select
        id={props.id}
        name={props.id}
        required={props.required}
        defaultValue={defaultValue ?? ''}
        aria-invalid={props.error ? true : undefined}
        aria-describedby={describedBy(props.id, props.error, props.hint)}
        className={cn(control, 'appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%231b2a4a%27 stroke-width=%272%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E")] bg-[length:16px] bg-[right_0.875rem_center] bg-no-repeat pr-10')}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  )
}

export function Honeypot() {
  return (
    <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
      <label htmlFor="website">Website</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  )
}
