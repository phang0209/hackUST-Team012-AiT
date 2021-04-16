import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchPage from '../screen/searchPage';
import ReservationForm from '../screen/reservationForm';

const screens = {
    SearchPage: {
        screen: SearchPage
    },
    ReservationForm: {
        screen: ReservationForm
    }
};



const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);