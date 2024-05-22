'use client'

import { CloudUpload } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-zinc-200 px-6 py-4 shadow-sm hover:border-violet-300"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-25 group-hover:bg-violet-100">
        <CloudUpload className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>
      <div className="flex flex-col items-center gap-1 text-zinc-500 group-hover:text-violet-600">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          or drag and drop
        </span>
        <div className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</div>
      </div>
    </label>
  )
}
