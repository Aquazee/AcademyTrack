import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { regex } from '../utils/regex';
import Feather from 'react-native-vector-icons/Feather';
import dashboardScreen from '../screens/dashboard/dashboard';
import feedScreen from '../screens/feed/feedScreen';
import searchScreen from '../screens/feed/searchScreen';
import addworkout from '../screens/addworkout/addworkout';
import addacademy from '../screens/addacademy/addacademy';

let RootStack = createStackNavigator();

const styleBack = { width: 20, height: 20, marginLeft: 15 };

const loginNavigationOption = (theme, navigationVisible) => {
  return {
    headerShown: navigationVisible,
    headerBackTitleVisible: false,
    headerBackImage: () => {
      return <Image style={styleBack} source={theme.icons.back} />;
    },
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: "#181515",
      shadowOpacity: 0,
      shadowOffset: { height: 0, width: 0 },
      shadowRadius: 0,
      elevation: 0,
    },
  };
};

const mapStateToPropsStack = state => ({
  loading: state.auth.loading,
  theme: state.auth.theme,
  competition: state.competition.data,
  profile: state.competition.profile,
});

const headerstyle = {
  backgroundColor: '#181515',
  height: 70,
  shadowColor: "#fff",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 6.27,

  elevation: 10,

}

let appNav = null;

class AppNavigator extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    appNav = this;
  }

  tabBarIcon = ({ color, size }) => (
    <Feather name="home-outline" color={color} size={size} />
  );

  render() {
    let { theme } = this.props
    return (
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Login"
          screenOptions={loginNavigationOption(theme, true)}>
          <RootStack.Screen
            name="SearchScreen"   //SearchScreen
            component={searchScreen}
            options={{ title: 'Search' }}
          />
          <RootStack.Screen
            name="Dashboard"   //Dashboard with 4 tiles of 
            component={dashboardScreen}
            options={{
              title: 'Dashboard',
              headerStyle: headerstyle,
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: '100',
                textAlign: 'center'
              }
            }}
          />
          <RootStack.Screen
            name="ExercisesList"   //Exercises List
            component={feedScreen}
            options={{ title: 'Activity Name' }}
          />
          <RootStack.Screen
            name="AcademyInfo"   //Academy Info
            component={addacademy}
            options={{ title: 'Academy Info' }}
          />
          <RootStack.Screen
            name="AddWorkout"   //Add Workout
            component={addworkout}
            options={{ title: 'Add New Workout' }}
          />
          <RootStack.Screen
            name="Activity"   //Activity Names and Stats
            component={feedScreen}
            options={{ title: 'Activity' }}
          />
        </RootStack.Navigator>
      </NavigationContainer>);
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  theme: state.auth.theme,
});

export default connect(mapStateToProps)(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconImage: {
    width: 18,
    height: 18,
  },
});
