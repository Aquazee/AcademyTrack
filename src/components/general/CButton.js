import React from 'react';
import { Text } from "native-base";
import { TouchableWithoutFeedback, Image, StyleSheet, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient'

//Refer Additional Assessments for design
const CButton = ({ style, label, onPress }) => {
    return <TouchableWithoutFeedback onPress={onPress} >
        <View style={[styles.btncont, style]}>
            <LinearGradient
                colors={["#fd5c6e", "#e50019"]} 
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }} 
                locations={[0, 0.8]}
                style={styles.lin}>
                <Text style={styles.label}>{label}</Text>
            </LinearGradient>
        </View>
    </TouchableWithoutFeedback>
}

export default CButton;

const styles = StyleSheet.create({
    label: { fontSize: 16, color: "#fff", fontFamily: 'NotoSans-Bold' },
    btncont: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        paddingHorizontal: 10,
    },
    lin : { width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 5 }
})