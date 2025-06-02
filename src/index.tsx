import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import App from './_layout';

const rootDom = document.getElementById('root')!;

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(rootDom);
root.render(<App />);

// `@expo/metro-runtime` MUST be the first import to ensure Fast Refresh works
// on web.
// import '@expo/metro-runtime';

// import { App } from 'expo-router/build/qualified-entry';
// import App from '../app/_layout';
// import { renderRootComponent } from 'expo-router/build/renderRootComponent';

// This file should only import and register the root. No components or exports
// should be added here.
// renderRootComponent(App);
