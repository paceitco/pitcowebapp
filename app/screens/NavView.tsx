import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const MENU_Y_DEFAULT = -220;
const MENU_ANIMATE_TO_Y = 10;

export const NavView = ({ navigation, style }: any) => {
  const slideAnim = useRef(new Animated.Value(MENU_Y_DEFAULT)).current;
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuVisible ? MENU_ANIMATE_TO_Y : MENU_Y_DEFAULT,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  return (
    <Animated.View
      style={[
        styles.header,
        {
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <LinearGradient
        colors={['#56b4d3', '#348f50']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        {/* <View style={styles.row}>
          <TouchableOpacity style={styles.hiddenButton}>
            <Text style={styles.buttonText}>Background</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hiddenButton}>
            <Text style={styles.buttonText}>Other Interests</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setMenuVisible(prev => !prev)}
          >
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>

          <Image source={{ uri: "/assets/media/navbar/psybr-tech-sec.png" }} style={styles.profileImage} />

          <TouchableOpacity style={[styles.navButton, { backgroundColor: 'green' }]}>
            <Text style={styles.buttonText}>Contact Me</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 300,
    // backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    elevation: 10,
    zIndex: 100,
    paddingHorizontal: 10,
    paddingTop: 20,
    // top: '0px',
    // width: '100%',
    // position: 'absolute',
    // height: '300px',
    boxShadow: '#000 0px 15px 30px',
    // background: linear-gradient(90deg, #56b4d3, #348f50),
    // borderBottom: '1px solid #fff',
    // max-width: 100%;
    // z-index: 2;
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  hiddenButton: {
    backgroundColor: '#007bff',
    width: 110,
    height: 70,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0, // hidden
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(128),
  },
  navButton: {
    backgroundColor: '#007bff',
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(40),
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
  },
  profileImage: {
    top: verticalScale(7),
    width: 100,
    height: 100,
    // backgroundColor: '#ccc', // Placeholder
    // backgroundImage: 'url(/assets/media/navbar/psybr-tech-sec.png)',
    borderRadius: 50,
  },
});

export default NavView;
