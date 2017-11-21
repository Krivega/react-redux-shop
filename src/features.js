/**
 * @description Feature detection helpers
 */

const MAX_PHONE_WIDTH = 479;
const MAX_TABLET_WIDTH = 839;

export default {
  /**
   * Phone device flag
   * @return {Boolean}
   */
  isPhone() {
    const width = window.innerWidth;
    return width <= MAX_PHONE_WIDTH;
  },

  /**
   * Tablet device flag
   * @return {Boolean}
   */
  isTablet() {
    const width = window.innerWidth;
    return width > MAX_PHONE_WIDTH && width <= MAX_TABLET_WIDTH;
  },

  /**
   * Desktop device flag
   * @return {Boolean}
   */
  isDesktop() {
    const width = window.innerWidth;
    return width > MAX_TABLET_WIDTH;
  },

  /**
   * Mobile device flag
   * @return {Boolean}
   */
  isMobile() {
    return this.isTablet() || this.isPhone();
  },

  /**
   * Returns 'true' if supported touch-events in device
   * @return {Boolean}
   */
  isTouchDevice() {
    return !!('ontouchstart' in window || navigator.maxTouchPoints);
  }
};
