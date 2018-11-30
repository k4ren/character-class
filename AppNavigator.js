import { createStackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';

import Character from './screens/Character';

const AppNavigator = createStackNavigator({
  Character: { screen: Character },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
