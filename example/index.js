const plainError = require("../lib").default;

function asyncCall(args) {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random < 0.5) {
            return reject("error");
        }
        return resolve(args.name + " got " + random);
    })
}

(async function () {
    const [err, response] = await plainError(asyncCall)({ name: "ff" });
    if (err) {
        // do something
        console.log(err);
        return;
    }
    console.log(response);
})();