import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import translations from "../../components/translations";

const language = 'US'; // Change this dynamically based on user preference

export default function HomePage({ language }) {
  const t = translations[language] || translations.RU;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder={t.searchPlaceholder}
        />
      </View>

      {/* Trending Events */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{t.trendingEventsTitle}</Text>
        <ScrollView horizontal>
          {/* Add individual trending event items here */}
          <View style={styles.eventCard}>
            <Image
              source={{ uri: 'https://gcmos.ru/_next/static/media/hero-image-1.33eb1952.png' }} // Replace with actual image URL
              style={styles.eventImage}
            />
            <Text style={styles.eventTitle}>{t.event1Title}</Text>
          </View>
          <View style={styles.eventCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
              style={styles.eventImage}
            />
            <Text style={styles.eventTitle}>{t.eventTitle} 2</Text>
          </View>
          <View style={styles.eventCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
              style={styles.eventImage}
            />
            <Text style={styles.eventTitle}>{t.eventTitle} 3</Text>
          </View>
        </ScrollView>
      </View>

      {/* Events Near You */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{t.eventsNearYouTitle}</Text>
        <ScrollView horizontal>
          {/* Add individual event near you items here */}
          <View style={styles.eventCard}>
            <Image
              source={{ uri: 'https://gcmos.ru/_next/static/media/playground.70d63c0a.png' }} // Replace with actual image URL
              style={styles.eventImage}
            />
            <Text style={styles.eventTitle}>{t.event1Title}</Text>
          </View>
          <View style={styles.eventCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
              style={styles.eventImage}
            />
            <Text style={styles.eventTitle}>{t.eventTitle} Near 2</Text>
          </View>
          <View style={styles.eventCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
              style={styles.eventImage}
            />
            <Text style={styles.eventTitle}>{t.eventTitle} Near 3</Text>
          </View>
        </ScrollView>
      </View>

      {/* Redeem Point Shop */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{t.redeemPointShopTitle}</Text>
        <ScrollView horizontal>
          {/* Add individual redeemable items here */}
          <View style={styles.eventCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
              style={styles.eventImage}
            />
            <Text style={styles.eventTitle}>{t.redeemItemTitle} 1</Text>
          </View>
          <View style={styles.eventCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
              style={styles.eventImage}
            />
            <Text style={styles.eventTitle}>{t.redeemItemTitle} 2</Text>
          </View>
          <View style={styles.eventCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
              style={styles.eventImage}
            />
            <Text style={styles.eventTitle}>{t.redeemItemTitle} 3</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBarContainer: {
    padding: 20,
    alignItems: 'center',
  },
  searchBar: {
    width: '80%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
  },
  sectionContainer: {
    padding: 20,
    alignItems: 'flex-start', // Align items to the top-left
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventCard: {
    width: 150,
    height: 200, // Adjusted height to accommodate the image
    backgroundColor: '#fff',
    marginRight: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 150, // Adjust height as needed
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRadius: 15,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    paddingBottom: 10,
  },
});
