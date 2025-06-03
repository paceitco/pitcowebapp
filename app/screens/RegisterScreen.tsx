import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert, BackHandler, SafeAreaView, ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export const RegisterScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    if (!fullName || !email || !mobile || !password) {
      Alert.alert('Validation Error', 'All fields are required.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Invalid email address.');
      return false;
    }
    if (mobile.length < 10) {
      Alert.alert('Validation Error', 'Mobile number must be at least 10 digits.');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Validation Error', 'Password must be at least 6 characters.');
      return false;
    }
    return true;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Registration successful!');
      // navigation.navigate('MainTabs');
    }
  };
  
  const handleBack = () => {
    BackHandler.exitApp();
    return true;
  };

  BackHandler.addEventListener('hardwareBackPress', handleBack);

  // navigation.navigate('Landing')

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.topSection}>
        {/* <SafeAreaView  style={styles.topRow}>
            <TouchableOpacity onPress={handleBack}>
              <Ionicons name="chevron-back" size={28} color="#556B2F" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
              <Text style={styles.exploreText}>Explore app</Text>
            </TouchableOpacity>
        </SafeAreaView> */}

        <Text style={styles.welcomeText}>Welcome!</Text>
        {/* <Text style={styles.appName}>Casper's Resume</Text>
        <Text style={styles.subText}>
            You will be redirected to the landing page shortly{"\n"}If not, please click the explore button
        </Text> */}
        <SafeAreaView  style={styles.greenBar} />
      </SafeAreaView>

      {/* {
        navigation.navigate('Home')
      } */}
  
      {/* <SafeAreaView style={styles.registerContainer}>
        {/* <Text style={styles.header}>Register</Text> *
navigation.navigate('Landing')
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          placeholder="Mobile Number"
          style={styles.input}
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />

        <Text style={styles.label}>Create Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
  
        <SafeAreaView style={styles.loginPrompt}>
          <Text>Have an account? </Text>
          <Text style={styles.loginLink}>Login</Text>
        </SafeAreaView>
  
        <SafeAreaView style={styles.orContainer}>
          <SafeAreaView  style={styles.hr} />
          <Text style={styles.orText}>or</Text>
          <SafeAreaView  style={styles.hr} />
        </SafeAreaView>
  
        
      </SafeAreaView> */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Landing')}>
          <Text style={styles.buttonText}>Let's Go!</Text>
        </TouchableOpacity>
    </ScrollView>
  );  
};

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#556B2F',
    marginBottom: 5,
    marginTop: 10,
  },
  
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  
  exploreText: {
    fontSize: 14,
    color: '#556B2F', // olive green
  },
  
  welcomeText: {
    fontSize: 40,
    color: '#556B2F',
    fontWeight: '600',
    marginTop: 10,
  },
  
  appName: {
    fontSize: 30,
    color: '#556B2F',
    fontStyle: 'italic',
    fontWeight: '600',
  },
  
  subText: {
    fontSize: 18,
    color: '#556B2F',
    marginTop: 10,
    lineHeight: 22,
  },
  
  greenBar: {
    height: 20,
    backgroundColor: '#556B2F',
    marginTop: 15,
    width: '100%',
    borderRadius: 2,
  },
  
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f9f8f5',
  },
    
  topSection: {
    height: '25%',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#f9f8f5',
  },
      
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  splashIcon: {
    width: 100,
    height: 100,
  },

  registerContainer: {
    top: 50,
    padding: 20,
    alignItems: 'center',
  },

  header: {
    fontSize: 24,
    marginBottom: 20,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },

  button: {
    width: '100%',
    height: '8%',
    backgroundColor: 'olive',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  loginPrompt: {
    flexDirection: 'row',
    marginTop: 30,
  },

  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  hr: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },

  orText: {
    marginHorizontal: 10,
    color: '#666',
  },

  gridContainer: {
    padding: 10,
  },

  gridItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
  },

  gridImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default RegisterScreen;