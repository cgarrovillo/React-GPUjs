# React GPU JS

Sample React application to demonstrate [GPU.js](https://github.com/gpujs/gpu.js) usage in React.

## Motivation

I wanted to test out the performance improvements that GPU.js provides in heavy-calculation tasks, and I wanted to do this in ReactJS. The best way I thought was to do asynchronous calls, and to split each calculation in it's own component.

![gif](https://i.imgur.com/HxCIDy9.gif)


As you see, this didn't help much as no matter how many Asynchronous calls I threw at it, React was running on the same thread.

Using the [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), I was able to achieve what I wanted, where the UI could be updated without needing to wait for the expensive CPU Call.

![gif](https://i.imgur.com/pdePyR8.gif)

For the sake of development time, I opted to use the awesome [@shopify/react-web-worker](https://github.com/Shopify/quilt) from the people at Shopify for now. This will probably change as I develop my own that also uses the Hooks API.
