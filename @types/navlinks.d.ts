export interface NavLink {
    name: string;
    href: string;
    description?: string;
    icon?: React.FC<{ className?: string }>;
    sublinks?: NavLink[];
}
