import def_image from "../../assets/no-projects.png"
import Button from "../Button/Button"

interface NoProjectSelectedProps {
  onStartAddProject: () => void
}

export default function NoProjectSelected({
  onStartAddProject,
}: NoProjectSelectedProps) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={def_image}
        alt="no projects image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-sl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Createa a new project</Button>
      </p>
    </div>
  )
}
