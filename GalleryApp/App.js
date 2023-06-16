import React from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';

const images = [
  { id: 1, source: require('./images/native1.png') },
  { id: 2, source: require('./images/native2.jpg') },
  { id: 3, source: require('./images/native3.png') },
  // Add more images here
];

const { width } = Dimensions.get('window');
const imageWidth = width / 3;

const GalleryApp = () => {
  const renderItem = ({ item }) => (
    <Image source={item.source} style={styles.image} resizeMode="cover" />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    margin: 5,
  },
});

export default GalleryApp;