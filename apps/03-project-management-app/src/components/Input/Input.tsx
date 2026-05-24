interface InputProps {
  label: string
  textarea?: boolean
}

export default function Input({
  label,
  textarea = false,
  ...props
}: InputProps) {
  const clsses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {!textarea ? (
        <input type="text" className={clsses} {...props} />
      ) : (
        <textarea className={clsses} {...props} />
      )}
    </p>
  )
}
