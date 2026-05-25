import { useState, type ChangeEvent } from "react"

interface NewTaskProps {
  onAddTask: (task: string) => void
}

export default function NewTask({ onAddTask }: NewTaskProps) {
  const [currentTask, setCurrentTask] = useState<string>("")

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCurrentTask(event.target.value)
  }

  function handleAddTask() {
    if (currentTask.trim() === "") return
    onAddTask(currentTask)
    setCurrentTask("")
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={currentTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  )
}
