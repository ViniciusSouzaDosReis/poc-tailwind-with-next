'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type ControllerProps = ComponentProps<'input'>

export function Controller({ ...props }: ControllerProps) {
  const { id, onFileChange } = useFileInput()

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)
    onFileChange(files)
  }

  return (
    <input
      id={id}
      type="file"
      className="sr-only"
      onChange={handleFileSelected}
      {...props}
    />
  )
}
