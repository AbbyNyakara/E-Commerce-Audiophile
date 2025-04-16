import './button.css'

interface ButtonProps {
  title: string
  onClick?: () => void
  className?: string
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`base-button ${props.className}`}
    >
      {props.title}
    </button>
  )
}

export default Button
