/**
 * skylark-domx-placeholders - The skylark placeholders library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-data"],function(e,t,a){const l="placeholder-style";function n(){return n}return t.mixin(n,{saveStyle:function(e){a.data(e,l,e.style.cssText)},restoreStyle:function(e){e.style.cssText=element.data(l)||"",a.removeData(e,l)}}),e.attach("domx.placeholders",n)});
//# sourceMappingURL=sourcemaps/placeholders.js.map
