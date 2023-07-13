import DefaultAssessment from '@app/(defaultSurvey)/DefaultAssessment';
import { IServerProps } from '@app/page';
import { useServerSearchParams } from '@hooks/useServerSearchParams';
import { TDefaultDictionary } from '@i18n/0/en';
import { getDictionary } from '@i18n/i18n';

const Page = async ({ searchParams }: IServerProps) => {
  const { language, offerId } = useServerSearchParams(searchParams);

  const t = await getDictionary(offerId, language) as TDefaultDictionary;

  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-center gap-2'>
        {offerId === 0 && <DefaultAssessment t={t} />}
      </main>
    </>
  );
};

export default Page;
