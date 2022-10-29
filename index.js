import { registerRootComponent } from 'expo';
import React from 'react';
import { MyProvider } from './src/context';
import App from './App';

const Provider=()=>(
<MyProvider>
    <App/>
</MyProvider>
)

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Provider);
