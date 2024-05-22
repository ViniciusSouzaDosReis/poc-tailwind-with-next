'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type FileInputContextType = {
  id: string
  files: File[]
  onFileChange: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

type RootProps = ComponentProps<'div'>

export function Root({ ...props }: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFileChange(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((oldFiles) => [...oldFiles, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFileChange }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
