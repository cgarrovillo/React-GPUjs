# React GPU JS

Sample React application to demonstrate GPU.js usage in React.

## Motivation

I wanted to test out the performance improvements that GPU.js provides in heavy-calculation tasks, and I wanted to do this in ReactJS.

I couldn't find a way to test this easily in React.
Asynchronous calls, or component-splitting did not help either as no matter what, React was running on the same thread.

Using @shopify/react-web-worker, I was able to achieve
