export interface ICustomEventProperties {
  track: string;
  offerId: number | 'default';
  step?: number;
  totalSteps?: number;
  buttonText?: string | React.ReactNode;
  imgId?: string;
}


export const sendEvent = async ({
  track,
  offerId,
  step,
  totalSteps,
  buttonText,
  imgId,
}: ICustomEventProperties) => {
  if (typeof window !== 'undefined') {
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        track: track,
        offerId: offerId,
        step: step,
        totalSteps: totalSteps,
        buttonText: buttonText,
        imgId: imgId,
        url: window.location.href,
      }),
    });
  }
};
