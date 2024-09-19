import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

// Sample data for products
const products = [
  {
    id: '1',
    name: 'Eco Water Bottle',
    image: 'https://flaske.com/cdn/shop/articles/Reusable_Water_Bottles_as_Eco-Friendly_Corporate_Gifts_1200x1200.jpg?v=1603864739', // Replace with actual image URL
    price: 150,
    rating: 4.5,
    description: 'A reusable water bottle made from eco-friendly materials.',
  },
  {
    id: '2',
    name: 'Organic Tote Bag',
    image: 'https://i.etsystatic.com/25519571/r/il/157b76/3752030588/il_570xN.3752030588_d4f0.jpg', // Replace with actual image URL
    price: 100,
    rating: 4.0,
    description: 'An organic cotton tote bag for your daily groceries.',
  },
  {
    id: '3',
    name: 'Biodegradable Phone Case',
    image: 'https://www.mmore.net/cdn/shop/products/Biodegradable-Eco-Friendly-Phone-Case-Natural-White.jpg?v=1637827443', // Replace with actual image URL
    price: 200,
    rating: 4.8,
    description: 'A phone case made from biodegradable materials.',
  },
  {
    id: '4',
    name: 'Eco-Friendly Notebook',
    image: 'https://m.media-amazon.com/images/I/81a03ciX-dL._AC_UF894,1000_QL80_.jpg', // Replace with actual image URL
    price: 120,
    rating: 4.2,
    description: 'A notebook made from recycled paper.',
  },
  {
    id: '5',
    name: 'Solar Charger',
    image: 'https://images-cdn.ubuy.co.in/65cc3cb75b8e111e043a698a-bigblue-10w-etfe-solar-panel-charger.jpg', // Replace with actual image URL
    price: 250,
    rating: 4.6,
    description: 'A solar-powered charger for your devices.',
  },
  {
    id: '6',
    name: 'Reusable Straw Set',
    image: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/8705701/1.jpg?1959', // Replace with actual image URL
    price: 80,
    rating: 4.4,
    description: 'A set of reusable straws made from stainless steel.',
  },
  {
    id: '7',
    name: 'Eco Yoga Mat',
    image: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/153384/1.jpg?2218', // Replace with actual image URL
    price: 180,
    rating: 4.7,
    description: 'A yoga mat made from natural rubber.',
  },
  {
    id: '8',
    name: 'Compost Bin',
    image: 'https://example.com/product8.jpg', // Replace with actual image URL
    price: 300,
    rating: 4.3,
    description: 'A compost bin for your organic waste.',
  },
  {
    id: '9',
    name: 'Organic Coffee Beans',
    image: 'https://example.com/product9.jpg', // Replace with actual image URL
    price: 150,
    rating: 4.9,
    description: 'Coffee beans sourced from organic farms.',
  },
  {
    id: '10',
    name: 'Eco-Friendly Lunch Box',
    image: 'https://example.com/product10.jpg', // Replace with actual image URL
    price: 130,
    rating: 4.1,
    description: 'A lunch box made from sustainable materials.',
  },
];

const RedeemPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.productPrice}>
          <FontAwesome6 name="coins" size={20} color="black" />
          <Text style={styles.priceText}>{item.price} Points</Text>
        </View>
        <Text style={styles.productRating}>Rating: {item.rating} / 5</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for products..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3} // Display 3 products per row
        columnWrapperStyle={styles.row}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  productImage: {
    width: 100, // Set a specific width
    height: 100, // Set a specific height
    borderRadius: 10,
    marginBottom: 10,
  },
  productDetails: {
    alignItems: 'center',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  productRating: {
    fontSize: 12,
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
});

export default RedeemPage;
