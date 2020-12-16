import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity, SafeAreaView } from "react-native";
import { View, Button, Text, Image, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#F2F2F2" }}>
        {/* Front End */}
        <View>
          <Text style={styles.header}>Fron End</Text>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("About")}>
              <View style={styles.Box1}>
                <Image
                  source={require("../navigation/img/hordhac.png")}
                  style={{ width: 80, height: 80 }}
                />
                <Text style={styles.text}>1. Hordhac</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("About")}>
              <View style={styles.Box2}>
                <Image
                  source={require("../navigation/img/html.png")}
                  style={{ width: 80, height: 80 }}
                />
                <Text style={styles.text}>2. HTML5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("About")}
              style={{ paddingTop: 10 }}
            >
              <View style={styles.Box2}>
                <Image
                  source={require("../navigation/img/css.png")}
                  style={{ width: 80, height: 80 }}
                />
                <Text style={styles.text}>3. CSS3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("About")}
              style={{ paddingTop: 10 }}
            >
              <View style={styles.Box2}>
                <Image
                  source={require("../navigation/img/js.png")}
                  style={{ width: 80, height: 80 }}
                />
                <Text style={styles.text}>4. JavaScript</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("About")}
              style={{ paddingTop: 10 }}
            >
              <View style={styles.Box2}>
                <Image
                  source={require("../navigation/img/react.png")}
                  style={{ width: 80, height: 80 }}
                />
                <Text style={styles.text}>5. ReactJs</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("About")}
              style={{ paddingTop: 10 }}
            >
              <View style={styles.Box2}>
                <Image
                  source={require("../navigation/img/projects.png")}
                  style={{ width: 80, height: 80 }}
                />
                <Text style={styles.text}>6. Projects</Text>
              </View>
            </TouchableOpacity>
            {/* Back-End */}
            <View>
              <Text style={styles.header}>Back End</Text>
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("About")}
                  style={{ paddingTop: 10 }}
                >
                  <View style={styles.Box2}>
                    <Image
                      source={require("../navigation/img/node.png")}
                      style={{ width: 100, height: 80 }}
                    />
                    <Text style={styles.text}>1. NodeJS</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("About")}
                  style={{ paddingTop: 10 }}
                >
                  <View style={styles.Box2}>
                    <Image
                      source={require("../navigation/img/mongodb1.png")}
                      style={{ width: 60, height: 80 }}
                    />
                    <Text style={styles.text}>2. MongoDB</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("About")}
                  style={{ paddingTop: 10 }}
                >
                  <View style={styles.Box2}>
                    <Image
                      source={require("../navigation/img/firebase.png")}
                      style={{ width: 80, height: 80 }}
                    />
                    <Text style={styles.text}>3. Firebase</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("About")}
                  style={{ paddingTop: 10, marginBottom: 10 }}
                >
                  <View style={styles.Box2}>
                    <Image
                      source={require("../navigation/img/python.png")}
                      style={{ width: 80, height: 80 }}
                    />
                    <Text style={styles.text}>4. Python</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Box1: {
    width: 166,
    height: 150,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Box2: {
    width: 166,
    height: 150,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    paddingTop: 10,
  },
  header: {
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 15,
  },
});

export default Home;
