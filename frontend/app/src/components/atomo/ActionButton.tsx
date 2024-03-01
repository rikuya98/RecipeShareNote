import { Button } from '@yamada-ui/react';

interface ActionButtonProps {
    onClick?: () => void;
    ButtonName: string;
}

export const ActionButton = (props: ActionButtonProps) => {
    const { onClick, ButtonName} = props;
    return (
        <Button size="sm">
        {ButtonName}
        </Button>
    );
}