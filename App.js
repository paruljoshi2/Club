/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  SectionList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
const { width, height } = Dimensions.get('window')

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const DATA = [
    {
      title: 'CHANGE LINE UP',
      icon: require('./assets/LineUp1.png'),
    },
    {
      title: 'SCORED',
      icon: require('./assets/Goal2.png'),
    },
    {
      title: 'CONECDED',
      icon: require('./assets/GoalCon2.png'),
    },
    {
      title: 'RED CARD',
      icon: require('./assets/RedCard2.png'),
    },
    {
      title: 'FULL TIME',
      icon: require('./assets/FullTime.png'),
    }
  ];
  const Events = [
    {
      title: 'Goal Scored',
      icon: require('./assets/Goal2.png'),
      time: '12:46'
    },
    {
      title: 'Kick Off',
      icon: require('./assets/Kick.png'),
      time: '12:40'
    },
    {
      title: 'Starting Squad',
      icon: require('./assets/LineUp1.png'),
      time: '12:40'
    },
  ];
  const users = [
    {
      name: 'Arizona Arsenal',
      score: 2,
    },
    {
      name: 'Phoenix Premier',
      score: 2,
    },
  ];
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ImageBackground
          source={require('./assets/StadiumDetail@2X.png')}
          style={{width, height: height / 4, padding: 10}}>
          <View style={styles.topView}>
            <Image source={require('./assets/proscore1.png')} />
            <Icon name="bars" size={30} color="#fff" style={{margin: 5}} />
          </View>

          {users.map(data => {
            return (
              <View style={styles.topView}>
                <Text style={styles.whiteText}>
                  {data.name} <Text style={{fontWeight: 'normal'}}>U16's</Text>
                </Text>
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: 5,
                    margin: 3,
                    padding: 3,
                  }}>
                  <Text style={styles.whiteText}> {data.score} </Text>
                </View>
              </View>
            );
          })}
        </ImageBackground>
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: '#27386D', fontSize: 25, fontWeight: 'bold'}}>
              Game TimeLine
            </Text>
            <Icon name="ellipsis-h" size={30} color="#27386D" style={{margin: 5}} />
          </View>

          <Text style={styles.note}>Log all of the in game events</Text>
        </View>

        <View style={{flex: 1}}>
          <FlatList
            horizontal={true}
            data={DATA}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <View style={styles.box}>
                  <Image
                    source={item.icon}
                    key={index}
                    style={{height: 45, width: 45, resizeMode: 'contain'}}
                  />

                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#27386D',
                      fontSize: 12,
                      fontWeight: 'bold',
                      paddingTop: 15,
                    }}>
                    {item.title}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: '#ccc'}} />
          <View>
            <Text style={[styles.note, {margin: 20, textAlign: 'center'}]}>
              Add a new event
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#ccc'}} />
        </View>
        <View style={{flex: 1, marginHorizontal: 20}}>
          <FlatList
            data={Events}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 25,
                        padding: 8,
                        borderColor: '#ccc',
                        elevation: 4,
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 4,
                        },
                        shadowOpacity: 0,
                        borderWidth: 1,
                      }}>
                      <Image
                        source={item.icon}
                        key={index}
                        style={{
                          height: index == 0 ? 35 : 30,
                          width: index == 0 ? 35 : 30,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>

                    <View
                      style={{
                        height: 50,
                        width: '80%',
                        marginHorizontal: 10,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        borderColor: '#ccc',
                        elevation: 4,
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 4,
                        },
                        shadowOpacity: 0,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          marginLeft: 10,
                          color: '#27386D',
                          fontSize: 20,
                          fontWeight: 'bold',
                        }}>
                        {item.time} {item.title}
                      </Text>

                      <View style={{flexDirection: 'row', marginRight: 10}}>
                        <Icon
                          name="pencil-square-o"
                          size={20}
                          color="#27386D"
                          style={{margin: 5}}
                        />

                        {index == 0 ? (
                          <Icon
                            name="close"
                            size={20}
                            color="#27386D"
                            style={{margin: 5}}
                          />
                        ) : null}
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      borderColor: '#ccc',
                      borderLeftWidth: index !== Events.length - 1 ? 2 : 0,
                      height: 40,
                      marginLeft: 20,
                      justifyContent: 'center',
                    }}></View>
                </View>
              );
            }}
          />
        </View>

        <View style={{height: 100}} />
      </ScrollView>
      <View
        style={{
          width,
          backgroundColor: '#27386D',
          position: 'absolute',
          bottom: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={[styles.whiteText, {fontSize: 22}]}>Submit</Text>
      </View>
    </SafeAreaView>
   );
};

const styles = StyleSheet.create({
  whiteText:{
    color:'#fff',
    fontSize:18,
    fontWeight:'700',
    padding:5
  },
  topView:{flexDirection:'row',justifyContent:'space-between',width:width-30},
  box:{
    paddingVertical:5,
    marginLeft:10,
    height: '100%',
    width: width/5.8,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  note:{color:'#ccc',fontSize:18, fontWeight:'700'}
});

export default App;
