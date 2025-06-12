import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  Alert,
    BackHandler,
    FlatList,
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
import { scale, verticalScale } from 'react-native-size-matters';
import { useRoute } from '@react-navigation/native';
import { HeaderTitle } from '@react-navigation/elements';
// import LinearGradient from 'react-native-linear-gradient';

export const IntroductionView = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const route = useRoute();
  const { renderCustomBackground = false } = route.params || {} as any;
  const [items, setItems] = useState<any[]>([
    {
      id: 0,
      url: 'https://www.oracle.com/',
      name: 'Java SE',
      description: ''
    },
    {
      id: 1,
      url: 'https://www.spring.io/',
      name: 'Spring Boot API',
      description: ''
    },
    {
      id: 2,
      url: 'https://www.typescriptlang.org/',
      name: 'TypeScript',
      description: ''
    },
    {
      id: 3,
      url: 'https://www.angular.io/',
      name: 'Angular',
      description: ''
    },
    {
      id: 4,
      url: 'https://www.electronjs.org/',
      name: 'ElectronJS',
      description: ''
    },
    {
      id: 5,
      url: 'https://www.getbootstrap.com/',
      name: 'Bootstrap',
      description: ''
    },
    {
      id: 6,
      url: 'https://www.expressjs.com/',
      name: 'ExpressJS',
      description: ''
    },
    {
      id: 7,
      url: 'http://www.jade-lang.com/',
      name: 'Jade Template Engine',
      description: ''
    },
    {
      id: 8,
      url: 'http://www.keystonejs.com/',
      name: 'KeystoneJS',
      description: ''
    },
    {
      id: 9,
      url: 'https://www.nginx.com/',
      name: 'Nginx',
      description: ''
    },
    {
      id: 10,
      url: 'https://www.docker.org/',
      name: 'Docker',
      description: ''
    },
    {
      id: 11,
      url: 'https://www.heroku.com/',
      name: 'Heroku',
      description: ''
    },
    {
      id: 12,
      url: 'https://www.letsencrypt.org/',
      name: 'Let\'s Encrypt',
      description: ''
    },
    {
      id: 13,
      url: '#',
      name: 'Bash',
      description: ''
    },
    {
      id: 14,
      url: '#',
      name: 'SSH',
      description: ''
    },
    {
      id: 15,
      url: '#',
      name: 'and Mac OS X.',
      description: ''
    },
  ]);

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

  const renderItem = ({ item }: any) => (
    <SafeAreaView style={styles.gridItem}>
      {/* <Image source={{ uri: item.image }} style={styles.gridImage} /> */}
      {/* <Text style={styles.descriptionText}>{item.description}</Text> */}
      <SafeAreaView style={styles.priceRow}>
        {/* <Text style={styles.priceText}>{defaultCurrency} {item.price}</Text> */}
        <Text style={styles.priceText}>{item.name}</Text>
        {/* <TouchableOpacity style={styles.cartButton} onPress={() => handleAddToCart(item)}>
          <Ionicons name="cart-outline" size={18} color="olive" />
        </TouchableOpacity> */}
        {/* <Ionicons name="cart-outline" size={18} color="olive" /> */}
      </SafeAreaView>
    </SafeAreaView>
  );

  BackHandler.addEventListener('hardwareBackPress', handleBack);
  
  return (
    <ScrollView style={{ paddingTop: 150 }}>
          {/* <SafeAreaView  style={styles.topRow}>
              <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('Explore')}>
                <Ionicons name="chevron-back" size={24} color="#556B2F" />
              </TouchableOpacity>
          </SafeAreaView> */}

          {/* <Text style={styles.cartText}>Cart</Text> */}
          {/* <SafeAreaView  style={styles.greenBar} /> */}

          {/* <SafeAreaView id="app-intro"> */}
          <SafeAreaView>
              <HeaderTitle style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Biography</HeaderTitle>

              <Text style={{ width: '80%', margin: 'auto', color: '#fff' }}>
                  I'm a 29 year old tech enthusiast who grew up in Randburg, Johannesburg, South Africa.
                  I first learned to code using Borland Delphi 7 (Pascal), 15 years ago. I primarily design & develop applications for the Web but I do also work on applications for Windows, Android & Linux - I occasionally dabble in a bit of MacOS and iOS pet-projects although that's not my primary stack/market - unless it's a WORA/WORE implementation of course. I've worked with most of the common methodologies of the Software Development Life Cycle, mainly the Agile, Extreme Programming & Waterfall methodology along with SCRUM.
                  I'm proficient in JavaScript/Typescript (Front-end using Angular, React, Vue and Back-end using Express, Axios and Nest - along with TypeORM), Java (SpringBoot & Hibernate), C#.NET, PL/SQL and  Bash. I'd describe myself as a curious individual who likes to experiment with a wide range of technologies such as Python, C (mainly for electronics programming - currently Arduino Uno & Mega and the Nordic nRF52) and occasionally some C++ usually only for experimenting with Unreal Engine.
              </Text>
              
              {/* <br /> */}
              
              <Text style={{ width: '80%', margin: 'auto', color: '#fff', textAlign: 'center', paddingTop: verticalScale(20), paddingBottom: verticalScale(10) }}>My current day-to-day stack is:</Text>

              {/* <View style={{ width: '25%', margin: 'auto', marginLeft: 'auto', marginRight: 'auto' }}> */}
              {/* <View style={{ width: scale(200), alignItems: 'center',  }}> */}
                <FlatList
                  data={items}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  numColumns={1}
                  contentContainerStyle={styles.gridContainer}
                  scrollEnabled={false}
                />
                {/*
                  <a
                      style={{ textDecoration: 'underline', color: '#fff' }}
                      href="https://www.oracle.com/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                  > 
                */}
              {/* </View> */}
          </SafeAreaView>
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
    color: '#fff',
    textAlign: 'center',
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

  // topRow: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginBottom: 10,
  //   paddingHorizontal: 10,
  //   marginTop: 10,
  // },
  
  // topButton: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 5,
  // },
  
  // topButtonText: {
  //   fontSize: 14,
  //   color: '#556B2F',
  // },

  productListingHeadingText: {
    fontSize: 40,
    color: '#556B2F',
    fontWeight: '600',
    marginTop: 10,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  // greenBar: {
  //   height: 20,
  //   backgroundColor: '#556B2F',
  //   marginTop: 25,
  //   width: '90%',
  //   borderRadius: 2,
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  // },

  exploreText: {
    fontSize: 14,
    color: '#556B2F',
  },

  backText: {
    position: 'absolute',
    left: 30,
    top: -22,
    fontSize: 14,
    color: '#556B2F',
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
  },

  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 5,
    marginTop: 25,
  },

  menuItem: {
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  menuItemSelected: {
    backgroundColor: 'olive',
  },

  menuText: {
    fontSize: 14,
    color: '#333',
  },

  menuTextSelected: {
    color: '#fff',
  },

  subText: {
    fontSize: 12,
    color: 'gray',
    paddingHorizontal: 10,
    marginBottom: 8,
    marginTop: 20,
  },

  gridContainer: {
    padding: 10,
  },

  gridItem: {
    flex: 1,
    // margin: 5,
    // backgroundColor: '#fff',
    // borderRadius: 10,
    // padding: 10,
    elevation: 3,
  },

  gridImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },

  descriptionText: {
    color: 'grey',
    fontSize: 14,
    marginBottom: 6,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    // backgroundColor: 'red',
    // textAlign: 'center',
    alignSelf: 'center'
  },

  // priceText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#333',
  // },

  // cartButton: {
  //   borderColor: 'olive',
  //   borderStyle: 'solid',
  //   borderCurve: 'circular',
  //   borderTopWidth: 2,
  //   borderLeftWidth: 2,
  //   borderRightWidth: 2,
  //   borderBottomWidth: 2,
  //   borderRadius: 20,
  //   padding: 8,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});

export default IntroductionView;
