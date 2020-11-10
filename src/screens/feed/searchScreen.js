import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableWithoutFeedback, Platform, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import { Icon } from 'native-base';
import SearchItem from '../../components/feed/SearchItem';

const stories = [
    { icon : 'walking', name : 'Stretching'},
    { icon : 'running', name : 'Squats'},
    { icon : 'walking', name : 'Bench Press'},
    { icon : 'walking', name : 'Back Excercise'},
    { icon : 'weight-hanging', name : 'Collar Excercise'},
    { icon : 'weight-hanging', name : 'Overhead Dumbbells'},
    { icon : 'walking', name : 'Front Weight Pulley'},
    { icon : 'bicycle', name : 'Cycling'},
    { icon : 'running', name : 'Running'},
    { icon : 'dumbbell', name : 'Triceps'},
    { icon : 'dumbbell', name : 'Biceps'},
    { icon : 'pray', name : 'Calfs'},
    { icon : 'walking', name : 'Fore Arms'},
    { icon : 'walking', name : 'Leg Extension'},
]

class searchScreen extends Component {
    navigationOptions({ navigation }) {
        return {
            title: 'Search Users',
            headerLeft: () => {
                return <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.iconView}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.iconImage}
                                source={this.props.auth.theme.icons.camera}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            },
            headerRight: () => {
                return <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                    <TouchableWithoutFeedback onPress={() => navigation.push('AddPost')}>
                        <View style={styles.iconView}>
                            <Feather name="plus-circle" size={25} color={this.props.auth.theme.primaryColor} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            }
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            data: stories,
            search: false,
            searchText: "",
        };
    }

    clearSearch() {
        this.setState({ searchText: "", data: stories });
    }

    search(t) {
        let filteredData = stories.filter(i => i.name.toLowerCase().indexOf( t.nativeEvent.text.toLowerCase()) != -1)
        this.setState({ searchText: t.nativeEvent.text, data: filteredData });
    }

    FlatListSeparator = () => {
        return (
            <View style={styles.separator}></View>
        );
    }

    render() {
        const { theme, navigation } = this.props;
        const { data } = this.state
        return (
            <View style={[styles.container, { backgroundColor: '#181515', borderTopColor: "#eee", borderTopWidth: 1, paddingHorizontal:15 },]}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", borderColor: "#ebebeb", borderBottomWidth: 1, }}>
                    <View style={{ flex: 0.9 }}>
                        <TextInput style={Platform.OS === "ios" ? { paddingVertical: 15 } : null} placeholder={"Search users..."} value={this.state.searchText} onChange={(t) => this.search(t)} />
                    </View>
                    {this.state.searchText.length > 0 ? <TouchableWithoutFeedback style={{ flex: 0.1, borderBottomWidth: 1, borderColor: "#ebebeb", height: 150, }} onPress={() => { this.clearSearch() }}>
                        <Icon type={"FontAwesome"} name={"close"} style={{ color: "grey", fontSize: 20, }} />
                    </TouchableWithoutFeedback> : null}
                </View>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <SearchItem
                            theme={theme}
                            item={item}
                            navigation={navigation}
                            onPress={(type) => this.onPress(type, item)}
                        />
                    }
                    onEndReachedThreshold={0.1}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={data}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.auth.theme,
    user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(searchScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});
