"use strict";
/**
 * MAPPED TYPES allow the use of an interface to transform keys into values
 */
function contact(method, contact // 💡turning key into value -- a *mapped type*
) {
    //...
}
contact("email", { name: "foo", email: "mike@example.com" });
contact("phone", { name: "foo", phone: 3213332222 });
contact("fax", { fax: 1231 });
/**
 * Type queries allow us to obtain the type from a value using typeof
 */
const alreadyResolvedNum = Promise.resolve(4);
const x = Promise.resolve;
x(42).then((y) => y.toPrecision(2));
let a;
let z;
const me = {}; // everything is optional
let hasThen = Promise.resolve(4);
hasThen.then;
