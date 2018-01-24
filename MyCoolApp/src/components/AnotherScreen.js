import React, {Component} from 'react';
import {Button, View} from 'react-native';

export default class AnotherScreen extends Component {

    render() {
        return (
          <View>
              <Button title="Go Back" onPress={() => this.onButtonPress()} />
          </View>
        );
    }

    onButtonPress(event) {
        this.props.navigation.goBack();
    }
}

