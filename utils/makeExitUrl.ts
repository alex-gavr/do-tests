const makeExitUrl = (zone: number) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  return `${domain}/${zone}/?var={zone}&ymid={request_var}`;
};
export default makeExitUrl;
