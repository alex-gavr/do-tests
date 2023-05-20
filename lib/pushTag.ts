const initPushTag = (pushZone: number): void => {
  const $pushScript: HTMLScriptElement = document.createElement('script');
  const url: URL = new URL(window.location.href);
  const urlS: string | null = url.searchParams.get('s');
  const urlZ: string | null = url.searchParams.get('z');
  const urlVar: string | null = url.searchParams.get('var');

  $pushScript.onload = (result): void => {
    switch (result as any) {
      case 'onPermissionDefault':
        break;

      case 'onPermissionAllowed':
        break;

      case 'onPermissionDenied':
        break;

      case 'onAlreadySubscribed':
        break;

      case 'onNotificationUnsupported':
        break;

      default:
        break;
    }
  };

  if (pushZone) {
    $pushScript.src = 
    `//uwoaptee.com/pfe/current/micro.tag.min.js?z=${pushZone}&sw=/sw-check-permissions.js&var=${urlZ}&var_3=${urlS}&ymid=${urlVar}`;

    document.head.appendChild($pushScript);
  }
};

export default initPushTag;


