import React, { useState } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const eventsData = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    date: '2024-10-01',
    time: '10:00 AM',
    place: 'Tech Park, City Center',
    category: 'Technology',
    participants: 120,
    image: 'https://images.tech.co/wp-content/uploads/2024/01/22094704/EPN_0539-3-1-e1705934863400.jpg', // Replace with your image URLs
  },
  {
    id: '2',
    title: 'Music Festival',
    date: '2024-09-25',
    time: '4:00 PM',
    place: 'Greenfield Park',
    category: 'Music',
    participants: 300,
    image: 'https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg?cs=srgb&dl=pexels-rahulp9800-3052360.jpg&fm=jpg',
  },
  {
    id: '3',
    title: 'Art Exhibition',
    date: '2024-11-10',
    time: '2:00 PM',
    place: 'Art Gallery, Downtown',
    category: 'Art',
    participants: 75,
    image: 'https://d197irk3q85upd.cloudfront.net/catalog/product/e/x/exhibition_banner_1.jpg',
  },
  {
    id: '4',
    title: 'Startup Pitch Event',
    date: '2024-09-30',
    time: '9:00 AM',
    place: 'Business Hub, Silicon Valley',
    category: 'Entrepreneurship',
    participants: 50,
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*3dyIWSm1sKew82I3mhEpXA.jpeg',
  },
  {
    id: '5',
    title: 'Health & Wellness Seminar',
    date: '2024-12-05',
    time: '11:00 AM',
    place: 'Health Center, Uptown',
    category: 'Health',
    participants: 200,
    image: 'https://img1.wsimg.com/isteam/ip/bedb9548-cdf2-42ca-89f8-a5940c48fbad/BanksiaPanorama4.PNG/:/rs=w:1240,h:620,cg:true,m/cr=w:1240,h:620',
  },
  {
    id: '6',
    title: 'Food Truck Festival',
    date: '2024-10-20',
    time: '5:00 PM',
    place: 'Central Park',
    category: 'Food',
    participants: 500,
    image: 'https://static.vecteezy.com/system/resources/previews/020/868/354/non_2x/street-food-festival-poster-with-people-on-fair-free-vector.jpg',
  },
];

const EventsPage = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const handleRegister = (eventId) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents([...registeredEvents, eventId]);
      alert('You have registered for the event!');
    } else {
      alert('You are already registered for this event.');
    }
  };

  const renderEvent = ({ item }) => (
    <View style={styles.eventContainer}>
      <Image source={{ uri: item.image }} style={styles.eventImage} />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity onPress={() => handleRegister(item.id)}>
          <Icon name="checkmark-circle-outline" size={25} color="green" />
        </TouchableOpacity>
      </View>

      <Text style={styles.details}>
        <Icon name="calendar-outline" size={15} /> {item.date}, {item.time}
      </Text>
      <Text style={styles.details}>
        <Icon name="location-outline" size={15} /> {item.place}
      </Text>
      <Text style={styles.details}>
        <Icon name="pricetag-outline" size={15} /> {item.category}
      </Text>
      <Text style={styles.details}>
        <Icon name="people-outline" size={15} /> {item.participants} participants
      </Text>
      <Button
        title="Register"
        onPress={() => handleRegister(item.id)}
        color={registeredEvents.includes(item.id) ? "gray" : "#007AFF"}
        disabled={registeredEvents.includes(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Upcoming Events</Text>
      <FlatList
        data={eventsData}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  eventContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
});

export default EventsPage;
