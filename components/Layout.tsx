import { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title = 'Nitesh Bisht | Software Engineer' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Nitesh Bisht - Software Engineer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-white text-gray-900 font-sans">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10">
          {children}
        </div>
      </div>
    </>
  );
}