import {
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    InputLeftElement,
    InputRightElement,
  } from "@yamada-ui/react"

interface InputProps {
    placeholder: string
    onChange: (value: string) => void
}

export const InputComponent = (props: InputProps) => {
    const { placeholder, onChange } = props
    return (
        <Input size="sm" placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    )
}