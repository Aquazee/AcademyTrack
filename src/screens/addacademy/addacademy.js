import React, { Component, Fragment } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableWithoutFeedback, Image, TouchableOpacity, ImageStore } from 'react-native';
import { connect } from 'react-redux';
import FeedItem from '../../components/feed/FeedItem';
import { } from "../../actions/feedAction";
import { Icon } from 'native-base';
import CTextInput from '../../components/general/CTextInput';
import ImageUpload from "../../components/general/ImageUpload";
import CButton from "../../components/general/CButton";
import { ScrollView } from 'react-native-gesture-handler';

class AddAcademyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            imgs: []
        };
    }

    render() {
        const { feeds, userId } = this.props;
        const { data, imgs } = this.state;
        return (
            <View style={styles.container}>
                <CTextInput
                    label={"Academy Name"}
                    placeholder={'Old Academy Name'}
                    //limit={25}
                    style={{ marginBottom: 20 }} />
                <CTextInput
                    label={"Description"}
                    placeholder={'Add an academy description..'}
                    multiline={true}
                    numberOfLines={20}
                    //limit={80}
                    style={{ marginBottom: 10, height: 100 }}
                />
                <ScrollView horizontal style={{ height: 120, width: '100%' }} >
                    <Fragment>
                        {
                            imgs.map((i, index) => {
                                <View style={{}}>
                                    <Icon type={"FontAwesome5"} name={"cancel"} style={{}}/>
                                    <Image source={{ uri: img.path }} style={{ height: 100, width: 100 }} />
                                </View>
                            })
                        }
                        <ImageUpload
                            label={"Academy Photos"}
                            //label2={"Choose a conver pic"}
                            style={{ marginBottom: 80 }}
                            imgcont={{ width: 100, height: 100, }}
                        />
                    </Fragment>
                </ScrollView>
                <CButton label={"Save Changes"} style={{ alignSelf: 'flex-end' }} />
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
)(AddAcademyScreen);

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
