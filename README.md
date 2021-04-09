# React GPU JS

Sample React application to demonstrate GPU.js usage in React.

## Motivation

I wanted to test out the performance improvements that GPU.js provides in heavy-calculation tasks, and I wanted to do this in ReactJS. The best way I thought was to do asynchronous calls, and to split each calculation in it's own component.

![gif](https://i.imgur.com/HxCIDy9.gif)


As you see, this didn't help much as no matter how many Asynchronous calls I threw at it, React was running on the same thread.

Using @shopify/react-web-worker, I was able to achieve what I wanted, where the UI could be updated without needing to wait for the expensive CPU Call.

![gif](https://i.imgur.com/pdePyR8.gif)
