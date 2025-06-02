import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import CartService from '../services/CartService';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import MapScreen from './MapScreen';

const defaultCurrency = 'R';
const MEAT_CATEGORIES = ['All', 'Beef', 'Seafood', 'Pork', 'Chicken'];

export const PetProjectsView = ({ navigation, style }: any) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(Object);

  const handleAddToCart = (newItem: any) => {
    CartService.addItemToCart(newItem);
  };

  const fetchPetProjects = async (category: string) => {
    setLoading(true);
    try {
      // const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      // const data = await response.json();
      // const formatted = data?.meals?.slice(0, 12).map((meal: any, i: number) => ({
      const formatted = [
        {
          id: 'ctf-thumbnail',
          image: 'https://image.ibb.co/iHVTMT/ctf600x375_15fps.gif',
          description: 'Capture The Flag Game (3rd Year Computer Science Project)',
          downloadUrl: '/assets/media/executables/capture-the-flag.zip',
        },
        {
          id: 'platformer-level-editor-thumbnail',
          image: 'https://i.ibb.co/D9m4t93/c700x438-30fps.gif',
          description: 'Platformer Game Level Editor (2nd Year Computer Science Project)',
          downloadUrl: '/assets/media/executables/platformer-level-editor.zip',
        },
        {
          id: 'arduino-thumbnail',
          image: '/assets/media/projects/rc-steering-poc.png',
          description: 'Arduino Mega Stuff',
          downloadUrl: 'https://drive.google.com/file/d/1x2RGKhvKIErYOzhJkaq4uxwI_6WfTQFp/preview',
        },
        {
          id: 'rc-car-thumbnail',
          image: 'https://i.ibb.co/D9m4t93/c700x438-30fps.gif',
          description: 'RC Car Project',
          downloadUrl: 'https://drive.google.com/file/d/1uEUQSd3nP1A1ky5FIsFp18r6Y7qM5xS0/preview',
        },
        {
          id: 'rc-car-steering-thumbnail',
          image: 'https://i.ibb.co/D9m4t93/c700x438-30fps.gif',
          description: 'Makeshift Steering System for RC car',
          downloadUrl: 'https://drive.google.com/file/d/1LmSRjo13e7qKwGtfdDrCESt_LZ6EDkj7/preview',
        },
        {
          id: 'dashcam-thumbnail',
          image: 'https://i.ibb.co/D9m4t93/c700x438-30fps.gif',
          description: 'Makeshift dashcam using a generic IP cam & 9v battery',
          downloadUrl: 'https://drive.google.com/file/d/1Xw3gJk5i_csiskaKGK4pw-G3UHdwl3UY/preview',
        },
      ];
      setItems(formatted);
    } catch (error) {
      console.error('Error fetching meals:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPetProjects(selectedCategory);
  }, [selectedCategory]);

  const renderItem = ({ item }: any) => (
    <SafeAreaView style={styles.gridItem}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setModalContent(item);
          setModalVisible(true);
          }}>
          <Image source={{ uri: item.image }} style={styles.gridImage} />
          <SafeAreaView style={styles.projectDescriptionRow}>
            <Text style={styles.descriptionText}>{item.description}</Text>
            {/* <TouchableOpacity style={styles.cartButton} onPress={() => handleAddToCart(item)}> */}
            <TouchableOpacity style={styles.cartButton} onPress={() => {}} >
              <Ionicons name="save-outline" size={18} color="olive" />
            </TouchableOpacity>    
          </SafeAreaView>
      </Pressable>
    </SafeAreaView>
  );
  
  const renderModalItem = () => (
    <SafeAreaView style={styles.gridItem}>
        <Image source={{ uri: modalContent.image }} style={styles.gridImage} />
        <Text style={styles.descriptionText}>{modalContent.description}</Text>
        <SafeAreaView style={styles.projectDescriptionRow}>
          {/* <TouchableOpacity style={styles.cartButton} onPress={() => handleAddToCart(item)}> */}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
          <TouchableOpacity style={styles.cartButton} onPress={ () => window.open(modalContent?.downloadUrl) }>
            <Ionicons name="save-outline" size={18} color="olive" />
          </TouchableOpacity>    
        </SafeAreaView>
    </SafeAreaView>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView  style={[{ paddingTop: 50 }, style]}>
        {/* <Text style={styles.subText}>Based on your selection</Text> */}
        {/* <Text style={styles.heading}>Pet Projects and Proof of Concepts</Text> */}
        <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Pet Projects and Proof of Concepts</h2>

        <SafeAreaView style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {/* <Text style={styles.modalText}>Hello World!</Text> */}
                {renderModalItem()}
              </View>
            </View>
          </Modal>
          {/* <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable> */}
        </SafeAreaView>

        {loading ? (
          <ActivityIndicator size="large" color="olive" style={{ marginTop: 20 }} />
        ) : (
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            contentContainerStyle={styles.gridContainer}
            scrollEnabled={false}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'lightgrey', // '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  productListingHeadingText: {
    fontSize: 40,
    color: '#556B2F',
    fontWeight: '600',
    marginTop: 10,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  greenBar: {
    height: 20,
    backgroundColor: '#556B2F',
    marginTop: 25,
    width: '90%',
    borderRadius: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

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
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
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

  projectDescriptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  projectDescriptionText: {
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
});

export default PetProjectsView;
