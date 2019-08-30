// @flow
import type {
  State,
  CreateQrCode,
  DeleteQrCode,
  QrData,
} from './types';
import { CREATE_QR_CODE, DELETE_QR_CODE } from "./const";

const initialState: State = {
  list: []
};

type Actions =
  | CreateQrCode
  | DeleteQrCode

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {

    case CREATE_QR_CODE:
      return {
        list: [
          action.payload,
          ...state.list,
        ]
      };

    case DELETE_QR_CODE:
      const qrIndex = state.list.findIndex((item) => item.id === action.payload);
      const newList = [...state.list]
      if (qrIndex === -1) { return state }
      newList.splice(qrIndex, 1);
      return ({
        ...state,
        list: newList,
      });

    default:
      return state;

  }
};

export default reducer;
