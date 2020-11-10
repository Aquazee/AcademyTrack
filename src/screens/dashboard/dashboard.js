import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import Item from '../../components/dashboard/Item';
import { Icon } from 'native-base';

class dashboardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'Activity',
                    icon: 'heartbeat',
                    screen: 'Activity'
                },
                {
                    name: 'Exercises List',
                    icon: 'biking',
                    screen: 'ExercisesList'
                },
                {
                    name: 'Academy Info',
                    icon: 'university',
                    screen: 'AcademyInfo'
                },
                {
                    name: 'Add Workout',
                    icon: 'dumbbell',
                    screen: 'AddWorkout'
                },
            ],
        };
    }

    onPress(type) {
        
    };

    render() {
        const { theme, navigation, feeds, userId } = this.props;
        const { data } = this.state;
        return (
            <View style={styles.container}>

                <FlatList
                    contentContainerStyle={{ flex: 1, marginTop: 40 }}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => <Item
                        theme={theme}
                        item={item}
                        navigation={navigation}
                    />
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default dashboardScreen

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#181515' },
    header: { backgroundColor: "#5927e0", paddingBottom: 20, justifyContent: "center", alignItems: "center", }
});
