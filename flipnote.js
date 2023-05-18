
  /**
   * Implementation of the `HTMLVideoElement` [https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestPictureInPicture](requestPictureInPicture) method. Not currently working, only a stub.
   * @category HTMLVideoElement compatibility
   */
  requestPictureInPicture() {
    throw new Error('Not implemented');
  }

  /**
   * Implementation of the `HTMLVideoElement` [https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/captureStream](captureStream) method. Not currently working, only a stub.
   * @category HTMLVideoElement compatibility
   */
  captureStream() {
    throw new Error('Not implemented');
  }


  /**
   * Fired when animation playback begins or is resumed
   * @category playback
   * @event play
   */
  onplay: () => void;

  /**
   * Fired when animation playback is paused
   * @category playback
   * @event pause 
   */
  onpause: () => void;
