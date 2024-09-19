import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, FlatList, Picker } from "react-native";

// Mock data for demonstration
const mockData = {
  allTime: [
    { id: '1', name: 'User1', points: 5000 },
    { id: '2', name: 'User2', points: 4000 },
    { id: '3', name: 'User3', points: 3000 },
    // Add more mock data
  ],
  yearly: [
    { id: '1', name: 'User1', points: 1500 },
    { id: '2', name: 'User2', points: 1400 },
    { id: '3', name: 'User3', points: 1300 },
    // Add more mock data
  ],
  monthly: [
    { id: '1', name: 'User1', points: 500 },
    { id: '2', name: 'User2', points: 400 },
    { id: '3', name: 'User3', points: 300 },
    // Add more mock data
  ],
  weekly: [
    { id: '1', name: 'User1', points: 100 },
    { id: '2', name: 'User2', points: 80 },
    { id: '3', name: 'User3', points: 60 },
    // Add more mock data
  ]
};

export default function LeaderboardPage({ language }) {
  const [filter, setFilter] = useState('allTime');
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    // Update top users based on the selected filter
    setTopUsers(mockData[filter]);
  }, [filter]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.rank}>#{item.id}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.points}>{item.points} points</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <Picker
        selectedValue={filter}
        style={styles.picker}
        onValueChange={(itemValue) => setFilter(itemValue)}
      >
        <Picker.Item label="All Time" value="allTime" />
        <Picker.Item label="Yearly" value="yearly" />
        <Picker.Item label="Monthly" value="monthly" />
        <Picker.Item label="Weekly" value="weekly" />
      </Picker>
      <FlatList
        data={topUsers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rank: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    flex: 1,
  },
  points: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
