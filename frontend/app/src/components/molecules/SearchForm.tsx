import { ActionButton } from "../atomo/ActionButton";
import { InputComponent } from "../atomo/Input";
import { Box } from "@yamada-ui/react";

interface SearchFormProps {
    placeholder: string;
    onChange: (value: string) => void;
    onClick: () => void;
}

export const SearchForm = (props: SearchFormProps) => {
    const { placeholder, onChange, onClick } = props;
    return (
        <Box display="flex" p="sm" m="sm" gap="sm">
            <InputComponent placeholder={placeholder} onChange={onChange} />
            <ActionButton onClick={onClick} ButtonName="検索" />
        </Box>
    );
}
