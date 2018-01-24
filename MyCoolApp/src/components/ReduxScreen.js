import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Header from "./redux/Header";
import ItemList from "./redux/ItemList";
import {createProvider as Provider} from "react-redux";
import * as StatusBar from "react-native";
import {applyMiddleware, createStore} from "redux";
import itemApp from "../reducers/index";
import {logger} from "redux-logger";

// this comes from redux!
const store = createStore(itemApp, applyMiddleware(logger));

export default class ReduxScreen extends Component {

    componentDidMount() {
        StatusBar.setHidden(false);
        StatusBar.setBarStyle("light-content");
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Header/>
                    <ItemList/>
                    <Button title="Go Back" onPress={() => this.onButtonPress()}></Button>
                </View>
            </Provider>
        );
    }

    onButtonPress(event) {
        this.props.navigation.goBack();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});