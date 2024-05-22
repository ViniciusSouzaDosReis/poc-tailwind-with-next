import { Input } from '@/components/Input'
import { SettingsTab } from '@/components/SettingsTab'
import { Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { SelectInput } from '@/components/Form/SelectInput/inde'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl/9 font-medium text-zinc-900">Settings</h1>

      <SettingsTab />

      <div className="mt-8 flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="useForm"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="useForm"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="firstName"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input placeholder="First Name" id="firstName" />
              <Input placeholder="Second Name" />
            </div>
          </div>

          <div className="grid grid-cols-form gap-6 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="email"
            >
              Email address
            </label>
            <div>
              <Input placeholder="E-mail" icon={Mail} id="email" />
            </div>
          </div>

          <div className="grid grid-cols-form gap-6 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="photo"
            >
              Your photo
              <span className="font-regular mt-0.5 block text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex  items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Controller />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-6 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="role">
              Role
            </label>
            <div>
              <Input placeholder="Role" id="role" />
            </div>
          </div>

          <div className="grid grid-cols-form gap-6 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="country"
            >
              Country
            </label>
            <div>
              <SelectInput />
            </div>
          </div>

          <div className="grid grid-cols-form gap-6 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="timezone"
            >
              Timezone
            </label>
            <div></div>
          </div>

          <div className="grid grid-cols-form gap-6 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="bio">
              Bio
              <span className="font-regular mt-0.5 block text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div></div>
          </div>

          <div className="grid grid-cols-form gap-6 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="projects"
            >
              Portfolio projects
              <span className="font-regular mt-0.5 block text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Controller multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="useForm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
