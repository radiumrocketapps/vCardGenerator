// @flow
import {
  CREATE_QR_CODE,
  DELETE_QR_CODE,
} from './const';

import type { 
  CreateQrCode as CreateQrCodeType,
  QrData,
  DeleteQrCode,
} from './types'

export const createQrCode = (data: QrData): CreateQrCodeType => ({
  type: CREATE_QR_CODE,
  payload: data,
});

export const deleteQrCode = (id: $PropertyType<QrData, 'id'>): DeleteQrCode => ({
  type: DELETE_QR_CODE,
  payload: id,
});
