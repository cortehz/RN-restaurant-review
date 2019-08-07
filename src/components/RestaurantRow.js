import React, { Component, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import Star from "./stars";

const RestaurantRow = ({ place, index }) => {
  const [showInfo, setInfo] = useState(false);

  const infoPressed = () => {
    setInfo(!showInfo);
  };

  return (
    <View
      key={place.name}
      style={[
        styles.row,
        { backgroundColor: index % 2 === 0 ? "white" : "#f3f3f7" }
      ]}
    >
      <View style={styles.index}>
        <View>
          <Star rating={place.rating} />
        </View>
      </View>
      <View style={styles.restaurant}>
        <Text>{place.name}</Text>
        <Text
          style={{
            color: "#666"
          }}
        >
          {place.address}
        </Text>
      </View>
      <View style={styles.info}>
        <TouchableOpacity style={styles.button} onPress={infoPressed}>
          <Text>Info</Text>
        </TouchableOpacity>
      </View>
      {showInfo && (
        <View>
          <Text>restaurant info</Text>
          <Image
            source={{ uri: place.image }}
            style={{ flex: 1, height: 100 }}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  index: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  row: { flexDirection: "row", padding: 5 },
  info: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    minWidth: 50
  },
  restaurant: { flexDirection: "column", flex: 8 },
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f5f5f5"
  },
  button: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff"
  }
});

export default RestaurantRow;
