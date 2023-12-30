import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {heartIcon} from '../assets/images';
import Animated from 'react-native-reanimated';
import {usePlanStore} from '../store/plantsStore';

export const Home = (props: any) => {
  const [plants, getPlants] = usePlanStore(s => [s.plants, s.getPlants]);

  const SingleItem = ({item}: any) => {
    return (
      <Pressable
        onPress={() => {
          props.navigation.navigate('Details', {item: item});
        }}>
        <View style={styles.itemCard}>
          <Text style={styles.cardLabel1}>{item.category}</Text>
          <Text style={styles.cardLabel2}>{item.name}</Text>
          {/* Price and like container */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 45,
            }}>
            <Text style={styles.priceTag}> ${item.price} </Text>
            <View style={{width: '10%'}} />
            <TouchableOpacity
              onPress={() => {
                console.warn('Likned');
              }}>
              <Image
                style={styles.heartIcon}
                source={heartIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Animated.Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="contain"
          sharedTransitionTag={`plant-image-${item.id}`}
        />
      </Pressable>
    );
  };

  useEffect(() => {
    getPlants();
  }, []);

  if (plants.length < 1) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'large'} color={'#9CE5CB'} />
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={plants}
        renderItem={({item}) => <SingleItem item={item} />}
        ItemSeparatorComponent={() => <View style={{height: 25}} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 150,
    width: 150,
    position: 'absolute',
    top: 0,
    right: 0,
  },

  itemCard: {
    backgroundColor: '#9CE5CB',
    margin: 19,
    borderRadius: 25,
    padding: 24,
    width: '80%',
    minHeight: 150,
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
  priceTag: {
    fontSize: 18,
    fontWeight: '600',
    color: '#002140',
  },
  heartIcon: {
    height: 25,
    width: 25,
  },
});
