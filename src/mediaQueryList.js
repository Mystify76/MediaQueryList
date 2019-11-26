export class MediaQueryList {
  constructor(matchMedia) {
    this._mql = window.matchMedia(matchMedia);
  };

  get matches() {
    return this._mql.matches;
  }

  get media() {
    return this._mql.media;
  }

  addListener = (callback) => {
    try {
      this._mql.addEventListener('change', callback);
    } catch (err) {
      this._mql.addListener(callback);
    }
  };

  removeListener = (callback) => {
    try {
      this._mql.removeEventListener('change', this.mediaQueryChanged);
    } catch (err) {
      this._mql.removeListener(this.mediaQueryChanged);
    }
  };
}
