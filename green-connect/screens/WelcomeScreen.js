import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const WelcomeScreen = () => {
  const windowWidth = Dimensions.get('window').width;

  // Define styles for different screen widths
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: windowWidth >= 400 && windowWidth <= 768 ? 24 : 36,
      color: 'white',
      marginBottom: windowWidth >= 600 && windowWidth <= 768 ? 20 : 30,
    },
    signInButton: {
      backgroundColor: '#007AFF',
      width: windowWidth >= 600 && windowWidth <= 768 ? '40%' : '60%',
      padding: windowWidth >= 600 && windowWidth <= 768 ? '2%' : '3%',
      borderRadius: windowWidth >= 600 && windowWidth <= 768 ? '2%' : '5%',
    },
    buttonText: {
      color: 'white',
      fontSize: windowWidth >= 600 && windowWidth <= 768 ? 16 : 24,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/Background.jpeg')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>Welcome to </Text>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => {
              // Add your navigation logic to the Sign In screen here
            }}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;