import { useState } from "react"
import NewProject from "./components/NewProject/NewProject"
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected"
import ProjectsSidebar from "./components/ProjectsSidebar/ProjectsSidebar"

export interface ProjectState {
  selectedProjectId: undefined | null | number
  projects: unknown[]
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

  let content

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  )
}

export default App
