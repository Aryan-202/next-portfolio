export interface NavLink {
    name: string;
    href: string;
    description?: string;
    icon?: React.ReactNode;
    sublinks?: NavLink[];
}
