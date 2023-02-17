import { Component } from "react";
import { Text, View } from "react-native";
import Header from '../../components/Header'

class Home extends Component {


    render() {
        return (

            <View>
                <Header name="Patrick Acioli" />
                <Text>Home</Text>
            </View>
            
            
        )
    }

}
export default Home;