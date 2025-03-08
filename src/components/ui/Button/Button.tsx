import {Pressable, Text} from 'react-native';
import {
    EButtonType,
    TButtonProps,
} from '@/components/ui/Button/type/button.type.ts';
import {cn} from '@/utils/global.utils.ts';

const buttonStyles: Record<string, string> = {
    [EButtonType.PRIMARY]: 'bg-primary',
};

function Button({
    label,
    rightSection,
    leftSection,
    type,
    ...props
}: TButtonProps) {
    return (
        <Pressable
            {...props}
            className={cn(
                'w-full text-center p-3 rounded-lg h-12 max-h-12 flex flex-row items-center justify-center gap-2 transition-all hover:cursor-pointer active:opacity-70',
                buttonStyles[type || EButtonType.PRIMARY],
            )}>
            {leftSection && leftSection}
            <Text className="text-center text-white font-semibold">
                {label}
            </Text>
            {rightSection && rightSection}
        </Pressable>
    );
}

export default Button;
