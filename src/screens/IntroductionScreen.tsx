import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  Alert,
    BackHandler,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';
import CartService from '../services/CartService';
import { LinearGradient } from 'expo-linear-gradient';
import { verticalScale } from 'react-native-size-matters';
// import LinearGradient from 'react-native-linear-gradient';

export const IntroductionScreen = ({ navigation }: any) => {
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
  
  return (
    // <ScrollView contentContainerStyle={[styles.container, isTablet && styles.containerTablet]}>
    <ScrollView style={{ paddingTop: 100 }} contentContainerStyle={[styles.container && styles.containerTablet]}>
        {/* <SafeAreaView  style={styles.topRow}>
            <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('Explore')}>
              <Ionicons name="chevron-back" size={24} color="#556B2F" />
            </TouchableOpacity>
        </SafeAreaView> */}

        {/* <Text style={styles.cartText}>Cart</Text> */}
        {/* <SafeAreaView  style={styles.greenBar} /> */}

        <div id="app-intro">
            <h2 style={{ textAlign: 'center', color: '#343434', fontWeight: 'bold' }}>Introduction</h2>

            <p style={{ width: '80%', margin: 'auto', color: '#343434' }}>
                I'm a 28 year old tech enthusiast who grew up in Randburg, Johannesburg, South Africa.
                I first learned to code using Borland Delphi 7 (Pascal), 12 years ago. I primarily design & develop applications for the Web but I do also work on applications for Windows, Android & Linux - I occasionally dabble in a bit of MacOS and iOS pet-projects although that's not my primary stack/market - unless it's a WORA/WORE implementation of course. I've worked with most of the common methodologies of the Software Development Life Cycle, mainly the Agile, Extreme Programming & Waterfall methodology along with SCRUM.
                I'm proficient in JavaScript/Typescript (Front-end using Angular, React, Vue and Back-end using Express, Axios and Nest - along with TypeORM), Java (SpringBoot & Hibernate), C#.NET, PL/SQL and  Bash. I'd describe myself as a curious individual who likes to experiment with a wide range of technologies such as Python, C (mainly for electronics programming - currently Arduino Uno & Mega and the Nordic nRF52) and occasionally some C++ usually only for experimenting with Unreal Engine.
            </p>
            <br />
            <p style={{ width: '80%', margin: 'auto', color: '#343434' }}>My day-to-day stack includes:</p>
            <div style={{ width: '25%', margin: 'auto', color: '#343434' }}>
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="https://www.oracle.com/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            Java SE
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="https://www.spring.io/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            Spring Boot API
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="https://www.typescriptlang.org/"
                            target="_blank"
                            rel="nofollow noopener noreferrer">
                            TypeScript
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="https://www.reactjs.org/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            ReactJS
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="https://www.electronjs.org/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            ElectronJS
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="https://www.getbootstrap.com/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            Bootstrap
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="https://www.expressjs.com/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            ExpressJS
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="http://www.jade-lang.com/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            Jade Template Engine
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="http://www.keystonejs.com/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            KeystoneJS
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="https://www.nginx.com/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            Nginx
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="https://www.docker.org/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            Docker
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="https://www.heroku.com/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            Heroku
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ textDecoration: 'underline', color: '#343434' }}
                            href="https://www.letsencrypt.org/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            Let's Encrypt
                        </a>
                    </li>
                    <li>Bash</li>
                    <li>SSH</li>
                    <li>and Mac OS X.</li>
                </ul>
            </div>
        </div>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // paddingTop: 50,
    // marginTop: 100,
    // backgroundColor: '#fdfaf6',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  containerTablet: {
    paddingHorizontal: 40,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  
  topButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  
  topButtonText: {
    fontSize: 14,
    color: '#556B2F',
  },

  cartText: {
    fontSize: 40,
    color: '#556B2F',
    fontWeight: '600',
    fontStyle: 'italic',
    marginTop: 10,
  },

  greenBar: {
    height: 20,
    backgroundColor: '#556B2F',
    marginTop: 25,
    marginBottom: 25,
    width: '100%',
    borderRadius: 2,
  },

  cartItem: {
    flexDirection: 'row',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 20,
  },

  cartItemTablet: {
    gap: 20,
  },

  cartImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 15,
  },

  cartDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },

  itemName: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#444',
    marginBottom: 5,
  },

  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e2f',
    marginBottom: 10,
  },
  
  subtotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 100,
    paddingBottom: 30,
  },
  
  deliveryPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 100,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 800,
    paddingBottom: 30,
    marginTop: 25,
  },

  subtotalPriceText: {
    fontSize: 16,
    fontWeight: 'light',
    color: '#333',
  },
  
  deliveryPriceText: {
    fontSize: 16,
    fontWeight: 'light',
    color: '#333',
  },
  
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  cartButton: {
    borderColor: 'olive',
    borderStyle: 'solid',
    borderCurve: 'circular',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  removeButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderColor: '#2c3e2f',
    borderWidth: 1,
    borderRadius: 20,
  },

  removeButtonText: {
    color: '#2c3e2f',
    fontWeight: '500',
  },

  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  qtyButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#2c3e2f',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyText: {
    fontSize: 18,
    color: '#2c3e2f',
  },

  qtyNumber: {
    fontSize: 16,
    color: '#2c3e2f',
    marginHorizontal: 5,
  },

  promoContainer: {
    marginTop: 20,
    marginBottom: 40,
    flexDirection: 'row',
    borderColor: '#2c3e2f',
    borderWidth: 1,
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
  },

  promoInput: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    color: '#2c3e2f',
  },

  divider: {
    height: '100%',
    width: 1,
    backgroundColor: '#2c3e2f',
  },

  promoButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  promoButtonText: {
    color: '#2c3e2f',
    fontWeight: '600',
    fontSize: 16,
  },

  button: {
    width: '100%',
    height: 55,
    backgroundColor: 'olive',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginTop: 10,
  },

  buttonText: {
    color: '#343434',
    fontSize: 18,
    fontWeight: 'regular',
    textAlign: 'center',
  },
});

export default IntroductionScreen;
