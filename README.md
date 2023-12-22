# ICU Demo Playground

This is a demo for playing with and exploring the ICU Message Format.
It's a companion to our [ICU Guide](https://phrase.com/blog/posts/guide-to-the-icu-message-format/).

## Running on StackBlitz

If you're accessing this demo on StackBlitz, it should
run automatically. You might need to expand the built-in
browser pane to get the best experience.

## Running Locally

If you're running this locally, you'll need to have a
recent version of [Node.js](https://nodejs.org/en) installed.

With that in place, install the app dependencies and
start the server:

```bash
npm install
npm run dev
```

## A note on console errors

We're using the [React Intl](https://formatjs.io/docs/react-intl/) library to handle the ICU Message Format.
But we're kind of hacking React Intl, which is really meant to
be used as a behind-the-scenes i18n library. So you might see errors
in the console. If the app is functioning correctly, you probably
don't need to worry about them.
