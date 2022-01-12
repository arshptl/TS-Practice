"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// any type(top level type)
let myAny = 32;
let myUnknown = "Hello, unknown";
// we can do whatever we wanted to do with them
myAny = "harsh";
myUnknown = 34;
// good scenario to use any
function logWhenReady(p) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = yield p;
        console.log("Resolved to: ", val);
    });
}
// guards
function isDefined(arg) {
    return typeof arg !== "undefined";
}
let ans = isDefined("Hello");
console.log(ans);
// can be assign unknown with other unknown veriable
let aa = 31;
let bb = ["a", "b", "c"];
aa = bb;
