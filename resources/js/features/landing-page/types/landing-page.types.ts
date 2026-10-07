export interface NavItem {
    label: string;
    href: string;
    badge?: string;
}

export interface ValueStripItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface ModuleItem {
    id: string;
    name: string;
    description: string;
    icon: string;
}

export interface WorkflowStep {
    stepNumber: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    details: string[];
}

export interface FooterLinkGroup {
    title: string;
    links: { label: string; href: string }[];
}
