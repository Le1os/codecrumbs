(window.webpackJsonpcodecrumbs=window.webpackJsonpcodecrumbs||[]).push([[8],{1151:function(e,t){e.exports={config:{sourceType:"module",plugins:["jsx","asyncGenerators","classProperties","classPrivateProperties","classPrivateMethods","doExpressions","dynamicImport","exportDefaultFrom","exportNamespaceFrom","functionBind","functionSent","importMeta","logicalAssignment","nullishCoalescingOperator","numericSeparator","objectRestSpread","optionalCatchBinding","optionalChaining","throwExpressions"]},getNodeLines:function(e){return[e.loc.start.line,e.loc.end.line]}}},1152:function(e,t,n){var r=n(1153);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(97)(r,o);r.locals&&(e.exports=r.locals)},1153:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".DependenciesTab {\n  height: 100%; }\n  .DependenciesTab .ant-collapse {\n    margin-left: -16px;\n    margin-right: -16px;\n    max-height: 100%;\n    overflow: auto; }\n",""])},1154:function(e,t,n){var r=n(1155);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(97)(r,o);r.locals&&(e.exports=r.locals)},1155:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".CrumbsTab {\n  height: 100%; }\n  .CrumbsTab .ant-collapse {\n    margin-left: -16px;\n    margin-right: -16px;\n    max-height: 100%;\n    overflow: auto; }\n",""])},1156:function(e,t,n){var r=n(1157);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(97)(r,o);r.locals&&(e.exports=r.locals)},1157:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".FlowChartLoading {\n  display: flex;\n  justify-content: center;\n  padding-top: 50px; }\n\n.FlowChartTabContainer {\n  position: relative;\n  height: 100%;\n  overflow: auto; }\n",""])},1158:function(e,t,n){var r=n(1159);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(97)(r,o);r.locals&&(e.exports=r.locals)},1159:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".SideBar {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 650px;\n  z-index: 4;\n  background-color: white;\n  border-left: 1px solid #ebedf0;\n  padding: 8px 16px; }\n  .SideBar .header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between; }\n    .SideBar .header .filePath {\n      display: flex; }\n      .SideBar .header .filePath .copyIcon {\n        margin-left: 5px; }\n  .SideBar .bodySideBar {\n    height: calc(100% - 25px);\n    position: relative; }\n    .SideBar .bodySideBar .ant-tabs {\n      height: 100%; }\n    .SideBar .bodySideBar .ant-tabs-content, .SideBar .bodySideBar .ant-tabs-tabpane {\n      height: calc(100% - 25px); }\n",""])},1175:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(139),i=n(22),c=n(142),l=n(25),s=(n(724),n(1169)),u=(n(465),n(471)),f=(n(729),n(1167)),d=n(10),p=n(491),m=n(95),h=n.n(m),b=n(732),y=n.n(b),v=n(915);n(994);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,E(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,o.a.Component),function(e,t,n){t&&C(e.prototype,t),n&&C(e,n)}(t,[{key:"fixScroll",value:function(){var e=this.props,t=e.dependenciesLines,n=void 0===t?[]:t,r=e.crumbedLines,o=void 0===r?[]:r;if(this.codeRef&&this.codeRef.scrollTo){var a=n.length?n:o.length?o:null;a&&this.codeRef.scrollTo(0,15*a[0][0]-5)}}},{key:"componentDidUpdate",value:function(e){this.fixScroll()}},{key:"componentDidMount",value:function(){this.fixScroll()}},{key:"render",value:function(){var e=this,t=this.props,n=t.code,r=t.crumbedLines,a=void 0===r?[]:r,i=t.dependenciesLines,c=void 0===i?[]:i,l=t.limitedHeight;return o.a.createElement("div",{className:h()("Code",{limitedHeight:l}),ref:function(t){return e.codeRef=t}},o.a.createElement(y.a,{language:"javascript",style:v.atomOneLight,showLineNumbers:!0,wrapLines:!0,customStyle:{fontSize:"12px"},lineProps:function(e){return S(a,e)?{className:"crumbedLine"}:S(c,e)?{className:"importedDependencyLine"}:{}}},n))}}]),t}(),S=function(e,t){return!!e.find(function(e){return e[0]===t&&e[1]===t||e[0]<=t&&e[1]>=t})},j=(n(548),n(587)),F=n(500),N=n(448),T=n(1151),k=T.config,B=T.getNodeLines,D=(n(1152),j.a.Panel),L=Object(a.b)(function(e,t){var n=Object(i.c)(e,t),r=n.filesMap,o=n.foldersMap;return{selectedNode:Object(i.e)(e,t).selectedNode,selectedDependencyEdgeNodes:Object(i.b)(e,t).selectedDependencyEdgeNodes,filesMap:r,foldersMap:o}})(function(e){var t=e.selectedNode,n=e.filesMap,r=e.foldersMap,a=e.selectedDependencyEdgeNodes,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter(function(e){return t.sources.find(function(t){var n=/\w/.exec(e.sourceFile),r=e.sourceFile.substr(n&&n.index);return-1!==t.indexOf(r)})}):[]}(t.importedDependencies,a);return o.a.createElement("div",{className:"DependenciesTab"},i.length?o.a.createElement(j.a,{bordered:!1,defaultActiveKey:["0","1"]},o.a.createElement(D,{header:t.path,key:"0"},o.a.createElement(x,{limitedHeight:!0,code:t.fileCode,dependenciesLines:i.map(function(e){return e.importNodeLines})})),i.map(function(e,t){var a=function(e,t,n){return n[e]&&(e+="/index"),t[e]?t[e]:t[Object.keys(t).find(function(t){return 0===t.indexOf(e)})]}(e.sourceFile,n,r);if(!a)return null;var i=function(e,t,n){var r={},o=[];try{r=F.parse(e,k);var a=!!t.find(function(e){return"ImportDefaultSpecifier"===e.type}),i=t.filter(function(e){return"ImportSpecifier"===e.type}).map(function(e){return e.name});return N.default(r,{enter:function(e){var t=e.node;a&&"ExportDefaultDeclaration"===t.type?o.push(t):"ExportNamedDeclaration"===t.type&&t.declaration&&t.declaration.declarations.find(function(e){return i.includes(e.id.name)})&&o.push(t)}}),o.map(B)}catch(e){return console.log(n,e),o}}(a.fileCode,e.specifiers,e.sourceFile);return o.a.createElement(D,{header:a.path,key:t+1},o.a.createElement(x,{limitedHeight:!0,code:a.fileCode||"",dependenciesLines:i}))})):o.a.createElement(u.a,{message:"C-mon, my dear friend, select dependency connection, what are you waiting for?",type:"info",showIcon:!0}))}),P=(n(1154),j.a.Panel),I=function(e,t,n){var r=[],o=t[e];return o?(Object.keys(o).forEach(function(t){var o=(n[t]&&n[t].children||[]).filter(function(t){return t.data.params.flow===e}).map(function(e){var r=e.data;return{crumbNodeLines:r.crumbNodeLines,file:n[t].data,step:r.params.flowStep}});r=r.concat(o)}),r.sort(function(e,t){return e.step-t.step}),r):r},_=Object(a.b)(function(e,t){var n=Object(i.e)(e,t).selectedNode,r=Object(i.d)(e,t).filesLayoutMap,o=Object(i.a)(e,t),a=o.selectedCrumbedFlowKey,c=o.codeCrumbedFlowsMap;return{selectedNode:n,flowStepsFiles:I(a,c,r)}})(function(e){var t=e.flowStepsFiles;return o.a.createElement("div",{className:"CrumbsTab"},t.length?o.a.createElement(j.a,{bordered:!1,defaultActiveKey:Array(t.length).fill().map(function(e,t){return"".concat(t)})},t.map(function(e,t){return o.a.createElement(P,{header:"[".concat(void 0!==e.step?e.step:"*","] ").concat(e.file.path),key:t},o.a.createElement(x,{limitedHeight:!0,code:e.file.fileCode||"",crumbedLines:[e.crumbNodeLines]}))})):o.a.createElement(u.a,{message:"C-mon, my dear friend, select crumbs trail, what are you waiting for?",type:"info",showIcon:!0}))}),M=(n(493),n(499));n(1156);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G={strokeColor:"#00bcd4",defaultFillColor:"#e6f7ff",textColor:"#595959",arrowFillColor:"#00bcd4",rectangleFillColor:"#fff",rectangleDotFillColor:"#fff",functionFillColor:"#fff",rootCircleFillColor:"#fff",loopFillColor:"#fff",conditionFillColor:"#fff",destructedNodeFillColor:"#fff",classFillColor:"#fff",debuggerFillColor:"#fff",exportFillColor:"#e6f7ff",throwFillColor:"#fff",tryFillColor:"#fff",objectFillColor:"#fff",callFillColor:"#fff",debugModeFillColor:"#fff"},J=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=A(this,K(t).call(this,e))).state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,o.a.Component),function(e,t,n){t&&H(e.prototype,t),n&&H(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this;n.e(14).then(n.t.bind(null,1173,7)).then(function(t){var n=t.createSVGRender,r=t.convertCodeToFlowTree;e.svgRender=n(),e.svgRender.applyColorBasedTheme(G),e.convertCodeToFlowTree=r,e.setState({ready:!0})})}},{key:"shouldComponentUpdate",value:function(){return this.props.active}},{key:"render",value:function(){if(!this.state.ready)return o.a.createElement("div",{className:"FlowChartLoading"},o.a.createElement(M.a,null));var e="";try{var t=this.convertCodeToFlowTree(this.props.fileCode||"");e=this.svgRender.buildShapesTree(t).print()}catch(e){return o.a.createElement(u.a,{message:"Oppss.. AST parser failed to parse your code. That dude..",type:"warning",description:"Well, you can file an issue here https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart",showIcon:!0})}return o.a.createElement("div",{className:"FlowChartTabContainer"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))}}]),t}(),U=(n(1158),f.a.TabPane),V=function(e){var t=e.selectedNode,n=e.onClose,r=e.selectedTabInSideBar,a=e.dependenciesDiagramOn,i=e.codeCrumbsDiagramOn,c=e.onTabSelect,l=t&&t.type===d.b?t:null,m=null,h=null;return l&&l.fileCode?(m=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,l.path),o.a.createElement("div",{className:"copyIcon"},o.a.createElement(p.a,{copyText:l.path}))),h=o.a.createElement(f.a,{defaultActiveKey:r,onChange:c},o.a.createElement(U,{tab:"Code",key:"Code"},o.a.createElement(x,{code:l.fileCode})),a&&o.a.createElement(U,{tab:"Dependencies",key:"Dependencies"},o.a.createElement(L,null))||null,i&&o.a.createElement(U,{tab:"Crumbs",key:"Crumbs"},o.a.createElement(_,null))||null,o.a.createElement(U,{tab:"FlowChart",key:"FlowChart"},o.a.createElement(J,{fileCode:l.fileCode,active:"FlowChart"===r})))):(m=o.a.createElement(u.a,{message:"No code for this file in standalone mode.",description:"Only files with codecrumbs have pre-fetched code. Consider to run codecrumbs locally for this project to access all code. Check instructions here https://github.com/Bogdan-Lyashenko/codecrumbs",type:"warning",showIcon:!0}),h=o.a.createElement(s.a,null)),o.a.createElement("div",{className:"SideBar"},o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"filePath"},m),o.a.createElement("a",{href:"#",onClick:n},"X")),o.a.createElement("div",{className:"bodySideBar"},h))};function W(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=Object(a.b)(function(e,t){var n=Object(i.e)(e,t).selectedNode,r=Object(l.d)(e,t).selectedTabInSideBar,o=Object(l.a)(e);return{selectedNode:n,sideBar:o.sideBar,dependenciesDiagramOn:o.dependenciesDiagramOn,codeCrumbsDiagramOn:o.codeCrumbsDiagramOn,selectedTabInSideBar:r}},function(e){return{onClose:function(){return e(Object(c.e)("sideBar",!1))},onTabSelect:function(t){return e(Object(c.b)(t))}}})(function(e){var t=e.sideBar,n=W(e,["sideBar"]);return t?o.a.createElement(V,n):null})},491:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(441);var r=n(428),o=n(1),a=n.n(o),i=n(492),c=n.n(i),l=function(e){var t=e.copyText;return a.a.createElement("a",{href:"#",onClick:function(){return c()(t)},title:"Copy path"},a.a.createElement(r.a,{type:"copy",theme:"outlined"}))}},994:function(e,t,n){var r=n(995);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(97)(r,o);r.locals&&(e.exports=r.locals)},995:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".Code {\n  height: 100%;\n  position: relative;\n  overflow: auto; }\n  .Code .crumbedLine {\n    display: block;\n    background-color: rgba(255, 225, 244, 0.8); }\n  .Code .importedDependencyLine {\n    display: block;\n    background-color: rgba(0, 148, 249, 0.1); }\n  .Code.limitedHeight {\n    max-height: 300px; }\n",""])}}]);