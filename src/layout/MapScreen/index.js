import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import Style from "./style";

const MapScreen = () => {
  const [selectedShop, setSelectedShop] = useState(null);
  const [markerCoordinate, setMarkerCoordinate] = useState(null);

  const openDetailsView = (shop, coordinate) => {
    setSelectedShop(shop);
    setMarkerCoordinate(coordinate);
  };

  const CustomMarker = () => {
    return (
      <View style={{ width: responsiveScreenHeight(5), height: responsiveScreenHeight(3) }}>
        <Image
          source={require('../../../src/assets/images/printer.png')}
          style={{ width: '100%', height: '100%', resizeMode: "center" }}
        />
      </View>
    );
  };
  return (
    <View style={Style.maincontainer}>
      <MapView style={Style.mapview}
        userInterfaceStyle={'light'}
        toolbarEnabled={true}
        zoomTapEnabled
        zoomEnabled={true}
        showsUserLocation={false}
        showsCompass={true}
        showsMyLocationButton={false}
        scrollEnabled={true}
        rotateEnabled={true}
        mapPadding={{ top: 0, right: 0, left: 0 }}
        initialRegion={{
          latitude: 33.6844,
          longitude: 73.0479,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 33.6844, longitude: 73.0479 }}
          onPress={(e) => openDetailsView({ title: "Momin Printer Shop", description: "New Printer available" }, e.nativeEvent.coordinate)}
        >
          <CustomMarker />
        </Marker>
        <Marker
          coordinate={{ latitude: 33.7087, longitude: 73.0397 }}
          onPress={(e) => openDetailsView({ title: "Ahsan Printer Shop", description: "New Printer available" }, e.nativeEvent.coordinate)}
        >
          <CustomMarker />
        </Marker>
        <Marker
          coordinate={{ latitude: 33.7297, longitude: 73.0746 }}
          onPress={(e) => openDetailsView({ title: "Salman Printer Shop", description: "New Printer available" }, e.nativeEvent.coordinate)}
        >
          <CustomMarker />
        </Marker>
        <Marker
          coordinate={{ latitude: 33.7077, longitude: 73.0498 }}
          onPress={(e) => openDetailsView({ title: "Centaurus Printer Shop", description: "New Printer available" }, e.nativeEvent.coordinate)}
        >
          <CustomMarker />
        </Marker>
      </MapView>
      {selectedShop && markerCoordinate && (
        <View style={{
          position: 'absolute',
          alignItems: "center",
          justifyContent: "center",
          left: markerCoordinate.x,
          top: markerCoordinate.y,
          backgroundColor: 'white',
          height: responsiveScreenHeight(6),
          width: responsiveScreenWidth(50),
          borderRadius: 5
        }}>
          <Text style={Style.text}>{selectedShop.title}</Text>
          <Text style={Style.text}>{selectedShop.description}</Text>
          <TouchableOpacity onPress={() => setSelectedShop(null)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={Style.topbarview}>
        <TouchableOpacity style={Style.touchabletop}>
          <View style={Style.icon}>
            <Image source={require('../../../src/assets/images/drawer.png')} style={Style.image} />
          </View>
        </TouchableOpacity>
        <View onPress={() => console.log('Menu item 2 pressed')}>
          <Text style={Style.text}>Good Evening,Ali</Text>
        </View>
        <TouchableOpacity style={Style.touchabletop}>
          <View style={Style.icon}>
            <Image source={require('../../../src/assets/images/man.png')} style={Style.image} />
          </View>
        </TouchableOpacity>
      </View>
      {/* <View style={Style.touchabletop}>
        <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
          <View style={{ width: responsiveScreenWidth(8), height: responsiveScreenHeight(6) }}>
            <Image source={require('../../../src/assets/images/man.png')} style={Style.image} />
          </View>
        </TouchableOpacity>
      </View> */}

      <View style={Style.bottomview}>
        <TouchableOpacity style={Style.button}>
          <View style={Style.icon}>
            <Image source={require('../../../src/assets/images/google-docs.png')} style={Style.image} />
          </View>
          <View style={{ width: responsiveScreenWidth(70) }}>
            <Text style={Style.textbold}>Print Document</Text>
            <Text style={Style.text}>Select a file from your phone to print</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={Style.button}>
          <View style={Style.icon}>
            <Image source={require('../../../src/assets/images/qr-code-scan.png')} style={Style.image} />
          </View>
          <View style={{ width: responsiveScreenWidth(70) }}>
            <Text style={Style.textbold}>PhotoCopy</Text>
            <Text style={Style.text}>Scan a document with your phone to print</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={Style.button}>
          <View style={Style.icon}>
            <Image source={require('../../../src/assets/images/gallery.png')} style={Style.image} />
          </View>
          <View style={{ width: responsiveScreenWidth(70) }}>
            <Text style={Style.textbold}>Print Photo</Text>
            <Text style={Style.text}>Select a form form you gallery</Text>
          </View>

        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MapScreen;
