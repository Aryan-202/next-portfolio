export interface NavLink {
    name: string;
    href: string;
    description?: string;
    icon?: any;
    sublinks?: NavLink[];
}
