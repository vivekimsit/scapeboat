/**
 * Escape special characters in the given string to HTML entities.
 * @param {String} s
 * @return {String}
 */
module.exports = {
  escape: function escape(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/`/g, '&#96;');
  },


  /**
  * Unescape HTML entities to characters.
  * @param {String} s
  * @return {String}
  */
  unescape: function unescape(s) {
    return String(s)
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#96;/g, '`');
  }
};

//module.exports = {
  //escape: escape,
  //unescape: unescape
//};
