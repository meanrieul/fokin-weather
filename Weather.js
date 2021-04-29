import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#536976", "#292E49"],
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#acb6e5", "#86fde8"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00416A", "#E4E5E6"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#4e54c8", "#8f94fb"],
  },
  Atmosphere: {
    iconName: "weather-sunset",
    gradient: ["#799F0C", "#292E49"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#5433FF", "#20BDFF", "#A5FECB"],
    title: "Sunny as fuck",
    subTitle: "let's go outside",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#334d50", "#cbcaa5"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#FFE000", "#799F0C"],
  },
  Dust: {
    iconName: "weather-cloudy-alert",
    gradient: ["#3E5151", "#DECBA4"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          color="white"
          size={96}
          name={weatherOptions[condition].iconName}
        />
        <Text style={styles.temp}>{temp}˚C</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  title: {
    color: "white",
    fontWeight: "300",
    fontSize: 44,
    marginBottom: 10,
  },
  subTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
