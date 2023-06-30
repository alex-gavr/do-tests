'use client';

import Button from '@components/Button/Button';
import getVignetteData from '@utils/Vignette/getVignetteData';
import getExitLinkWithMediation from '@utils/ipp/getExitLinkWithMediation';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';

interface IButtonForTestingProps {}

const ButtonForTesting = ({}: IButtonForTestingProps) => {
  const handleClick = () => {
    const result = makeExitUrl(42069, ExitType.onclick)
    console.log(result);
  };

  const handleClickIpp = async () => {

    const onclick = makeExitUrl(42069, ExitType.onclick)
    const ipp = await getExitLinkWithMediation(5972907, 5874453)
    const vignette = await getVignetteData('5959144')
    console.log('onclick', onclick);
    console.log('ipp', ipp);
    console.log('vignette', vignette?.click);
  }

  return (
    <Button type='button' variant={'secondary'} onClick={handleClickIpp} to='backButton'>
      TEST
    </Button>
  );
};

export default ButtonForTesting;
