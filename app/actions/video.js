import * as api from '../api';
import {
   REQUEST_FILE,
   RECEIVE_FILE,
   requestFile } from '../services/ipcDispatcher';

export const UPLOAD_VIDEO_REQUEST = 'UPLOAD_VIDEO_REQUEST';
export const UPLOAD_VIDEO_SUCCESS = 'UPLOAD_VIDEO_SUCCESS';
export const UPLOAD_VIDEO_FAILURE = 'UPLOAD_VIDEO_FAILURE';

export const requestVideo = (videoPath) => {
  requestFile(videoPath);
  return ({
    type: REQUEST_FILE,
  });
};

export const receiveVideo = (video) => ({
  type: RECEIVE_FILE,
  video,
});