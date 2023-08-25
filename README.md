# To Run

``` npm i ```

``` npm run  dev ```

# Content learnt

## [UseState](https://react.dev/reference/react/useState)
- Lets us track state easily with little ceremony.

## [UseEffect](https://react.dev/reference/react/useEffect)
- Gives us a clean way to set things typiically state when components start and finish.

## [UseRef](https://react.dev/reference/react/useRef)
- Gives us the control we need to get to DOM elements when other means are not straightforward.

## [useContext](https://react.dev/reference/react/useContext)
- Allows you to pass data down the component tree without propdrilling

## [useReducer](https://react.dev/reference/react/useReducer)
- Gave us a nice way to organise our state management.

## [useCallback](https://react.dev/reference/react/useCallback)
- Gave us a nice performance gain by not having all  our cartoon detail page re-rendered every time a button is clicked.

## [useMemo](https://react.dev/reference/react/useMemo)
- Helped us cache some data on our cleint saving some compute time on our app and hopefully making it more responsive.

### What needs to be fixed
1. Unliking the cartoon is impossible
2. Unchecking the Sunday and Saturday check boxes shows the images that were not initially in view to remain gray.

# Improve performance strategies
- Better image handling
- Cache react pages inside our Node server
- Setup CDN for Code Split JavaScript and images
- Implement placeholder images while waiting for data to download

### CDNs

Check if we are in production development
```
const isProd = process.env.NODE_ENV === 'production';
```

All assest will be served from cloud front, this line is placed in the next.config.js file
```
assetPrefix: isProd ? 'http://d30k733rzexkhf.cloudfront.net' : ''
```


## next.config.js
```
const withCSS = require("@zeit/next-css");
require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");
const withImages = require("next-images");

const isProd = process.env.NODE_ENV === 'production';

/* Without CSS Modules, with PostCSS */
module.exports = withCSS(
    withImages(
        {
            assetPrefix: isProd ? 'http://d30k733rzexkhf.cloudfront.net' : '',
            inlineImageLimit: 16384,
            serverRuntimeConfig: {
                // Will only be available on the server side
            },
            publicRuntimeConfig: {
                // Will be available on both server and client
                RESTURL_SPEAKERS_PROD:
                    "https://www.siliconvalley-codecamp.com/rest/speakers/ps",
                RESTURL_SPEAKER_PROD:
                    "https://www.siliconvalley-codecamp.com/rest/speaker",
                RESTURL_SESSIONS_PROD:
                    "https://www.siliconvalley-codecamp.com/rest/sessions"
            },
            webpack(config, options) {
                config.plugins = config.plugins || [];
                config.plugins = [
                    ...config.plugins,
                    // Read the .env file
                    new Dotenv({
                        path: path.join(__dirname, ".env"),
                        systemvars: true
                    })
                ];
                return config;
            }
        })
);
```