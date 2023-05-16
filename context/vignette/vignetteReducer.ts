import { TVignetteActions, VignetteActionTypes } from './vignetteActionsType';
import { IVignetteInitialState } from './vignetteStateType';

const vignetteReducer = (state: IVignetteInitialState, action: TVignetteActions): IVignetteInitialState => {
  const { type } = action;

  switch (type) {
    case VignetteActionTypes.setVignetteData: {
      const { payload } = action;

      return {
        ...state,
        banner_id: payload.banner_id,
        title: payload.title,
        text: payload.text,
        icon: payload.icon,
        click: payload.click,
        impression_url: payload.impression_url,
      };
    }
    case VignetteActionTypes.resetVignetteData: {
      // const { payload } = action;

      return {
        ...state,
        banner_id: null,
        title: null,
        text: null,
        icon: null,
        click: null,
        impression_url: null,
      };
    }
    case VignetteActionTypes.openVignette: {
      // const { payload } = action;

      return {
        ...state,
        isOpen: true,
      };
    }
    case VignetteActionTypes.closeVignette: {
      // const { payload } = action;

      return {
        ...state,
        isOpen: false,
      };
    }

    default:
      return state;
  }
};

export default vignetteReducer;
