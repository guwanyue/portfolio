const path = require("path");

module.exports = function imgSize(src, size = '2800', format = 'jpeg') {
  const extension = path.extname(src);
  const name = path.basename(src, extension);
  const work = path.basename(path.dirname(src));
  const name_ = path.join(work, name);
  /**
   * A path directory for the <img src> attribute
   * e.g. /img/ for <img src="/img/MY_IMAGE.jpeg">
   */
  const dirname = "/assets/images/";
  return `${dirname}${name_}.${extension}`;
};
