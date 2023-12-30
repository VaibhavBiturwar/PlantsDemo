import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Animated from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');

export const Details = (props: any) => {
  const {item} = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Top Container */}
        <View style={styles.topContainer}>
          <View style={styles.backdrop} />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <>
            <Text style={styles.cardLabel1}>{item.category}</Text>
            <Text style={styles.cardLabel2}>{item.name}</Text>
            <View>
              <Text style={styles.label1}>Price</Text>
              <Text style={styles.label1}>{item.price}</Text>
            </View>
            <View>
              <Text style={styles.label1}>Size</Text>
              <Text style={styles.label1}>{item.size}</Text>
            </View>
            <Animated.Image
              style={styles.image}
              source={{uri: item.image}}
              resizeMode="contain"
              sharedTransitionTag={`plant-image-${item.id}`}
            />
          </>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 30,
    height: height / 2,
    paddingTop: 50,
  },
  label1: {},
  label2: {},
  image: {
    height: width * 0.75,
    width: width * 0.55,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  cardLabel1: {
    fontSize: 14,
    fontWeight: '600',
    color: '#002140',
  },
  cardLabel2: {
    fontSize: 32,
    fontWeight: '700',
    color: '#002140',
    fontFamily: 'Philosopher',
  },
  backdrop: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 30,
    backgroundColor: '#9CE5CB',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: '#ffffff96',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 30,
  },
  backText: {
    fontWeight: '600',
    color: '#000000a7',
  },
});
