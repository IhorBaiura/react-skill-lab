import type { ProjectData } from "../../App"

interface SelectedProjectProps {
  projectData: ProjectData
}

export default function SelectedProject({ projectData }: SelectedProjectProps) {
  const date = new Date(projectData.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  })

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {projectData.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{date}</p>
        <p className="text-stone-300 whitespace-pre-wrap">
          {projectData.description}
        </p>
      </header>
      TASKS
    </div>
  )
}
