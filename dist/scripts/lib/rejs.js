define(["text","ejs"],function(n,e){"use strict";function t(n,e,t,o){function r(n){return n.match(u)?c(n,r):void t(n)}function c(e,t){i(n,e,t,o)}c(e,r)}function i(e,t,i,o){function c(u){var f;f=e.toUrl(l[u][1]+"."+r),n.get(f,function(n){t=t.replace(l[u][0],n),u++,u===l.length?i.call(o,t):c(u)})}var l,f,s;for(s=0,l=[];f=u.exec(t);)l.push(f);l.length?c(s):i.call(o,t)}var o,r,u,c,l;return r="ejs",u=new RegExp(/\<\%\sinclude\s(\S+)\s\%\>/g),c={},l='define("<%= plugin %>!<%= module %>", ["ejs"], function(e) { return e.compile(<%- template %>); }); \n',o={version:"0.3",write:function(n,t,i){var o;c.hasOwnProperty(t)&&(o=e.render(l,{plugin:n,module:t,template:c[t]}),i(o))},load:function(i,o,u,l){var f;f=o.toUrl(i+"."+r),n.get(f,function(n){t(o,n,function(n){l.isBuild&&(c[i]=JSON.stringify(n)),u(e.compile(n))},this)})}}});