import { useEffect, useRef } from 'react';
interface IOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

export function useFadeIn(props?: IOptions) {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries[0].isIntersecting && entries[0].target.classList.add('visible');
            },
            {
                ...props,
            }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.unobserve(ref.current);
    }, [ref]);
    return ref;
}
