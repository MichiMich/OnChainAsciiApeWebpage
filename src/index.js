import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from "react-moralis";
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import "./index.css";
import * as ReactDOMClient from 'react-dom/client';

// const container = document.getElementById('root');

// const root = ReactDOMClient.createRoot(container);

// root.render(<React.StrictMode>
//   <MoralisProvider serverUrl="https://6i3kla2yuaqw.usemoralis.com:2053/server" appId="2fxeRL7M5IdL5ipUi5xTr7KsnZV9J9HjgjToIt7p">
//     <App />
//   </MoralisProvider>
// </React.StrictMode>)


ReactDOM.render(
  <MoralisProvider serverUrl="https://l9j8ruqibthp.usemoralis.com:2053/server" appId="clgceh8S5tCXxJjT8V26VBZxQpE7vGbXe9iHRDuI">
    <App />
  </MoralisProvider>,
  document.getElementById('root')
)

// ReactDOM.render(
//   <React.StrictMode>
//     <MoralisProvider serverUrl="https://6i3kla2yuaqw.usemoralis.com:2053/server" appId="2fxeRL7M5IdL5ipUi5xTr7KsnZV9J9HjgjToIt7p">
//       <App />
//     </MoralisProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
