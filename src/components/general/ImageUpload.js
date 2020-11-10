import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { Icon } from "native-base";
import ImagePicker from "react-native-image-crop-picker";

let color = '#707070'
class ImageUpload extends Component {
    constructor(props) {
        super()
        this.state = {
            img: null
        }
    }

    componentDidMount() {
        this.cleanTemp()
    }

    cleanTemp() {
        ImagePicker.clean().then(() => {
            console.log('removed all tmp images from tmp directory');
        }).catch(e => {
            console.log(e)
        });
    }

    OpenPicker = () => {
        let { width, height } = this.props.style
        ImagePicker.openPicker({
            width: width *2,
            height: height *2,
            cropping: true
        }).then(image => {
            console.log(image);
            this.setState({ img: image })
        });
    }

    render() {
        let { label=null, style, label2 = null, imgcont } = this.props;
        let { img } = this.state;

        return (
            <View style={[styles.Container, { marginBottom: style.marginBottom }]}>
                {label && <Text style={styles.label}>{label}</Text>}
                <TouchableWithoutFeedback onPress={this.OpenPicker}>
                    <View style={imgcont}>
                        {label2 && <Text style={{ color: '#fff', fontSize:16, marginBottom:10 }}>{label2}</Text>}
                        <View style={styles.inputcont}>
                            {img ? <Image source={{uri: img.path}} style={styles.img} /> :
                                <Icon type={"FontAwesome5"} name={"camera"} style={styles.icon} />
                            }
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img : { width: '100%', height: '100%' },
    icon : { fontSize: 40, color: '#fff' },
    label: { alignSelf: 'flex-start', fontSize: 16, color: '#fff', marginBottom: 5, justifyContent: 'center' },
    Container: { alignSelf: 'center', marginRight: 3, height: 'auto', width: '100%', marginVertical: 5 },
    input: { paddingVertical: 15, color: '#fff', fontSize: 18, backgroundColor: 'transparent', flex: 1 },
    charcount: { color: '#8a8a8a', width: 40, textAlign: 'center' },
    inputcont: { flexDirection: 'row', borderRadius: 5, backgroundColor: '#353535', paddingHorizontal: 10, width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%' }
})

export default ImageUpload;