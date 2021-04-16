import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from  'react-navigation';
import MainStack from './mainStack';
import HomeStack from './homeStack'
import ItineraryStack from './ItineraryStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: MainStack,
    },
    Search: {
        screen: HomeStack,
    },
    Itinerary: {
        screen: ItineraryStack,
    },
});

export default createAppContainer(RootDrawerNavigator);