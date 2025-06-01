import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import CartService from '../services/CartService';
// import MapScreen from './MapScreen';

const defaultCurrency = 'R';
const MEAT_CATEGORIES = ['All', 'Beef', 'Seafood', 'Pork', 'Chicken'];

export const FavouritesScreen = ({ navigation, style }: any) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = (newItem: any) => {
    CartService.addItemToCart(newItem);
  };

  const fetchCategoryMeals = async (category: string) => {
    setLoading(true);
    try {
      if (category === 'All') {
        setItems(Array.from({ length: 12 }, (_, i) => ({
          id: i.toString(),
          image: `https://picsum.photos/200?random=${i}`,
          description: `Item description ${i + 1}`,
          price: (Math.random() * 100 + 10).toFixed(2),
        })));
      } else {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await response.json();
        const formatted = data?.meals?.slice(0, 12).map((meal: any, i: number) => ({
          id: meal.idMeal,
          image: meal.strMealThumb,
          description: meal.strMeal,
          price: (Math.random() * 100 + 10).toFixed(2),
        }));
        setItems(formatted);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryMeals(selectedCategory);
  }, [selectedCategory]);

  const renderItem = ({ item }: any) => (
    <SafeAreaView style={styles.gridItem}>
      <Image source={{ uri: item.image }} style={styles.gridImage} />
      <Text style={styles.descriptionText}>{item.description}</Text>
      <SafeAreaView style={styles.priceRow}>
        <Text style={styles.priceText}>{defaultCurrency} {item.price}</Text>
        <TouchableOpacity style={styles.cartButton} onPress={() => handleAddToCart(item)}>
          <Ionicons name="cart-outline" size={18} color="olive" />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );

  return (
    <SafeAreaView  style={[{ paddingTop: 50, marginTop: 40 }, style]}>
      {/* <SafeAreaView  style={styles.topRow}>
        <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('Register')}>
          <Ionicons name="chevron-back" size={24} color="#556B2F" />
          <Text style={styles.topButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('MainTabs')}>
          <Text style={styles.topButtonText}>Filter</Text>
          <Ionicons name="options-outline" size={24} color="#556B2F" />
        </TouchableOpacity>
      </SafeAreaView>

      <Text style={styles.productListingHeadingText}>Meat</Text>
      <SafeAreaView  style={styles.greenBar} />

      <View>
        <Text style={styles.topButtonText}>Map</Text>
        <MapScreen />
      </SafeAreaView> */}

      {/* <SafeAreaView  style={styles.menuRow}>
        {MEAT_CATEGORIES.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.menuItem,
              selectedCategory === item && styles.menuItemSelected,
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text
              style={[
                styles.menuText,
                selectedCategory === item && styles.menuTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView> */}

      {/* <Text style={styles.subText}>Based on your selection</Text>
      <Text style={styles.heading}>Our products</Text> */}

      {loading ? (
        <ActivityIndicator size="large" color="olive" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.gridContainer}
          scrollEnabled={false}
        />
      )}
    </SafeAreaView>
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

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});

export default FavouritesScreen;
