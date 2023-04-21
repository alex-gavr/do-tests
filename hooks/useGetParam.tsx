import { useSearchParams } from 'next/navigation';

export const useGetParam = (param: string) => {
  const searchParams = useSearchParams();
  const paramValue = searchParams.get(param);
  const valueString = paramValue ? paramValue : 'default';
  const valueNumber = paramValue ? parseInt(paramValue) : 'default';
  return {
    valueNumber,
    valueString,
  };
};
