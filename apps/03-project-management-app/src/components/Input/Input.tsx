export default function Input({ label, textarea = false, ...props }) {
  return (
    <p>
      <label>{label}</label>
      {!textarea ? <input type="text" {...props} /> : <textarea {...props} />}
    </p>
  )
}
