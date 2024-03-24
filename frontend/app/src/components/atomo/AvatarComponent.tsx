import { Avatar, AvatarBadge, AvatarGroup } from "@yamada-ui/react"

interface AvatarProps {
    name: string
}

export const AvatarComponent = (props: AvatarProps) => {
    const { name } = props
    return (
        <Avatar name={name} />
    )
}