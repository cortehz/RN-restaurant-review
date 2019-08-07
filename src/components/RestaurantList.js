import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  Image,
  FlatList
} from "react-native";

import RestaurantRow from "./RestaurantRow";
import LogoImg from "./../images/logo.png";

const restaurants = [
  {
    name: "React Cafe 2",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 4
  },
  {
    name: "Fancy Home made Place",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 0.5
  },
  {
    name: "Chinasa Place",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 3
  },
  {
    name: "Mama Calabar's Arena",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 2.5
  },
  {
    name: "Fancy Campus",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5
  },
  {
    name: "Chinonso Kitchen",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5
  },
  {
    name: "Mama Lastaban",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5
  },
  {
    name: "Fancy Caban",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5
  },
  {
    name: "Chi Zanga",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5
  },
  {
    name: "Mama Calabar's Kitchen",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5
  },
  {
    name: "Chi Zone",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5
  },
  {
    name: "Mama Calabar's Home",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5
  },
  {
    name: "Fancy Place Go",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5
  },
  {
    name: "Chi Place Well",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5
  },
  {
    name: "Mission Chinese Food",
    address: "123 Twelveth Street",
    image:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5
  }
];

const RestaurantList = () => {
  const [value, setValue] = useState(null);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 40, alignItems: "center" }}>
        <Image source={LogoImg} />
      </View>
      <Text
        style={[
          styles.header,
          Platform.OS === "ios" ? { padding: 10, paddingTop: 20 } : {}
        ]}
      >
        Restaurant Review
      </Text>
      <TextInput
        placeholder="Live Search"
        style={styles.input}
        onChangeText={value => setValue(value)}
        value={value}
      />
      <FlatList
        data={restaurants.filter(place => {
          return (
            //show list only if search is blank OR if the lowercase of the restaurant
            //contains lower case of the search query
            !value || place.name.toLowerCase().indexOf(value.toLowerCase()) > -1
          );
        })}
        renderItem={({ item, index }) => (
          <RestaurantRow place={item} index={index} />
        )}
        keyExtractor={item => item.name}
        initialNumToRender={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 40,
    fontSize: 30,
    textAlign: "center",
    color: "#0066CC",
    fontWeight: "300"
  },
  index: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  row: { flexDirection: "row", padding: 5 },
  info: { flex: 1, alignItems: "center", justifyContent: "center" },
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
  }
});

export default RestaurantList;
