import { useState } from "react"
import NewProject from "./components/NewProject/NewProject"
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected"
import ProjectsSidebar from "./components/ProjectsSidebar/ProjectsSidebar"
import { v4 as uuid } from "uuid"

export interface ProjectData {
  title: string
  description: string
  dueDate: string
  id?: string
}

export interface ProjectState {
  selectedProjectId: undefined | null | number
  projects: ProjectData[]
}

function App() {
  const [projectState, setProjectState] = useState<ProjectState>({
    selectedProjectId: undefined,
    projects: [],
  })

  function handleStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }))
  }

  function handleAddProject(projectData: ProjectData) {
    setProjectState((prevState) => {
      const id = uuid()
      const newProject = {
        ...projectData,
        id,
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  let content

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  )
}

export default App
