import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import AddToCartButton from '@/components/AddToCartButton';  // ייבוא הכפתור
import { CartItem } from '../context/CartContext';

const menuItems: CartItem[] = [
  { id: '1', name: 'Pizza', price: 10, image: require('../../assets/images/pizza.jpg') },
  { id: '2', name: 'Burger', price: 8, image: require('../../assets/images/burger.jpg') },
  { id: '3', name: 'Sushi', price: 12, image: require('../../assets/images/sushi.jpg') },
  { id: '4', name: 'Tacos', price: 6, image: require('../../assets/images/tacos.jpg') },
];

const MenuScreen = () => {
  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.itemContainer}>
    {/* וודא שאין רווחים מיותרים בין התגיות */}
    <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <AddToCartButton item={item} />
    </View>
  </View>
  );

  return (
    <FlatList
      data={menuItems}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemDetails: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
  },
});

export default MenuScreen;
