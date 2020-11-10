import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { Icon } from "native-base";

import { regex } from '../../utils/regex';

const ProgressBar = ({ completed }) => {
    return <View style={styles.pro_parent}>
        <View style={[styles.filled, {width: completed}]}></View>
    </View>
}

export default ProgressBar;

const styles = StyleSheet.create({
    pro_parent: { width: '85%', height: 5, backgroundColor: '#434347', marginBottom:5, borderRadius:3 },
    filled: { height: '100%', width: 0, backgroundColor: '#e23944', borderRadius:3 },
})
