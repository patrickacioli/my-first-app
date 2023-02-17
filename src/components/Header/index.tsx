import { Component } from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 64;

type HeaderProps = {
    name: string;
}

class Header extends Component<HeaderProps> {
    
    render() {
        return (
            <View style={ styles.container }>
                <View style={styles.content}>
                    <Text style={styles.username}>{this.props.name}</Text>
                    <TouchableOpacity style={styles.icon}>
                        <Feather name="user" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingEnd: 20,
        paddingStart: 20,
        paddingBottom: 20,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        fontWeight: 'bold',
        color: '#FFF',
    },
    icon: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 50,
        padding: 10,
    }
})


export default Header;