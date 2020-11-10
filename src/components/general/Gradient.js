import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Gradient extends Component {
  render() {
    const  gradientHeight=100;
    const gradientBackground  = 'purple';
        const data = Array.from({ length: gradientHeight });
        return (
            <View style={{flex:1}}>
                {data.map((_, i) => (
                    <View
                        key={i}
                        style={{
                            position: 'absolute',
                            backgroundColor: gradientBackground,
                            height: 1,
                            bottom: (gradientHeight - i),
                            right: 0,
                            left: 0,
                            zIndex: 2,
                            opacity: (1 / gradientHeight) * (i + 1)
                        }}
                    >
                        {this.props.children}
                    </View>
                ))}
            </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  }
});
