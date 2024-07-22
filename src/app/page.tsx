'use client';

import { classNames } from '@/app/lib/ClassNames';
import { Hero } from '@/app/components/Hero';
import { Notes } from '@/app/components/Notes';
import cls from './page.module.scss';

export default function Home() {
    return (
        <>
            <Hero/>
            <Notes/>
        </>
    );
}
