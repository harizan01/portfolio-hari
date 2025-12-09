import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Section({ children, className, id }) {
    return (
        <section id={id} className={twMerge("py-24 px-6 relative", className)}>
            <div className="max-w-4xl mx-auto w-full relative z-10">
                {children}
            </div>
        </section>
    );
}
