import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {HomeScreenNavigationProp, NewsData} from '../../type';
import {colors} from '../constants';
import {useNavigation} from '@react-navigation/native';

const TrendingCard = ({item}: {item: NewsData}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableOpacity
      style={styles.trendingCard}
      onPress={() => navigation.navigate('News', {item})}>
      {item?.urlToImage && (
        <Image
          source={{uri: item?.urlToImage}}
          style={styles.trendingImage}
          resizeMode="cover"
        />
      )}
      <View style={styles.contentView}>
        <Text numberOfLines={3} style={styles.trendingTitle}>
          {item.title}
        </Text>
        <Text style={styles.trendingAuthon}>
          By {item.author || 'Unknown Author'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({
  trendingCard: {
    marginRight: 16,
    width: 100,
    borderWidth: 1,
    borderColor: colors.lightBlack,
    borderRadius: 8,
  },
  trendingImage: {
    width: 100,
    height: 110,
    borderRadius: 8,
  },
  trendingTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  trendingAuthon: {
    fontSize: 12,
    color: colors.lightGray,
  },
  contentView: {
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
});
