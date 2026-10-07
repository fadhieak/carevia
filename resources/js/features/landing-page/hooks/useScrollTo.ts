import { useCallback } from 'react';

export function useScrollTo() {
    const scrollToSection = useCallback((targetId: string, offset = 80) => {
        const id = targetId.startsWith('#') ? targetId.slice(1) : targetId;
        const element = document.getElementById(id);

        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    }, []);

    return { scrollToSection };
}
