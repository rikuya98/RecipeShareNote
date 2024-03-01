import { Avatar, AvatarBadge, AvatarGroup } from "@yamada-ui/react"

interface AvatarProps {
    src: string
    name: string
}

export const AvatarComponent = (props: AvatarProps) => {
    const { src, name } = props
    return (
        <Avatar size="sm" name={name} src={src} />
    )
}