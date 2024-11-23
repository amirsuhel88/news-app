import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import {colors, Tabs} from '../constants';

const Home = () => {
  const [selectedTab, setSelectedTab] = React.useState(Tabs[0]);

  const renderTabItem = ({item}: {item: string}) => (
    <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(item)}>
      <Text
        style={[styles.tabTexT, item === selectedTab && styles.tabTextActive]}>
        {item}
      </Text>
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
});
