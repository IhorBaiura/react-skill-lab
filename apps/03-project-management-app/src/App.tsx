import { useState } from "react"
import NewProject from "./components/NewProject/NewProject"
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected"
import ProjectsSidebar from "./components/ProjectsSidebar/ProjectsSidebar"
import { v4 as uuid } from "uuid"
import SelectedProject from "./components/SelectedProject/SelectedProject"

export interface ProjectData {
  title: string
  description: string
  dueDate: string
  id?: string
}

export interface ProjectState {
  selectedProjectId: undefined | null | string
  projects: ProjectData[]
}

function App() {
  const [projectState, setProjectState] = useState<ProjectState>({
    selectedProjectId: undefined,
    projects: [],
  })

  function handleSelectProject(id: string) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }))
  }

  function handleStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }))
  }

  function handleCloseStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
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

  function handleDeleteProject(id: string) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((project) => project.id !== id),
    }))
  }

  const selectedProjectData = projectState.projects.find(
    (pr) => pr.id === projectState.selectedProjectId
  )
  let content = (
    <SelectedProject
      projectData={selectedProjectData as ProjectData}
      onDelete={handleDeleteProject}
    />
  )

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCloseStartAddProject}
      />
    )
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelect={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId as string}
      />
      {content}
    </main>
  )
}

export default App
