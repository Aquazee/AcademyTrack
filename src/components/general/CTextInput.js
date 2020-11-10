import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Icon } from "native-base";

let color = '#707070'
class CTextInput extends Component {
    constructor(props) {
        super()
        this.state = {
            text: ''
        }
    }

    checkAndChange = (t) => {
        let { limit } = this.props;
        if (t.nativeEvent.text.length <= limit) {
            this.setState({ text: t.nativeEvent.text })
        }
    }

    render() {
        let { label, limit=null, style, placeholder, multiline = false, numberOfLines = 1 } = this.props;
        let { text } = this.state;

        return (
            <View style={[styles.Container, style]}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.inputcont}>
                    <TextInput
                        placeholder={placeholder}
                        style={[styles.input, { textAlignVertical: multiline ? 'top' : 'center' }]}
                        onChange={this.checkAndChange.bind(this)}
                        value={text}
                        placeholderTextColor={color}
                        multiline={multiline}
                        numberOfLines={numberOfLines}

                    />
                    {limit && <Text style={[styles.charcount, multiline ? { alignSelf: 'flex-end', bottom: 10 } : {}]}>{text.length}/{limit}</Text>}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label: { alignSelf: 'flex-start', fontSize: 16, color: '#fff', marginBottom: 5, justifyContent: 'center' },
    Container: { alignSelf: 'center', marginRight: 3, height: 75, width: '100%', marginVertical: 5 },
    input: { paddingVertical: 15, color: '#fff', fontSize: 18, backgroundColor: 'transparent', flex: 1 },
    charcount: { color: '#8a8a8a', width: 40, textAlign: 'center' },
    inputcont: { flexDirection: 'row', borderRadius: 5, backgroundColor: '#353535', paddingHorizontal: 10, width: '100%', justifyContent: 'center', alignItems: 'center', }
})

export default CTextInput;