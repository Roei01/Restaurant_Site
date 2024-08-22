import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Our Restaurant</Text>
      <Text style={styles.description}>
        Our restaurant offers the finest dishes crafted with fresh, local ingredients.
        Come and enjoy our friendly atmosphere and exceptional service.
      </Text>
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.contactText}>Phone: (123) 456-7890</Text>
      <Text style={styles.contactText}>Email: contact@restaurant.com</Text>
      <Button
        title="Visit Our Website"
        onPress={() => {
          // כאן אתה יכול להוסיף קוד להפעלת קישור לאתר או פעולה אחרת
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  contactText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
