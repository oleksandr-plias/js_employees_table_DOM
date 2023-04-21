parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return r(e)||a(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var l,i=document.querySelector("table"),c=i.querySelector("thead"),u=i.querySelector("tbody"),d=1,s=null;c.addEventListener("click",function(t){var n=t.target.cellIndex;s!==n?(d=1,s=n):d++;var a=Array.from(u.querySelectorAll("tr")).sort(function(e,t){var a=e.querySelectorAll("td")[n].textContent,r=t.querySelectorAll("td")[n].textContent,o=1;return d%2==0&&(o=-1),4===n?o*(parseFloat(a.replace(/[^0-9.-]+/g,""))-parseFloat(r.replace(/[^0-9.-]+/g,""))):o*a.localeCompare(r)});u.append.apply(u,e(a))}),u.addEventListener("click",function(e){l&&l.classList.remove("active");var t=e.target.parentNode;t.classList.add("active"),l=t});var m=document.createElement("form");m.className="new-employee-form",m.innerHTML='\n  <label>Name: <input id="input" name="name" type="text" data-qa="name"></label>\n  <label>Position:\n    <input name="position" type="text" data-qa="position">\n  </label>\n  <label>Office:\n    <select name="office" data-qa="office">\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n  </label>\n  <label>Age: <input name="age" type="number" data-qa="age"></label>\n  <label>Salary: <input name="salary" type="number" data-qa="salary">\n  </label>\n  <button type="submit">Save to table</button>\n',document.body.append(m);var p=function(e,t,n){var a=document.createElement("div"),r=document.createElement("h2"),o=document.createElement("p");a.classList.add("notification",n),a.setAttribute("data-qa","notification"),r.className="title",r.innerText=e,o.innerText=t,a.append(r,o),document.body.append(a),setTimeout(function(){a.remove()},2e3)};m.addEventListener("submit",function(e){e.preventDefault();var t=document.querySelector(".notification");t&&t.remove();var n=new FormData(e.target),a=Object.fromEntries(n.entries());if(a.name.length<4)p("Error","Name should contain more than 3 letters","error");else if(+a.age<18||+a.age>90)p("Error","Age must be between 18 and 90","error");else if(a.position&&a.salary){var r=document.createElement("tr");r.innerHTML="\n    <td>".concat(a.name,"</td>\n    <td>").concat(a.position,"</td>\n    <td>").concat(a.office,"</td>\n    <td>").concat(a.age,"</td>\n    <td>$").concat(Number(a.salary).toLocaleString(),"</td>\n  "),u.append(r),m.reset(),p("Success","New employee was added","success")}else p("Error","All fields are required","error")}),u.addEventListener("dblclick",function(e){var t=e.target.textContent,n=e.target.cellIndex;e.target.textContent="";var a=document.createElement("input");if(a.classList.add("cell-input"),2===n){var r=document.createElement("select");["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"].forEach(function(e){var t=document.createElement("option");t.textContent=e,r.append(t)}),a=r}e.target.append(a),a.focus(),a.addEventListener("blur",function(){switch(n){case 0:a.value.length<4?(p("error","Name value should have more than 4 letters"),e.target.textContent=t):e.target.textContent=a.value;break;case 1:a.value?e.target.textContent=a.value:(p("error","All fields are required"),e.target.textContent=t);break;case 2:a.value?e.target.textContent=a.value:e.target.textContent=t;break;case 3:a.value<18||a.value>90?(p("error","Age value is not valid. Employee must be an adult"),e.target.textContent=t):e.target.textContent=a.value;break;case 4:a.value&&a.value>0?e.target.textContent="$"+Number(a.value).toLocaleString("en-US"):(p("error","Salary value is not valid. It must be more than zero"),e.target.textContent=t)}a.remove()}),a.addEventListener("keydown",function(e){"Enter"===e.key&&a.blur()})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.51dd36a8.js.map