import type { ProjectData } from "../../App"
import Button from "../Button/Button"

interface ProjectsSidebarProps {
  onStartAddProject: () => void
  projects: ProjectData[]
  onSelect: (projectId: string) => void
  selectedProjectId: string
}

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelect,
  selectedProjectId,
}: ProjectsSidebarProps) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Prjects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => {
          let classes =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

          classes +=
            project.id == selectedProjectId
              ? " bg-stone-800 text-stone-200"
              : " text-stone-400"

          return (
            <li key={project.id}>
              <button
                className={classes}
                onClick={() => onSelect(project.id as string)}
              >
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
