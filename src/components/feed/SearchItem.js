import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { Icon } from "native-base";

class SearchItem extends Component {
    constructor(props) {
        super(props);
    }

    cardPress = () => {
        const { item, navigation } = this.props;
        //navigation.push('Organisation', item);
    };

    render() {
        const { theme, item, navigation, onPress, index } = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.cardPress}>
                <View style={styles.cardStyle}>
                    <View style={styles.icon_cont}>
                        <Icon type={"FontAwesome5"} name={item.icon} style={{ fontSize: 40, color: '#fff' }} />
                    </View>
                    <View style={styles.pro_cont}>
                        <Text style={styles.alphabet}>{item.name}</Text>
                    </View>
                    <View style={styles.arrcont}>
                        <Icon type={"FontAwesome5"} name={"plus"} style={{ color: '#575757', fontSize: 18 }} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default SearchItem;

const styles = StyleSheet.create({
    cardlabel: { color: "#fff", fontSize: 30, fontWeight: "bold", flexWrap: 'wrap' },
    alphabet: { color: "#dddddd", fontSize: 18, fontWeight: 'bold', },
    cardunit: { color: "#909095", fontSize: 14 },
    parent: { flex: 1 },
    icon_cont: { flex: 2, justifyContent: 'center', alignItems: 'center', borderRadius:5, borderColor: '#eee', borderWidth: 1, height:80 },
    pro_cont: { flex: 5, justifyContent: 'center', paddingHorizontal:10 },
    arrcont: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    cardStyle: { width: "100%", alignSelf: "center", flexDirection: 'row', paddingVertical: 10, backgroundColor: '#2c2c2e', borderRadius: 10, marginVertical: 7, paddingHorizontal: 15 },
})

const ValueItem = (item) => {
    return <View style={styles.parent}>
        <Text style={styles.alphabet}>{item.label}</Text>
        <Text style={styles.cardlabel}>{item.value}</Text>
        <Text style={styles.cardunit}>{item.unit}</Text>
    </View>
}