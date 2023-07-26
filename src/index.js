import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import Products from './components/views/Products';
/* import About from './components/views/About'; */
import Designer from './components/common/Designer';
import Form from './components/common/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Content>
        <Header/>
        <Main>
          <Products title="NOSSOS SERVIÇOS"/>
          {/* <About/> */}
          <Designer />
          <Form/>
        </Main>
        <Footer/>
      </Content>
    </App>
  </React.StrictMode>
);