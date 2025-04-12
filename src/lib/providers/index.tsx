import NextIntl from './next-intl-provider';

interface ProvidersWrapperProps {
  children: React.ReactNode;
  locale: string;
}

export default function ProvidersWrapper({
  children,
  locale,
}: ProvidersWrapperProps) {
  return <NextIntl locale={locale}>{children}</NextIntl>;
}
