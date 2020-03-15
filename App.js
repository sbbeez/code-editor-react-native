import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#099'}}>
      <WebView
        style={{width: '100%', height: '100%'}}
        startInLoadingState
        source={{uri: 'https://code-editor-simpleterms.herokuapp.com/'}}
      />
    </View>
  );
};

export default App;
