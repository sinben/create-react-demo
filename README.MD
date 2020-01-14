# Demo  
  
## Prerequisites  
  
Node  
https://nodejs.org/en/  
  
Yarn (optional)   
https://yarnpkg.com/lang/en/docs/install/#windows-stable  
  
## Step 1. Create react app  
  
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
  
  
## Step 2  
Added a simple model and a list  
  
### Functional vs class components
[https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)

### Presentational vs  container components  
https://css-tricks.com/learning-react-container-components/  

### React Router  
https://css-tricks.com/learning-react-router/ (Ignore the part about browser history)  
https://dev.to/finallynero/hooks-introduced-in-react-router-v5-1-7g8  
  
  
## Step 3 

### Axios
yarn add axios
[https://github.com/axios/axios](https://github.com/axios/axios)

Alternatives:
[https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Hooks
[https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)

## Step 4

## Step 5


### Asynchronous programming is hard :/  
yarn add redux-saga  
https://redux-saga.js.org/  
  
Alternatives:  
https://redux-observable.js.org/  

### Redux
yarn add redux  
yarn add react-redux  
To handle state in the redux application  
  
https://redux.js.org/  

Alternatives:
https://dev.to/jaffparker/you-might-not-need-redux-k4e  
https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/  
  
## Step 6

### CSS-to-Js framework.  
yarn add styled-components  
To style components instead of using CSS/SCSS.  
  
https://cssinjs.org/?v=v10.0.3  
https://www.styled-components.com/  
  
Alternatives:  
https://github.com/MicheleBertoli/css-in-js  

## Honorable mentions

### React table 7
Plus: Very nice. Use hooks and no styling.
Negative: Kinda steep learning curve

[https://github.com/tannerlinsley/react-table](https://github.com/tannerlinsley/react-table)

### Docker 
Needs a webserver (nginx or node). 
Example google create react app docker nginx 


