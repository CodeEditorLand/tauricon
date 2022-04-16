import*as e from"fs-extra";import n from"imagemin";import t from"imagemin-optipng";import r from"imagemin-zopfli";import o from"is-png";import i,{resolve as a,dirname as c}from"path";import*as s from"png2icons";import{readChunk as u}from"read-chunk";import l from"sharp";import f from"chalk";import p from"ms";import{createRequire as d}from"module";function h(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))}function g(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var v,b,m=function(e,n){return void 0===n&&(n=f.green),function(t){var r=+new Date,o=r-(v||r);v=r,t?console.log(" ".concat(n(String(e))," ").concat(t," ").concat(f.green("+".concat(p(o))))):console.log()}},x=m("tauri",f.red),w=d(import.meta.url)("glob"),y=function(){var e,n=null!==(e=process.env.__TAURI_TEST_APP_DIR)&&void 0!==e?e:process.cwd(),t=w.sync("**/tauri.conf.json",{cwd:n,ignore:["**/node_modules/**","**/target/**"]});return 0===t.length?(x("Couldn't recognize the current folder as a part of a Tauri project. It must contain a `tauri.conf.json` file in any subfolder."),process.exit(1),""):c(a(n,t[0]))},_=null!==(b=function(){var e,n=null!==(e=process.env.__TAURI_TEST_APP_DIR)&&void 0!==e?e:process.cwd(),t=w.sync("**/package.json",{cwd:n,ignore:["**/node_modules/**","**/target/**"]});return 0===t.length?null:c(a(n,t[0]))}())&&void 0!==b?b:a(y(),".."),k=y(),z={background_color:"#000074",theme_color:"#02aa9b",sharp:"kernel: sharp.kernel.lanczos3",minify:{batch:!1,overwrite:!0,available:["optipng","zopfli"],type:"optipng",optipngOptions:{optimizationLevel:4,paletteReduction:!0},zopfliOptions:{transparent:!0,more:!0}},splash_type:"generate",tauri:{linux:{folder:".",prefix:"",infix:!0,suffix:".png",sizes:[32,128]},linux_2x:{folder:".",prefix:"128x128@2x",infix:!1,suffix:".png",sizes:[256]},defaults:{folder:".",prefix:"icon",infix:!1,suffix:".png",sizes:[512]},appx_logo:{folder:".",prefix:"StoreLogo",infix:!1,suffix:".png",sizes:[50]},appx_square:{folder:".",prefix:"Square",infix:!0,suffix:"Logo.png",sizes:[30,44,71,89,107,142,150,284,310]}}},R=e.default,S=R.access,I=R.ensureDir,T=R.ensureFileSync,E=R.writeFileSync,j=d(import.meta.url),O=j("../package.json").version,B=j("png-to-ico"),F=m("app:spawn"),P=m("app:spawn",f.red),A=!1,C=null,D=function(e){return h(this,void 0,void 0,(function(){return g(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,S(e)];case 1:return n.sent(),[2,!0];case 2:return n.sent(),[2,!1];case 3:return[2]}}))}))},q=function(e){return h(void 0,void 0,void 0,(function(){var n,t;return g(this,(function(r){switch(r.label){case 0:return!1===A?[3,1]:[2,A];case 1:return[4,D(e)];case 2:return r.sent()?[3,3]:(A=!1,C&&clearInterval(C),P("[ERROR] Source image for tauricon not found"),process.exit(1),[3,8]);case 3:return[4,u(e,{startPosition:0,length:8})];case 4:return n=r.sent(),o(n)||".svg"===i.extname(e)?[4,(A=l(e)).metadata()]:[3,7];case 5:return(t=r.sent()).hasAlpha&&4===t.channels||(C&&clearInterval(C),P("[ERROR] Source image for tauricon is not transparent"),process.exit(1)),[4,A.stats()];case 6:return r.sent().isOpaque&&(C&&clearInterval(C),P("[ERROR] Source image for tauricon could not be detected as transparent"),process.exit(1)),[2,A];case 7:A=!1,C&&clearInterval(C),P("[ERROR] Source image for tauricon is not a png or svg file"),process.exit(1),r.label=8;case 8:return[2]}}))}))},L=function(e){var n=[];for(var t in e){var r=e[String(t)];r.folder&&n.push(r.folder)}return n=n.sort().filter((function(e,n,t){return!n||e!==t[n-1]}))},M=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,n,t,r){return n+n+t+t+r+r}));var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:void 0},N=function(e,n){return h(void 0,void 0,void 0,(function(){return g(this,(function(t){switch(t.label){case 0:return void 0===n?[3,2]:[4,I(n)];case 1:t.sent(),t.label=2;case 2:return[4,q(e)];case 3:return[2,t.sent()]}}))}))},U=function(e){process.stdout.write("  ".concat(e,"                       \r"))},$={validate:function(e,n){return h(this,void 0,void 0,(function(){return g(this,(function(t){switch(t.label){case 0:return[4,N(e,n)];case 1:return t.sent(),[2,"object"==typeof A]}}))}))},version:function(){return O},make:function(e,n,t,r){return void 0===n&&(n=i.resolve(k,"icons")),h(this,void 0,void 0,(function(){return g(this,(function(o){switch(o.label){case 0:return e||(e=i.resolve(_,"app-icon.png")),console.log(e),console.log(n),C="CI"in process.env||process.argv.some((function(e){return"--ci"===e}))?null:setInterval((function(){process.stdout.write("/ \r"),setTimeout((function(){process.stdout.write("- \r"),setTimeout((function(){process.stdout.write("\\ \r"),setTimeout((function(){process.stdout.write("| \r")}),100)}),100)}),100)}),500),r=r||z.tauri,U('Building Tauri icns and ico from "'.concat(e,'"')),[4,this.validate(e,n)];case 1:return o.sent(),[4,this.icns(e,n,r,t)];case 2:return o.sent(),U("Building Tauri png icons"),[4,this.build(e,n,r)];case 3:return o.sent(),t?(U("Minifying assets with ".concat(t)),[4,this.minify(n,r,t,"batch")]):[3,5];case 4:return o.sent(),[3,6];case 5:F("no minify strategy"),o.label=6;case 6:return U("Tauricon Finished"),C&&clearInterval(C),[2,!0]}}))}))},build:function(e,n,t){return h(this,void 0,void 0,(function(){var r,o,a,c,s,u,f,p,d,v,b,m,x,w,y,_,k,z;return g(this,(function(R){switch(R.label){case 0:return[4,this.validate(e,n)];case 1:for(s in R.sent(),r=l(e),o=function(e){return h(this,void 0,void 0,(function(){var n,o,i;return g(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),n=r.resize(e[1],e[1]),e[2]&&(o=M(t.background_color)||{r:void 0,g:void 0,b:void 0},n.flatten({background:{r:o.r,g:o.g,b:o.b,alpha:1}})),n.png(),[4,n.toFile(e[0])];case 1:return a.sent(),[3,3];case 2:return i=a.sent(),P(i),[3,3];case 3:return[2]}}))}))},c=L(t))u=c[Number(s)],I("".concat(n).concat(i.sep).concat(u));for(p in f=[],t)f.push(p);d=0,R.label=2;case 2:if(!(d<f.length))return[3,7];for(x in v=f[d],b=t[String(v)],m=[],b.sizes)m.push(x);w=0,R.label=3;case 3:return w<m.length?(y=m[w],_=b.sizes[String(y)],b.splash?[3,5]:(k="".concat(n,"/").concat(b.folder),a=!0===b.infix?"".concat(k).concat(i.sep).concat(b.prefix).concat(_,"x").concat(_).concat(b.suffix):"".concat(k).concat(i.sep).concat(b.prefix).concat(b.suffix),z=[a,_,b.background],[4,o(z)])):[3,6];case 4:R.sent(),R.label=5;case 5:return w++,[3,3];case 6:return d++,[3,2];case 7:return[2]}}))}))},splash:function(e,n,t,r){return h(this,void 0,void 0,(function(){var o,a,c,s,u,f,p,d,h,v,b,m,x,w,y,_,k;return g(this,(function(g){switch(g.label){case 0:return a=!1,c=M(r.background_color)||{r:void 0,g:void 0,b:void 0},n===e&&(a=!0),a||"generate"===r.splashscreen_type?[4,this.validate(e,t)]:[3,2];case 1:return g.sent(),A||process.exit(1),(s=l(e)).extend({top:726,bottom:726,left:726,right:726,background:{r:c.r,g:c.g,b:c.b,alpha:1}}).flatten({background:{r:c.r,g:c.g,b:c.b,alpha:1}}),[3,3];case 2:if("overlay"===r.splashscreen_type)s=l(n).flatten({background:{r:c.r,g:c.g,b:c.b,alpha:1}}).composite([{input:e}]);else{if("pure"!==r.splashscreen_type)throw new Error("unknown options.splashscreen_type: ".concat(r.splashscreen_type));s=l(n).flatten({background:{r:c.r,g:c.g,b:c.b,alpha:1}})}g.label=3;case 3:return[4,s.toBuffer()];case 4:for(p in u=g.sent(),f=[],r)f.push(p);d=0,g.label=5;case 5:if(!(d<f.length))return[3,11];for(m in h=f[d],v=r[String(h)],b=[],v.sizes)b.push(m);x=0,g.label=6;case 6:return x<b.length?(w=b[x],y=v.sizes[String(w)],v.splash?(_="".concat(t).concat(i.sep).concat(v.folder),[4,I(_)]):[3,9]):[3,10];case 7:return g.sent(),o=!0===v.infix?"".concat(_).concat(i.sep).concat(v.prefix).concat(y,"x").concat(y).concat(v.suffix):"".concat(_).concat(i.sep).concat(v.prefix).concat(v.suffix),k=[o,y],[4,l(u).resize(k[1][0],k[1][1]).toFile(k[0])];case 8:g.sent(),g.label=9;case 9:return x++,[3,6];case 10:return d++,[3,5];case 11:return[2]}}))}))},minify:function(e,o,a,c){return h(this,void 0,void 0,(function(){var s,u,l,f,p,d,v,b,m,x=this;return g(this,(function(w){switch(w.label){case 0:switch((u=z.minify).available.find((function(e){return e===a}))||(a=u.type),a){case"optipng":s=t(u.optipngOptions);break;case"zopfli":s=r(u.zopfliOptions);break;default:throw new Error("unknown strategy"+a)}switch(l=function(e,t){return h(x,void 0,void 0,(function(){return g(this,(function(r){switch(r.label){case 0:return[4,n([e[0]],{destination:e[1],plugins:[t]}).catch((function(e){P(e)}))];case 1:return r.sent(),[2]}}))}))},c){case"singlefile":return[3,1];case"batch":return[3,3]}return[3,8];case 1:return[4,l([e,i.dirname(e)],s)];case 2:return w.sent(),[3,9];case 3:for(d in f=L(o),p=[],f)p.push(d);v=0,w.label=4;case 4:return v<p.length?(b=p[v],m=f[Number(b)],F("batch minify:"+String(m)),[4,l(["".concat(e).concat(i.sep).concat(m).concat(i.sep,"*.png"),"".concat(e).concat(i.sep).concat(m)],s)]):[3,7];case 5:w.sent(),w.label=6;case 6:return v++,[3,4];case 7:return[3,9];case 8:P("[ERROR] Minify mode must be one of [ singlefile | batch]"),process.exit(1),w.label=9;case 9:return[2,"minified"]}}))}))},icns:function(e,n,t,r){var o,a;return h(this,void 0,void 0,(function(){var t,r,c,u,f,p,d,h;return g(this,(function(g){switch(g.label){case 0:return g.trys.push([0,9,,10]),A||process.exit(1),[4,this.validate(e,n)];case 1:return g.sent(),[4,(t=l(e)).metadata()];case 2:return r=g.sent(),[4,t.toBuffer()];case 3:return c=g.sent(),u=void 0,r.width===r.height?[3,5]:(f=Math.min(null!==(o=r.width)&&void 0!==o?o:256,null!==(a=r.height)&&void 0!==a?a:256),[4,t.resize(f,f).toBuffer()]);case 4:return u=g.sent(),[3,7];case 5:return[4,t.toBuffer()];case 6:u=g.sent(),g.label=7;case 7:if(null===(p=s.createICNS(c,s.BICUBIC,0)))throw new Error("Failed to create icon.icns");return T(i.join(n,"/icon.icns")),E(i.join(n,"/icon.icns"),p),[4,B(u)];case 8:if(null===(d=g.sent()))throw new Error("Failed to create icon.ico");return T(i.join(n,"/icon.ico")),E(i.join(n,"/icon.ico"),d),[3,10];case 9:throw h=g.sent(),console.error(h),h;case 10:return[2]}}))}))}};export{$ as default};
