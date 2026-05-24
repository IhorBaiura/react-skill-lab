import { useRef } from "react"
import Input from "../Input/Input"
import type { ProjectData } from "../../App"

interface NewProjectProps {
  onAdd: (data: ProjectData) => void
}

export default function NewProject({ onAdd }: NewProjectProps) {
  const title = useRef<HTMLInputElement>(null)
  const desc = useRef<HTMLTextAreaElement>(null)
  const dueDate = useRef<HTMLInputElement>(null)

  function handleSave() {
    const enteredTitle = title.current && title.current.value
    const enteredDescription = desc.current && desc.current.value
    const enteredDueDate = dueDate.current && dueDate.current.value

    onAdd({
      title: enteredTitle as string,
      description: enteredDescription as string,
      dueDate: enteredDueDate as string,
    })
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover-text-stone-900">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={desc} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  )
}
