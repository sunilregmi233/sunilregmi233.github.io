import{V as i,a as n}from"./index.06d11def.js";const r={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},u=Object.keys(r);r.all=!0;function a(t){const e={};for(const o of u)t[o]===!0&&(e[o]=!0);return Object.keys(e).length===0?r:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}function d(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function s(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),i.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const c={dark:{type:Boolean,default:null}};function f(t,e){return n(()=>t.dark===null?e.dark.isActive:t.dark)}export{f as a,s as c,a as g,d as s,c as u};
