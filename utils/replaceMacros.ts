export function replaceMacrosWithEmptyString(url: string): void {
  const regex = /{([^}]+)}/g;
  const hasMacros = regex.test(url);

  if (hasMacros) {
    const updatedURL = url.replace(regex, ' ');
    history.replaceState(null, '', updatedURL);
  }
}
export function hasMacros(url: string): boolean {
  const regex = /{([^}]+)}/g;
  return regex.test(url);
}