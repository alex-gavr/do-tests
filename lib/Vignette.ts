export const Vignette = () => {
  const script = document.createElement('script');
  script.id = 'vignette';
  script.src = `http://glizauvo.net/401/5948180`;
  try {
    (document.body || document.documentElement).appendChild(script);
  } catch (e) {
    console.error(e);
  }
};
