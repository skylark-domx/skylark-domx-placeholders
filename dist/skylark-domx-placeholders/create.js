/**
 * skylark-domx-placeholders - The skylark placeholders library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-domx-styler","skylark-domx-noder","skylark-domx-geom","./placeholders"],function(e,i,t,s){return s.create=function(s){var a,o=e.css(s,"position"),n=t.relativePosition(s);return e.css(s,e.css(s,["marginTop","marginBottom","marginLeft","marginRight"])),t.size(s,t.size(s)),/^(static|relative)/.test(o)&&(o="absolute",a=i.createElement(s.nodeName),e.css(a,{display:/^(inline|ruby)/.test(e.css(s,"display"))?"inline-block":"block",visibility:"hidden"}),e.css(a,e.css(s,["marginTop","marginBottom","marginLeft","marginRight","float"])),datax.data(s,"placeholder",a),t.size(a,t.size(s)),i.after(s,a)),e.css(s,{position:o,left:n.left,top:n.top}),a}});
//# sourceMappingURL=sourcemaps/create.js.map
