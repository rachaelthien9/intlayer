import { LandingSection } from '@components/LandingSection';
import { PageLayout } from '@layouts/PageLayout';
import type { NextPageIntlayer } from 'next-intlayer';
import { generateMetadata } from './metadata';
export { generateMetadata };

const Page: NextPageIntlayer = ({ params: { locale } }) => (
  <PageLayout locale={locale}>
    <LandingSection />
  </PageLayout>
);
export default Page;
