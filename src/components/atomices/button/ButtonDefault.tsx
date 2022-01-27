import React, { ButtonHTMLAttributes, PropsWithChildren, useMemo } from "react"

type TPropsButtonDefault = {
  size?: "sm" | "md" | "lg"
  pattern?: "text" | "fill" | "outline"
} & ButtonHTMLAttributes<HTMLButtonElement>

function ButtonDefault({
  size = "md",
  pattern = "text",
  children,
  ...props
}: PropsWithChildren<TPropsButtonDefault>) {
  const sizeButtonClass = {
    sm: "p-2",
    md: "p-4",
    lg: "p-6"
  }

  const patternClass = {
    fill: "bg-blue-400",
    text: "bg-transparent",
    outline: "bg-transparent border"
  }

  return (
    <button
      {...props}
      className={`
    ${sizeButtonClass[size]}

    ${patternClass[pattern]}

    `}>
      {children ? children : "Clicked"}
    </button>
  )
}

export default ButtonDefault
