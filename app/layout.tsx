import React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
    title: 'TimeTravel Agency | The Future Has a Past',
    description: 'Experience history firsthand with our luxury time-travel expeditions. Paradox prevention guaranteed.',
    generator: 'v0.app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`font-sans antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
