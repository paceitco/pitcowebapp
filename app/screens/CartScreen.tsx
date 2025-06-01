import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
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

export const CartScreen = ({ navigation }: any) => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const defaultCurrency = 'R'; // TODO: Currency enum & exchange rate
  const defaultDeliveryFee = 28; // TODO: Shouldn't be hardcoded

  const [cartItems, setCartItems] = useState([] as any);

  const refreshCart = () => {
    const items = CartService.getCartItems();
    setCartItems(items);
  };

  const handleAddToCart = (item: any) => {
    CartService.addItemToCart(item);
    refreshCart();
  };

  const handleRemoveFromCart = (item: any) => {
    CartService.removeItemFromCart(item);
    refreshCart();
  };
  
  const handleRemoveAllRelatedFromCart = (item: any) => {
    CartService.removeAllRelatedItemsFromCart(item);
    refreshCart();
  };

  useFocusEffect(
    useCallback(() => {
      refreshCart();
    }, [])
  );
  
  return (
    <ScrollView contentContainerStyle={[styles.container, isTablet && styles.containerTablet]}>
        <SafeAreaView  style={styles.topRow}>
            <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('Explore')}>
              <Ionicons name="chevron-back" size={24} color="#556B2F" />
            </TouchableOpacity>
        </SafeAreaView>

        <Text style={styles.cartText}>Cart</Text>
        <SafeAreaView  style={styles.greenBar} />

        {
            cartItems.map((item: any) => (
                <SafeAreaView  key={item.id} style={[styles.cartItem, isTablet && styles.cartItemTablet]}>
                    <Image source={{ uri: item.image }} style={styles.cartImage} />
                    <SafeAreaView style={styles.cartDetails}>
                        <Text style={styles.itemName}>{item.description}</Text>
                        {/* <Text style={styles.itemPrice}>{defaultCurrency}{item.price}</Text> */}
                        <Text style={styles.itemPrice}>{defaultCurrency}{parseFloat((item.price * item.quantity).toFixed(2))}</Text>

                        <SafeAreaView  style={styles.controlsRow}>
                            <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveAllRelatedFromCart(item)}>
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </TouchableOpacity>

                            <SafeAreaView style={styles.qtyControls}>
                                <TouchableOpacity style={styles.qtyButton} onPress={() => handleRemoveFromCart(item)}>
                                <Text style={styles.qtyText}>−</Text>
                                </TouchableOpacity>
                                <Text style={styles.qtyNumber}>{item.quantity}</Text>
                                <TouchableOpacity style={styles.qtyButton} onPress={() => handleAddToCart(item)}>
                                <Text style={styles.qtyText}>+</Text>
                                </TouchableOpacity>
                            </SafeAreaView>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
            ))
        }
        
        <SafeAreaView  style={styles.promoContainer}>
            <TextInput
                style={styles.promoInput}
                placeholder="Add your promo code"
                placeholderTextColor="#6c6c6c"
            />

            <SafeAreaView  style={styles.divider} />
            
            <TouchableOpacity style={styles.promoButton}>
                <Text style={styles.promoButtonText}>Apply</Text>
            </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={styles.subtotalRow}>
            <Text style={styles.subtotalPriceText}>Sub total</Text>
            <Text style={styles.subtotalPriceText}>
                {defaultCurrency} 
                {
                    parseFloat(cartItems.reduce((sum: number, currentItem: any) => sum + (currentItem.price * currentItem.quantity), 0)).toFixed(2)
                }
            </Text>
        </SafeAreaView>
        
        <SafeAreaView style={styles.deliveryPriceRow}>
            <Text style={styles.deliveryPriceText}>Delivery</Text>
            <Text style={styles.deliveryPriceText}>
                {defaultCurrency} 
                {defaultDeliveryFee}
            </Text>
        </SafeAreaView>

        <SafeAreaView style={styles.totalRow}>
            <Text style={styles.totalPriceText}>Total</Text>
            <Text style={styles.totalPriceText}>
                {defaultCurrency} 
                {
                    parseFloat(cartItems.reduce((sum: number, currentItem: any) => sum + (currentItem.price * currentItem.quantity), 0) + defaultDeliveryFee).toFixed(2)
                }
            </Text>
        </SafeAreaView>

        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainTabs')}>
            <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fdfaf6',
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
    color: '#fff',
    fontSize: 18,
    fontWeight: 'regular',
    textAlign: 'center',
  },
});

export default CartScreen;
