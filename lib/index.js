"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function plainError(caller, context) {
    return function wrapped(...args) {
        return caller.apply(context, args).then((res) => {
            return [null, res];
        }, (err) => {
            return [err, {}];
        });
    };
}
exports.default = plainError;
