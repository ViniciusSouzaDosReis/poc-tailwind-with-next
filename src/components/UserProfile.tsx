import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function UserProfile() {
  return (
    <div className="flex items-start gap-3 px-4">
      <Image
        src="https://avatars.githubusercontent.com/u/103471699?v=4"
        alt="Imagem de perfil"
        className="h-10 w-10 rounded-full"
        width={100}
        height={100}
      />
      <div className="truncate">
        <span className="block text-sm/5 font-semibold text-zinc-700">
          Vinícius Reis
        </span>
        <span className="truncate text-sm/5 text-zinc-500">
          vinireis010305@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
