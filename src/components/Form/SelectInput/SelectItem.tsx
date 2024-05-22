'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import { ReactNode } from 'react'

interface SelectItemProps {
  value: string
  children: ReactNode
}

export function SelectItem({ children, value }: SelectItemProps) {
  return (
    <Select.Item
      value={value}
      className="flex cursor-pointer items-center justify-between px-4 py-3 outline-none data-[highlighted]:bg-zinc-50"
    >
      <Select.ItemText className="text-black">{children}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-5 w-5 text-violet-600" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
