import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components';

ReactDOM.render(
  <FluentProvider theme={teamsDarkTheme}>
    <App />
  </FluentProvider>,
  document.getElementById('root')
);
