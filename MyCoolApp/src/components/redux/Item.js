import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default class Item extends Component {
    render() {
        return (
            <TouchableOpacity
                style={[
                    styles.container,
                    {
                        backgroundColor: this.props.rowData.bgColor
                    }
                ]}
                onPress={() => this.props.handleDestroyItem(this.props.rowData.id)}
            >
                <Text>{this.props.rowData.name}</Text>
            </TouchableOpacity>
        );
    }
}

Item.propTypes = {
    handleDestroyItem: PropTypes.func,
    rowData: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10
    }
});