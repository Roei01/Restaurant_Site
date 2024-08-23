import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const menuItems = [
  { id: '1', name: 'Pizza', description: 'Delicious cheese pizza', price: '$10', image: require('../../assets/images/pizza.jpg') },
  { id: '2', name: 'Burger', description: 'Juicy beef burger', price: '$8', image: require('../../assets/images/burger.jpg')  },
  { id: '3', name: 'Sushi', description: 'Original sushi', price: '$12', image: require('../../assets/images/sushi.jpg')  },
  { id: '4', name: 'Tacos', description: 'Spicy and crunchy tacos', price: '$6', image: require('../../assets/images/tacos.jpg')  },
];

const MenuScreen = () => {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
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
  itemDescription: {
    fontSize: 14,
    color: '#777',
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
  },
});

export default MenuScreen;
