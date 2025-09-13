"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = exports.finalAge = exports.isValid = exports.height = exports.name = void 0;
exports.name = "juan";
exports.height = 1.74;
exports.isValid = true;
let age = 23;
age = +'35' + 1;
exports.finalAge = age;
exports.message = `
this is a template string

${1 + 1} 

${exports.name}
`;
