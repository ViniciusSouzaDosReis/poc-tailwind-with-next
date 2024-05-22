'use client'

import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export function SelectInput() {
  return (
    <Select.Root>
      <Select.Trigger className="flex w-full justify-between rounded-lg border border-zinc-300 px-3 py-2 text-base shadow-sm outline-none data-[state=open]:border-violet-300 data-[placeholder]:text-zinc-500">
        <Select.Value placeholder="Select a country..." />
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
          <Select.Viewport>
            <Select.Item
              value="brazil"
              className="flex cursor-pointer items-center justify-between px-4 py-3 outline-none data-[highlighted]:bg-zinc-50"
            >
              <Select.ItemText className="text-black">Brasil</Select.ItemText>
              <Select.ItemIndicator>
                <Check className="h-5 w-5 text-violet-600" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="us"
              className="flex cursor-pointer items-center justify-between px-4 py-3 outline-none data-[highlighted]:bg-zinc-50"
            >
              <Select.ItemText>United State</Select.ItemText>
              <Select.ItemIndicator>
                <Check className="h-5 w-5 text-violet-600" />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
