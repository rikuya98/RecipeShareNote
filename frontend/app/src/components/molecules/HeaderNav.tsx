import { SearchForm } from "./SearchForm";
import { AvatarComponent } from "../atomo/AvatarComponent";
import { Selector} from "../atomo/Selector";
import { Flex, Spacer, Box} from "@yamada-ui/react"
import { ActionButton } from "../atomo/ActionButton";

interface HeaderNavProps {
    onChange: (value: string) => void;
    onClick: () => void;
    onSelect: (value: string) => void;
}

export const HeaderNav = (props: HeaderNavProps) => {
    const { onChange, onClick, onSelect } = props;
    const items = [
        { label: "大おかず", value: "大おかず" },
        { label: "小おかず", value: "小おかず" },
        { label: "揚げ物", value: "揚げ物" },
        { label: "スチコン", value: "スチコン" },
        { label: "ごはん", value: "ごはん"}
    ]
    return (
        <>
        <Box>
        <Flex>
        <Box padding="sm" margin="sm" >
        <AvatarComponent name="ロゴ" src="RecipeShareNote/frontend/app/image/logo.png" />
        </Box>
        <Spacer />
        <SearchForm placeholder="レシピを検索" onChange={onChange} onClick={onClick} />
        <Box margin="sm" padding="sm">
        <Selector placeholder="カテゴリ検索" items={items} onChange={onSelect} />
        </Box>
        <Box margin="sm" padding="sm">
        <ActionButton ButtonName="レシピ投稿" onClick={onClick} />
        </Box>
        </Flex>
        </Box>
        </>
    );
}