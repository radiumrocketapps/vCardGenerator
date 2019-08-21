// @flow
import * as actions from './actions';
import { CREATE_QR_CODE, DELETE_QR_CODE } from './const'

export type State = {
  list: Array<QrData>;
};

export type QrData = {
  id: string;
  description: string;
  name: string;
  emailAddress: string;
  phoneNumber: number;
  Company: string;
  Title: string;
  Address: string;
  Country: string;
};

export type CreateQrCode = {|
  type: typeof CREATE_QR_CODE,
  payload: QrData,
|};

export type DeleteQrCode = {|
  type: typeof DELETE_QR_CODE,
  payload: $PropertyType<QrData, "id">,
|};