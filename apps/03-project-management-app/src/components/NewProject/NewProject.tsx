import Input from "../Input/Input"

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Save</button>
        </li>
        <li>
          <button>Cancel</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  )
}
