export enum VignetteActionTypes {
  setVignetteData = 'setVignetteData',
  resetVignetteData = 'resetVignetteData',
  openVignette = 'openVignette',
  closeVignette = 'closeVignette'
}

export interface ISetVignetteData {
  type: VignetteActionTypes.setVignetteData;
  payload: {
    banner_id: number | null;
    title: string | null;
    text: string | null;
    icon: string | null;
    click: string | null;
    impression_url: string | null;
  };
}
export interface IResetVignetteData {
  type: VignetteActionTypes.resetVignetteData;
}
export interface IOpenVignette {
  type: VignetteActionTypes.openVignette;
}
export interface ICloseVignette {
  type: VignetteActionTypes.closeVignette;
}

export type TVignetteActions = ISetVignetteData | IResetVignetteData | IOpenVignette | ICloseVignette;
