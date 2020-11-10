import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { Card, CardItem, Body, Icon } from "native-base";

import { regex } from '../../utils/regex';
const t1 = "#f05956";
class FeedItem extends Component {
    constructor(props) {
        super(props);
    }

    cardPress = () => {
        let { item, navigation } = this.props;
        navigation.push(item.screen, item);
    };

    render() {
        const { theme, item, navigation, onPress, type, index } = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.cardPress}>
                <Card style={styles.cardStyle}>
                    <Icon type={"FontAwesome5"} name={item.icon} style={styles.icon}/>
                    <View style={styles.textcont}>
                        <Text style={styles.alphabet}>{item.name.charAt(0)}</Text>
                        <Text style={styles.text}>{item.name.substring(1)}</Text>
                    </View>
                </Card>
            </TouchableWithoutFeedback>
        );
    }
}

export default FeedItem;

const styles = StyleSheet.create({
    textcont : {flexDirection: "row"},
    icon : {color:'#fff', fontSize:50},
    alphabet: { fontSize: 34, color:'#fff' },
    alphabetCont: { borderRadius: 30, color:'#fff', height: 35, width: 35, marginRight: 10, backgroundColor: "red", alignItems: "center", justifyContent: "center" },
    text: { fontSize: 18, lineHeight: 60, color:'#fff' },
    cardStyle: { flex: 1, backgroundColor: '#2c2c2e', margin: 20, borderRadius:20, alignSelf: "center", justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10, height: 200 },
})