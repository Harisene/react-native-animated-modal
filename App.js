import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Modal from './src/components/Modal';

const App = () => {

  const [visible, setVisible] = useState(false);

  const handleVisibleModal = () => {
    setVisible(true);
  }

  const handleClose = () => {
    setVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title='Open Modal' onPress={handleVisibleModal} />
      <Modal
        visible={visible}
        // options={{ type: 'slide', from: 'top' }}
        duration={500}
        onClose={handleClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  }
});

export default App;
