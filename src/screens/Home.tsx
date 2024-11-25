import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../component/Header';
import {colors, Tabs} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp, NewsData} from '../../type';
import {NEWS_API_KEY} from '../../config';
import Loader from '../component/Loader';

type Tab = (typeof Tabs)[number];
const CATEGORY_MAP: Record<Tab, string> = {
  'Top Stories': 'general',
  Business: 'business',
  Politics: 'politics',
  Science: 'science',
  Technology: 'technology',
};

const Home = () => {
  const [selectedTab, setSelectedTab] = React.useState(Tabs[0]);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState<NewsData[]>([]);
  const [page, setPage] = useState(1);
  // const [perPage] = useState(10);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const perPage = 20;
  useEffect(() => {
    getData(1);
    if (page > 1) {
      getData(page);
    } else {
      getData(1);
    }
  }, [selectedTab, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const getData = async (page: number) => {
    try {
      setLoading(true);
      const category = CATEGORY_MAP[selectedTab];
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${NEWS_API_KEY}&page=${page}&pageSize=${perPage}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
        },
      );
      const data = await response.json();
      if (data?.status === 'ok') {
        setNews(prevNews =>
          page === 1 ? data?.articles : [...prevNews, ...data?.articles],
        );
      }
    } catch (error) {
      console.log('Error fetching data', error);
    } finally {
      setLoading(false);
    }
  };

  // tab items
  const renderTabItem = ({item}: {item: string}) => (
    <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(item)}>
      <Text
        style={[styles.tabTexT, item === selectedTab && styles.tabTextActive]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
  const renderNewsCard = ({item}: {item: NewsData}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('News', {item})}>
      {item?.urlToImage && (
        <Image
          source={{uri: item?.urlToImage}}
          resizeMode="cover"
          style={styles.image}
        />
      )}
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.publishedAt}>
          Published at: {new Date(item.publishedAt).toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <Header />
      <View style={styles.tabView}>
        {/* tab view */}
        <FlatList
          data={Tabs}
          keyExtractor={item => item}
          renderItem={renderTabItem}
          horizontal
          contentContainerStyle={styles.tabContainer}
          showsVerticalScrollIndicator={false}
        />
        {/* news view */}
      </View>
      {loading && page === 1 ? (
        <Loader />
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderNewsCard}
          contentContainerStyle={styles.list}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
          ListFooterComponent={
            <ActivityIndicator
              size="large"
              color={colors.gray}
              style={styles.indicatorStyle}
            />
          }
        />
      )}
    </View>
  );
};

export default Home;

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
});
