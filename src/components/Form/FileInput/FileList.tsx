'use client'

import { File, Trash2 } from 'lucide-react'
import { useFileInput } from './Root'
import { formatFileSize } from '@/utils/format-bytes'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => (
        <div
          key={file.name}
          className="flex items-start gap-1 rounded-lg border border-zinc-200 p-4"
        >
          <div className="flex flex-1 items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100">
              <File className="h-4 w-4 text-violet-600" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col text-sm">
                <span className="font-medium text-zinc-700">{file.name}</span>
                <span className="text-zinc-500">
                  {formatFileSize(file.size)}
                </span>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="h-2 w-full rounded-full bg-zinc-100">
                  <div className="h-full w-4/5 rounded-full bg-violet-600" />
                </div>
                <span className="text-sm font-medium text-zinc-700">80%</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="ml-auto rounded-md p-2 hover:bg-zinc-50"
          >
            <Trash2 className="h-5 w-5 text-zinc-500" />
          </button>
        </div>
      ))}
    </div>
  )
}
