# Demo

## Prerequisites

Node
https://nodejs.org/en/

Yarn (optional) 
https://yarnpkg.com/lang/en/docs/install/#windows-stable

## Create react app

https://create-react-app.dev/

npx create-react-app imp --template typescript

Issues with connecting and on Equinor Machine?

https://www.jhipster.tech/configuring-a-corporate-proxy/

npm config set proxy http://www-proxy.statoil.no:80/
npm config set https-proxy http://www-proxy.statoil.no:80/

yarn config set proxy http://www-proxy.statoil.no:80/
yarn config set https-proxy http://www-proxy.statoil.no:80/

git config --global http.proxy http://www-proxy.statoil.no:80/
git config --global https.proxy http://www-proxy.statoil.no:80/

Also note, I have more success with Git Bash than cmd in some cases, like Azure login.

## Installed dependencies

### CSS-to-Js framework.
yarn add styled-components
To style components instead of using CSS/SCSS.

https://cssinjs.org/?v=v10.0.3
https://www.styled-components.com/

Alternatives:
https://github.com/MicheleBertoli/css-in-js


### State-management
yarn add redux
To handle state in the redux application

https://redux.js.org/
https://dev.to/jaffparker/you-might-not-need-redux-k4e

### Asynchronous programming is hard
yarn add redux-saga

https://redux-saga.js.org/

Alternatives:
https://redux-observable.js.org/


