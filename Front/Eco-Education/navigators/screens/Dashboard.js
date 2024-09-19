import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

const DashboardPage = () => {
  // Data for number of participants per year
  const participantData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        data: [300, 450, 600, 700, 850],
        color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // Line color
      },
    ],
  };

  // Data for ecosystem improvements per year
  const ecosystemData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        data: [50, 100, 200, 350, 500],
        color: (opacity = 1) => `rgba(53, 162, 235, ${opacity})`, // Line color
      },
    ],
  };

  // Example of additional graph - Category distribution (bar chart)
  const eventCategoryData = {
    labels: ['Technology', 'Music', 'Art', 'Entrepreneurship', 'Health', 'Food'],
    datasets: [
      {
        data: [150, 300, 100, 50, 200, 500],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Number of Participants per Year</Text>
        <LineChart
          data={participantData}
          width={Dimensions.get('window').width - 30} // Width of the chart
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Ecosystem Improvement over Time</Text>
        <LineChart
          data={ecosystemData}
          width={Dimensions.get('window').width - 30}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Event Categories Distribution</Text>
        <BarChart
          data={eventCategoryData}
          width={Dimensions.get('window').width - 30}
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>

    </ScrollView>
  );
};

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#f5f5f5',
  backgroundGradientTo: '#f5f5f5',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  chartContainer: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  chart: {
    borderRadius: 10,
  },
});

export default DashboardPage;
