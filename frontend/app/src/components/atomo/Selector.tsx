import { Select, Option, OptionGroup } from "@yamada-ui/react"

interface SelectItem {
    label: string
    value: string
}

interface SelectorProps {
    items: SelectItem[]
    placeholder: string
    onChange: (value: string) => void
}

export const Selector = (props: SelectorProps) => {
    const { items, placeholder, onChange } = props
return(
    <Select size="sm" placeholder={placeholder} items={items} />
)
}