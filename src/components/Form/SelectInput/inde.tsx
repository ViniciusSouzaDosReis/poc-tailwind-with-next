'use client'

import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

interface SelectInputProps {
  children: ReactNode
  placeholder: string
}

export function SelectInput({ children, placeholder }: SelectInputProps) {
  return (
    <Select.Root>
      <Select.Trigger className="flex w-full justify-between rounded-lg border border-zinc-300 px-3 py-2 text-base shadow-sm outline-none data-[state=open]:border-violet-300 data-[placeholder]:text-zinc-500">
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
