/**
 * skylark-domx-placeholders - The skylark placeholders library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-domx-noder","skylark-domx-data","./placeholders"],function(e,a,r,o){return o.remove=function(e){var o=r.data(elm,"placeholder");o&&(a.remove(o),r.removeData(elm,"placeholder"))}});
//# sourceMappingURL=sourcemaps/remove.js.map
