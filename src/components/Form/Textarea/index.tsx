import { ComponentProps } from 'react'

type TextareaProps = ComponentProps<'textarea'>

export function Textarea({ ...props }: TextareaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3.5 py-2.5 text-zinc-900 shadow-sm outline-none focus:border-violet-300"
      {...props}
    ></textarea>
  )
}
