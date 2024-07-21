'use client';

import { Inter } from 'next/font/google';
import './styles/index.scss';
import React from 'react';
import { WrapperLayout } from '@/app/components/layouts/WrapperLayout';
import { StoreProvider } from '@/app/components/Providers/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <WrapperLayout>
                    <StoreProvider>
                        {children}
                    </StoreProvider>
                </WrapperLayout>
            </body>
        </html>
    );
}
