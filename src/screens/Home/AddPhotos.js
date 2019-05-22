import React, { Component } from "react";
import { connect } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  View,
  Text
} from "react-native";

const styles = StyleSheet.create({
  btnFlat: {
    backgroundColor: "white",
    color: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4,
    borderRadius: 0,
    borderRightWidth: 0.3,
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
    borderTopColor: "gray",
    borderRightColor: "gray",
    borderBottomColor: "gray",
    shadowOpacity: 0
  }
});

export class AddPhotos extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton} style={styles.btnFlat}>
        <Entypo name="images" size={16} color="#10bc52" />
        <Text style={{ color: "#673AB7", marginLeft: 10 }}>PHOTOS</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPhotos);
