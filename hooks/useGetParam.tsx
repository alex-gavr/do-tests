import { useSearchParams } from 'next/navigation';

export const useGetParam = (param: string) => {
  const searchParams = useSearchParams();
  const paramValue = searchParams.get(param);
  const valueString = paramValue ? paramValue : '0';
  const valueNumber = paramValue ? parseInt(paramValue) : 0;
  return {
    valueNumber,
    valueString,
  };
};
