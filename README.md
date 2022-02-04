# Reda Salmi Portfolio V2

## About

Second version of my Portfolio, presenting my projects and skills. found at:
[Reda Salmi Portfolio](https://redasalmi.netlify.app).

## Built With

- [Remix](https://remix.run/)
- [PostCSS](https://postcss.org/)
- [Framer motion](https://www.framer.com/motion/)

## Inspirations

- The light theme was inspired by this color palette:
  [Happy Hues](https://www.happyhues.co/palettes/6).
- The dark theme was inspired by this color palette:
  [Happy Hues](https://www.happyhues.co/palettes/4).
- The logo animation was inspired by
  [Cassie Evans website logo](https://www.cassie.codes/), she has a really good
  article explaining how it works found here:
  [logo animation article](https://www.cassie.codes/posts/creating-my-logo-animation/).

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the
latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Netlify CLI starts your app in development mode, rebuilding assets on file
changes.

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready
to go!

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app
to your git repo and have it auto deploy changes to Netlify, or you can deploy
your app manually. If you've followed the setup instructions already, all you
need to do is run this:

```sh
$ npm run build
# preview deployment
$ netlify deploy

# production deployment
$ netlify deploy --prod
```
