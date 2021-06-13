# user-agent-stripper

`npm install --save user-agent-stripper`

```js
import stripUserAgent from "user-agent-stripper";

stripUserAgent("MyCustomAgent") // MyCustomAgent
stripUserAgent("SomeRandomAgent/v1.2") // SomeRandomAgent/vx.x
stripUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36") // Chrome
```
