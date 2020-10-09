# plainerror

Utility used to catch unhandled exceptions for async process. Easy to got error from async promise flow, no `catch` in your code.

Both work in nodejs and browser.

#### install

```
yarn add plainerror
```

#### Usage

```
plainError(async_function_name: string, context: any)(your_params)

```

```
const plainError = require("plainerror").default;
function asyncCall(args) {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random < 0.5) {
            return reject("error");
        }
        return resolve(args.name + " got " + random);
    })
}

// With plainError you can get plain error from first array item, without wrapping `try catch` or chaining `.catch`

(async function () {
    const [err, response] = await plainError(asyncCall, null)({ name: "lucy" });
    if (err) {
        // do something
        console.log(err);
        return;
    }
    console.log(response);
})();

```
