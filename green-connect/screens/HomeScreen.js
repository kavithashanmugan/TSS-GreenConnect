import React from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet } from 'react-native';

export default function HomeScreen() {
  // Sample data for featured activities or parks
  const featuredData = [
    {
      id: '1',
      title: 'Nature Walk',
      image: ('TSS-GreenConnect/green-connect/images/Nature Walk.jpg'),
      description: 'Enjoy a peaceful walk in the park surrounded by nature.',
    },
    {
      id: '2',
      title: 'Yoga in the Park',
      image: ('TSS-GreenConnect/green-connect/images/Yoga in the Park.jpg'),
      description: 'Join our yoga sessions in the serene environment of the park.',
    },
    // Add more featured items as needed
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Image source={("TSS-GreenConnect/green-connect/images/Logo.jpeg")} style={styles.logo} />

      {/* Search Bar */}
      <TextInput
        placeholder="Search for parks or activities"
        style={styles.searchBar}
      />

      {/* Featured Activities or Parks */}
      <Text style={styles.sectionTitle}>Featured Activities/Parks</Text>
      <FlatList
        horizontal
        data={featuredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.featuredItem}>
            {/* <Image source={item.image} style={styles.featuredImage} /> */}
            <Text style={styles.featuredTitle}>{item.title}</Text>
            <Text style={styles.featuredDescription}>{item.description}</Text>
          </View>
        )}
      />

      {/* ... Other parts of your home page ... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  logo: {
    width: 150,
    height: 50,
    alignSelf: 'center',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  featuredItem: {
    margin: 10,
    width: 200,
  },
  featuredImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  featuredTitle: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  featuredDescription: {
    color: '#888',
  },
});
