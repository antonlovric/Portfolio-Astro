import { useEffect, useRef } from 'react';
interface IOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

export function useElementAnimation(props?: IOptions) {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries[0].isIntersecting && entries[0].target.classList.add('visible');
                console.log(entries);
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
