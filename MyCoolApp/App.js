import HomeScreen from "./src/components/HomeScreen";
import {StackNavigator} from "react-navigation";
import AnotherScreen from "./src/components/AnotherScreen";
import ReduxScreen from "./src/components/ReduxScreen";

const App = StackNavigator(
    {
        HomeScreen: {screen: HomeScreen},
        AnotherScreen: {screen: AnotherScreen},
        ReduxScreen: {screen: ReduxScreen}
    }
);

export default App;