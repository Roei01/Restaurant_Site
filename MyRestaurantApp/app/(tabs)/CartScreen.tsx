import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useCart,CartItem } from '../context/CartContext';


const CartScreen = () => {
  const { cartItems, removeFromCart, totalAmount } = useCart();

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Button title="Remove" onPress={() => removeFromCart(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
  data={cartItems}
  renderItem={renderItem}
  keyExtractor={(item, index) => item.id + index} // שימוש באינדקס כגיבוי
  ListFooterComponent={() => (
    <Text style={styles.total}>Total: ${totalAmount}</Text>
  )}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'right',
  },
});

export default CartScreen;
