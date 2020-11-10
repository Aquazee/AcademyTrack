import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import FeedItem from '../../components/feed/FeedItem';
import HeaderItem from '../../components/feed/HeaderItem';
import { } from "../../actions/feedAction";
import { Icon } from 'native-base';

class feedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { icon: 'running', name: 'Running', completed: 90 },
                { icon: 'dumbbell', name: 'Weight Lifting', completed: 100 },
                { icon: 'swimmer', name: 'Swimming', completed: 70 },
                { icon: 'biking', name: 'Cycling', completed: 40 },
            ],
            headerData: [
                { label: 'Workout Time', value: 32, unit: 'min' },
                { label: 'Calories Burnt', value: 123, unit: 'calories' },
                { label: 'Points Earned', value: 100, unit: 'points' },
            ],
            storyData: [],
        };
    }

    static navigationOptions({ navigation, auth }) {
        return {
            headerShown: false
        }
    };

    onPress(type) {
        if (type === 'SearchScreen') {
            this.props.navigation.push(type);
        }
    };


    render() {
        const { theme, navigation, feeds, userId } = this.props;
        const { data, headerData } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HeaderItem data={headerData} />}
                    renderItem={({ item, index }) => <FeedItem
                        theme={theme}
                        item={item}
                        index={index + 1 + '. '}
                        navigation={navigation}
                        onPress={(type) => this.onPress(type, item)}
                    />
                    }
                    keyExtractor={(item, index) => index.toString()}
                    extraData={feeds}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.auth.theme,
});

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(feedScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181515',
        paddingHorizontal: 15
    },
    innerViewContainer: {
        flex: 1,
        padding: 12,
        paddingTop: 8,
        paddingBottom: 8,
    },
    iconView: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImage: {
        width: 25,
        height: 25,
    },
    modal: {
        flex: 1
    },
    separator: {
        height: 0.5,
        width: '100%',
        marginTop: 16,
        backgroundColor: '#C8C8C8'
    },
    header: { backgroundColor: "#5927e0", paddingBottom: 20, justifyContent: "center", alignItems: "center", }
});
