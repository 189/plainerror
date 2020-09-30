# plainerror
Utility used to catch unhandled exceptions for async process. Easy to got error from async promise flow, no `catch` in your code.

Both work in nodejs and browser.

#### install

```
yarn add plainerror
```

#### usage

```js
# js
import plainerror from "plainerror";

function asyncCall(args) {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random < 0.5>) {
            return reject("error");
        }
        return resolve(args.name + " got " + random);
    })
}

(async function() {
    const [err, response] = plainerror(asyncCall)({name: "ff"});
    if (err) {
        // do something
        return;
    }
    console.log(response);
})();


```