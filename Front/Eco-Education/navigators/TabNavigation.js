import React, { useState, useMemo, useRef } from "react";
import { View, Text, Pressable, Dimensions, SafeAreaView, Animated } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import HomePage from "./screens/Home";
import EventsPage from "./screens/Events";
import RedeemPage from "./screens/Redeem";
import DashboardPage from "./screens/Dashboard";
import LeaderboardPage from "./screens/Leaderboard";
import translations from "../components/translations";

// Main TabView Component
const TabNavigator = ({ language }) => {
  const [index, setIndex] = useState(0);
  const routes = useMemo(() => {
    const t = translations[language] || translations.US; // Fallback to US if language is not found
    return [
      { key: "home", title: t.Home },
      { key: "events", title: t.Events },
      { key: "dashboard", title: t.Dashboard },
      { key: "leaderboard", title: t.Leaderboard },
    ];
  }, [language]);

  const renderScene = useMemo(() => {
    return SceneMap({
      home: () => <HomePage language={language} />,
      events: () => <EventsPage language={language} />,
      dashboard: () => <DashboardPage language={language} />,
      leaderboard: () => <LeaderboardPage language={language} />,
    });
  }, [language]); // Dependency on language ensures SceneMap updates

  // Animated Value for hover effect
  const animatedValues = useRef(routes.map(() => new Animated.Value(1))).current;

  // Hover effect function
  const animateHover = (index, toValue) => {
    Animated.timing(animatedValues[index], {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }} // Ensure proper layout
        tabBarPosition="top"
        renderTabBar={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 40,
              backgroundColor: "grey",
              alignSelf: "center",
              borderRadius: 10,
              opacity: 0.8,
            }}
          >
            {routes.map((route, i) => {
              const scale = animatedValues[i].interpolate({
                inputRange: [0.9, 1],
                outputRange: [0.9, 1],
              });
              const backgroundColor = index === i ? '#153F4B' : 'transparent'; // Highlight selected tab

              return (
                <Pressable
                  key={route.key}
                  onPress={() => setIndex(i)}
                  onPressIn={() => animateHover(i, 0.9)}
                  onPressOut={() => animateHover(i, 1)}
                  style={{ padding: 10, backgroundColor, borderRadius: 10, paddingHorizontal: 20 }}
                >
                  <Animated.View style={{ transform: [{ scale }] }}>
                    <Text style={{ color: index === i ? 'white' : 'black' }}>{route.title}</Text>
                  </Animated.View>
                </Pressable>
              );
            })}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default TabNavigator;
