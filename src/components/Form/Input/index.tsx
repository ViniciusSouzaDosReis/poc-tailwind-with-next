import { ElementType, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ElementType
}

export function Input({ icon: Icon, ...props }: InputProps) {
  return (
    <div className="flex w-full items-center gap-2 rounded-lg border border-solid border-zinc-300 px-3 py-2 focus-within:border-purple-300 focus-within:ring-4 focus-within:ring-violet-100">
      {Icon && <Icon className="h-5 w-5 text-zinc-500" />}
      <input
        className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-500 outline-none"
        {...props}
      />
    </div>
  )
}
