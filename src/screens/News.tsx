import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../component/Header';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  HomeScreenNavigationProp,
  NewsData,
  RootStackParamList,
} from '../../type';
import {colors} from '../constants';
import {NEWS_API_KEY} from '../../config';
import TrendingCard from '../component/TrendingCard';

type NewsScreenRouteProps = RouteProp<RootStackParamList, 'News'>;
const News = () => {
  const [trendingNews, setTrendingNews] = useState<NewsData[]>([]);
  const route = useRoute<NewsScreenRouteProps>();
  const {item} = route.params;
  useEffect(() => {
    const fetchTrendingNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=Science&apiKey=${NEWS_API_KEY}&pageSize=10`,
        );
        const data = await response.json();
        if (data?.status === 'ok') {
          setTrendingNews(data.articles);
        }
      } catch (error) {
        console.log('error fetching trending news', error);
      }
    };
    fetchTrendingNews();
  }, []);
  return (
    <View style={styles.containerView}>
      <Header icon={true} />
      <ScrollView style={{flex: 1}}>
        {item?.urlToImage && (
          <Image source={{uri: item?.urlToImage}} style={styles.image} />
        )}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.author}>
            {' '}
            By {item?.author || 'Unknown Author'}
          </Text>
          <Text style={styles.publishedAt}>
            Publised at: {new Date(item?.publishedAt).toLocaleString()}
          </Text>
          <Text style={styles.description}>{item?.description}</Text>
          <Text style={styles.content}>{item?.content}</Text>
          <Text style={styles.recommendationTitle}>Trending News</Text>
          <FlatList
            data={trendingNews}
            keyExtractor={index => index.toString()}
            renderItem={({item}) => <TrendingCard item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trendingList}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  tabView: {
    marginVertical: 10,
  },
  tab: {
    marginRight: 10,
  },
  tabContainer: {
    paddingHorizontal: 8,
  },
  container: {backgroundColor: colors.white, flex: 1},
  tabTextActive: {fontWeight: 'bold', textDecorationLine: 'underline'},
  tabTexT: {color: colors.black, fontSize: 16},
  list: {
    paddingHorizontal: 10,
    paddingBottom: 120,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  publishedAt: {
    fontSize: 12,
    color: colors.lightGray,
  },
  indicatorStyle: {
    marginVertical: 5,
  },
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.lightBlack,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  header: {
    paddingVertical: 20,
    backgroundColor: colors.black,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTile: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  description: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 8,
  },
  containerView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    fontSize: 14,
    color: colors.gray,
  },
  recommendationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  trendingCard: {
    borderColor: colors.lightBlack,
    borderRadius: 8,
  },
  trendingImage: {
    width: '100%',
    height: 110,
    borderRadius: 8,
  },
  trendingTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  trendingAuthor: {
    fontSize: 12,
    color: colors.lightGray,
  },
  author: {
    fontSize: 16,
    color: colors.lightGray,
    marginBottom: 8,
  },
  trendingList: {},
  contentContainer: {padding: 10},
});
