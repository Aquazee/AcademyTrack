import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { Card, CardItem, Body, Icon } from "native-base";
import { regex } from '../../utils/regex';

class HeaderItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <TouchableWithoutFeedback>
                <View style={styles.cardStyle}>
                    <Text style={styles.mainlabel}>ACTIVITY STATS</Text>
                    <View style={styles.itemcont}>
                        {
                            data.map((item, index) => {
                                return <ValueItem item={item} key={'hitem' + index.toString()} />
                            })
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default HeaderItem;


const ValueItem = ({ item }) => {
    return <View style={styles.val_cont}>
        <Text style={styles.alphabet}>{item.label}</Text>
        <Text style={styles.cardlabel}>{item.value}</Text>
        <Text style={styles.cardunit}>{item.unit}</Text>
    </View>
}

const styles = StyleSheet.create({
    val_cont: { flex: 1, justifyContent: 'center', alignItems: 'center', height: 120 },
    mainlabel: { color: '#fff', fontSize: 16, marginLeft:10 },
    itemcont: { flexDirection: 'row' },
    cardlabel: { color: "#fff", fontSize: 30, fontWeight: "bold", flexWrap: 'wrap' },
    alphabet: { color: "#b7b7b8", fontSize: 14, fontWeight: 'bold', marginBottom: 7 },
    cardunit: { color: "#909095", fontSize: 14 },
    parent: { flex: 1 },
    cardStyle: { width: "100%", alignSelf: "center", paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#2c2c2e', borderRadius: 10, marginBottom: 15 },
})
