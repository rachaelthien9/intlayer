import { cn } from '@utils/cn';
import type { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export type PageContentLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  footer?: ReactNode;
  navbar?: ReactNode;
  overlay?: ReactNode;
};

export const PageContentLayout: FC<PageContentLayoutProps> = ({
  navbar,
  children,
  footer,
  overlay,
  className,
  ...props
}) => (
  <div className="flex-0 flex h-full flex-col">
    {navbar ?? <Navbar />}
    <main
      className={cn('z-0 flex w-full flex-1 flex-col', className)}
      {...props}
    >
      {children}
    </main>

    <div className="flex-0 z-0 flex w-full flex-col">
      {footer ?? <Footer />}
    </div>
  </div>
);
