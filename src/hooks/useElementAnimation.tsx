import { useEffect, useRef } from 'react';

export function useElementAnimation() {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries[0].isIntersecting && entries[0].target.classList.add('visible');
                console.log(entries);
            },
            {
                threshold: 0.2,
            }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.unobserve(ref.current);
    }, [ref]);
    return ref;
}
