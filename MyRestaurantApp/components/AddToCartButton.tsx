import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useCart,CartItem } from '../app/context/CartContext';

type AddToCartButtonProps = {
  item: CartItem;
};

const AddToCartButton = ({ item }: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <View style={styles.buttonContainer}>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 5,
  },
});

export default AddToCartButton;
