import { useState, useEffect, useRef } from 'react';

// Hook personalizado para detectar cuando un elemento entra en viewport
export const useScrollReveal = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Opcional: dejar de observar después de que aparezca
                    if (options.once !== false) {
                        observer.unobserve(entry.target);
                    }
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px'
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return [elementRef, isVisible];
};

// Componente wrapper para animaciones de scroll
export const ScrollReveal = ({ 
    children, 
    animation = "fade-up", 
    delay = 0, 
    duration = 700,
    className = "",
    stagger = 0 
}) => {
    const [ref, isVisible] = useScrollReveal();

    const animationClasses = {
        "fade-up": {
            initial: "opacity-0 translate-y-8",
            animate: "opacity-100 translate-y-0"
        },
        "fade-down": {
            initial: "opacity-0 -translate-y-8",
            animate: "opacity-100 translate-y-0"
        },
        "fade-in": {
            initial: "opacity-0",
            animate: "opacity-100"
        },
        "fade-left": {
            initial: "opacity-0 -translate-x-8",
            animate: "opacity-100 translate-x-0"
        },
        "fade-right": {
            initial: "opacity-0 translate-x-8",
            animate: "opacity-100 translate-x-0"
        },
        "scale": {
            initial: "opacity-0 scale-90",
            animate: "opacity-100 scale-100"
        },
        "scale-up": {
            initial: "opacity-0 scale-75",
            animate: "opacity-100 scale-100"
        },
        "slide-up": {
            initial: "translate-y-12 opacity-0",
            animate: "translate-y-0 opacity-100"
        },
        "slide-down": {
            initial: "-translate-y-12 opacity-0",
            animate: "translate-y-0 opacity-100"
        },
        "rotate-in": {
            initial: "opacity-0 rotate-12",
            animate: "opacity-100 rotate-0"
        },
        "blur-in": {
            initial: "opacity-0 blur-sm",
            animate: "opacity-100 blur-0"
        }
    };

    const selectedAnimation = animationClasses[animation];

    return (
        <div
            ref={ref}
            className={`transform transition-all ease-out ${
                isVisible ? selectedAnimation.animate : selectedAnimation.initial
            } ${className}`}
            style={{ 
                transitionDelay: `${delay}ms`,
                transitionDuration: `${duration}ms`
            }}
        >
            {children}
        </div>
    );
};

// Componente especial para secciones completas
export const ScrollRevealSection = ({ 
    children, 
    className = "",
    staggerChildren = true,
    staggerDelay = 100 
}) => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`${className}`}
        >
            {staggerChildren 
                ? children.map((child, index) => (
                    <ScrollReveal 
                        key={index} 
                        delay={index * staggerDelay}
                        animation="fade-up"
                    >
                        {child}
                    </ScrollReveal>
                  ))
                : children
            }
        </div>
    );
};