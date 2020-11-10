import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import FeedItem from '../../components/feed/FeedItem';
import { } from "../../actions/feedAction";
import { Icon } from 'native-base';
import CTextInput from '../../components/general/CTextInput';
import ImageUpload from "../../components/general/ImageUpload";
import CButton from "../../components/general/CButton";

class AddWorkoutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        const { feeds, userId } = this.props;
        const { data } = this.state;
        return (
            <View style={styles.container}>
                <Text style={{ marginBottom: 10, fontSize: 14, color: '#fff' }}>GENERAL DETAILS</Text>
                <ImageUpload
                    //label={""}
                    label2={"Choose a conver pic"}
                    style={{ width: 150, height: 100, marginBottom: 80 }}
                />
                <CTextInput
                    label={"Title"}
                    placeholder={'Give your workout a title'}
                    limit={25}
                    style={{ marginBottom: 20 }} />
                <CTextInput
                    label={"Description"}
                    placeholder={'Describe the workout in brief'}
                    multiline={true}
                    numberOfLines={20}
                    limit={80}
                    style={{ marginBottom: 80, height: 100 }}
                />
                <CButton
                    label={"Next"}
                    style={{ alignSelf: 'flex-end' }}
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
)(AddWorkoutScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181515',
        paddingVertical: 10,
        paddingHorizontal: 20,
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
