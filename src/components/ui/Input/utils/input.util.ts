export function getBorderRadius(radius: string) {
    const radiusMap: Record<string, string> = {
        full: 'rounded-full',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        lg: 'rounded-lg',
        md: 'rounded-md',
        sm: 'rounded-sm',
        default: 'rounded-none',
    };

    return radiusMap[radius] ? radiusMap[radius] : radiusMap.default;
}
