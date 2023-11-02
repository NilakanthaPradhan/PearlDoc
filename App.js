import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,Button,SafeAreaView,Alert,components} from 'react-native';
//import { SafeAreaView } from 'react-native-web';
import { Register } from './Register';
import React, { useState } from 'react';

export default function App() {

  const [Register, setShowRegister] = useState(false);

  const handleClick = () => {
    setShowRegister(true);
  };
  return (
  
    <SafeAreaView style={styles.container}>
      <View>
      <Text>Hey welcome Patient  </Text>
      </View>
      <View>
     
      <Image style={styles.stretch} source= {require('./assets/dlgoo.jpg')} />
      <StatusBar style="auto" />
      </View>
      <View>
      
         <Button
          title="Join PearlDoc"
           onPress={() => Alert.alert('Thank You for Choosing PearlDoc')}
          />

       
       
      
    </View>
    </SafeAreaView>
  );
}
const Separator = () => <View style={styles.separator} />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 450,
    height: 500,
    
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
});

