import { Icon } from '@iconify/react';

interface Props {
    icon: string;
    width?: number | string;
    height?: number | string;
    color?: string;
}

const Iconify = ({ icon, width = 24, height = 24, color = 'inherit' }: Props) => <Icon icon={icon} width={width} height={height} color={color} />;

export default Iconify;
