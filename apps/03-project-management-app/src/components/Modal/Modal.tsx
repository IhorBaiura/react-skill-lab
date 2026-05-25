import { useRef, type ReactNode, type Ref, useImperativeHandle } from "react"
import { createPortal } from "react-dom"
import Button from "../Button/Button";

export type ModalHandle = {
  open: () => void
}

interface ModalProps {
  children: ReactNode
  ref?: Ref<ModalHandle>
  buttonCaption: string
}

export default function Modal({ children, ref, buttonCaption }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal()
      },
    }
  })

  const modalRoot = document.getElementById("modal-root")
  if (!modalRoot) {
    throw new Error('Could not find element with id "modal-root"')
  }

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form action="dialog">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    modalRoot
  )
}
