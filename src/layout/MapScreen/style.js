import { StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
}
  from 'react-native-responsive-dimensions'

const Style = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mapview: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100)
  },
  text: {
    color: "black"
  },
  topbarview: {
    position: 'absolute',
    top: 10,
    backgroundColor: 'white',
    width: responsiveScreenWidth(90),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center'
  },
  touchabletop: {
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  icon: {
    width: responsiveScreenWidth(8),
    height: responsiveScreenHeight(6)
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },
  textbold: {
    color: 'black',
    fontWeight: "700"
  },
  bottomview: {
    position: 'absolute',
    backgroundColor: "lightgrey",
    height: responsiveScreenHeight(40),
    bottom: -1,
    width: responsiveScreenWidth(100),
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  button: {
    backgroundColor: 'white',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(9),
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
})

export default Style