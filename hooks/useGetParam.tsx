import { useSearchParams } from 'next/navigation';

export const useGetParam = (param: string) => {
  const searchParams = useSearchParams();
  const paramValue = searchParams.get(param);
  const valueString = paramValue === null ? 'default' : paramValue;
  const valueNumber = paramValue === null ? 'default' : parseInt(paramValue);
  return {
    valueNumber,
    valueString,
  };
};