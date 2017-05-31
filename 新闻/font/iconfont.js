(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-erweima" viewBox="0 0 1024 1024">'+""+'<path d="M278.858 278.858h50.683v50.683h-50.683v-50.683z"  ></path>'+""+'<path d="M420.77 187.628h-233.142v233.142h91.23v40.546h50.683v-40.546h91.23v-50.684h40.546v-40.546h-40.546v-141.912zM370.087 370.087h-131.775v-131.775h131.775v131.775z"  ></path>'+""+'<path d="M278.858 694.458h50.683v50.683h-50.683v-50.683z"  ></path>'+""+'<path d="M694.458 278.858h50.683v50.683h-50.683v-50.683z"  ></path>'+""+'<path d="M512 507.913v54.77h50.683v-50.683h40.546v-50.683h-40.546v-40.546h-50.683v40.804z"  ></path>'+""+'<path d="M512 693.268v51.874h50.683v-91.231h40.546v-50.683h-91.23v43.7z"  ></path>'+""+'<path d="M562.683 745.142h40.546v40.546h-40.546v-40.546z"  ></path>'+""+'<path d="M461.317 785.688v50.683h101.366v-50.683h-47.903z"  ></path>'+""+'<path d="M653.912 653.912h-50.683v91.231h91.23v-50.684h-40.546z"  ></path>'+""+'<path d="M694.458 836.372h141.913v-50.683h-91.23v-40.546h-50.684v40.804z"  ></path>'+""+'<path d="M836.372 512v-50.683h-91.23v50.683h47.67z"  ></path>'+""+'<path d="M785.688 694.458h50.683v50.683h-50.683v-50.683z"  ></path>'+""+'<path d="M461.317 370.087h50.683v50.683h-50.683v-50.683z"  ></path>'+""+'<path d="M694.458 461.317v-40.546h141.913v-233.142h-233.142v50.683h-91.23v40.546h91.23v50.683h-40.547v40.546h40.547v50.683h50.683v40.546h40.547zM653.912 238.312h131.775v131.775h-131.775v-131.775z"  ></path>'+""+'<path d="M653.912 562.683h40.546v40.546h-40.546v-40.546z"  ></path>'+""+'<path d="M745.142 653.912h-50.684v40.546h91.231v-91.23h50.683v-40.546h-91.23v37.908z"  ></path>'+""+'<path d="M461.317 278.858h50.683v50.683h-50.683v-50.683z"  ></path>'+""+'<path d="M329.541 512h40.546v50.683h-40.546v-50.683z"  ></path>'+""+'<path d="M461.317 461.317h-91.231v50.683h50.684v50.683h40.546v-54.77z"  ></path>'+""+'<path d="M420.77 745.142v-91.231h40.546v-50.683h-182.459v-91.23h-91.23v50.683h50.683v40.546h-50.683v233.142h233.142v-50.683h40.546v-40.546h-40.546zM370.087 785.688h-131.775v-131.776h131.775v131.776z"  ></path>'+""+'<path d="M461.317 562.683h50.683v40.546h-50.683v-40.546z"  ></path>'+""+'<path d="M603.23 512h50.683v50.683h-50.683v-50.683z"  ></path>'+""+'<path d="M694.458 512h50.683v50.683h-50.683v-50.683z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-shouyeshouye" viewBox="0 0 1024 1024">'+""+'<path d="M877.061848 517.092004 512.010553 175.437046 146.959457 516.089283c-7.13796 6.66608-7.539088 17.874481-0.861216 25.012442 6.66608 7.13796 17.874481 7.539088 25.012442 0.861216l340.876486-318.08214 340.888278 319.049484c3.42148 3.197232 7.763336 4.77816 12.093201 4.77816 4.7192 0 9.438601-1.875928 12.919041-5.6042C884.565561 534.966485 884.199609 523.769876 877.061848 517.092004zM765.662177 524.112044c-9.768977 0-17.697401 7.928425-17.697401 17.697401l0 271.360817-141.579609 0L606.385167 624.39765l-188.772812 0 0 188.772812-141.579609 0L276.032746 541.809445c0-9.768977-7.916633-17.697401-17.697401-17.697401s-17.697401 7.928425-17.697401 17.697401l0 306.75562L453.007357 848.565065l0-188.772612 117.983008 0 0 188.772612 212.369414 0L783.359778 541.809445C783.359578 532.040469 775.431154 524.112044 765.662177 524.112044zM641.780169 270.448628l106.184607 0 0 94.386406c0 9.780769 7.928425 17.697401 17.697401 17.697401s17.697401-7.916633 17.697401-17.697401l0-129.781208-141.579609 0c-9.768977 0-17.697401 7.916633-17.697401 17.697401S632.011192 270.448628 641.780169 270.448628z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)