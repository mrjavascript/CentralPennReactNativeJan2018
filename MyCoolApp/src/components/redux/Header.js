import {connect} from "react-redux";
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleCreateItem = this.handleCreateItem.bind(this);
        this.randomizeItemData = this.randomizeItemData.bind(this);
    }

    handleCreateItem() {
        const randomizedData = this.randomizeItemData();
        this.props.dispatch({type: "ADD_ITEM", ...randomizedData})
    }

    randomizeItemData() {
        // random color from array
        const colorArray = ['#2892b4', '#b44a28', '#28B490'];
        const randColor = colorArray[Math.floor(Math.random() * colorArray.length)];

        // pick a random number below 1000
        const randomNumber = Math.floor(Math.random() * 1000 + 1);
        const randomName = "Item: " + randomNumber;

        return {name: randomName, bgColor: randColor}
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.left}/>
                    <View style={styles.middle}>
                        <TouchableOpacity onPress={this.props.handleCreateItem()}>
                            <Text style={styles.textRight}>ADD ITEM</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.right}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#181e29'
    },

    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    left: {
        top: 40
    },
    middle: {
        top: 40
    },
    right: {
        top: 40
    },
    textRight: {
        color: '#efefef',
        fontWeight: "bold"
    }


});

export default connect()(Header);