import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
class Header extends Component<Props> {
    render() {
        return (
            <View style={styles.viewStyle} >
                <Text style={styles.textStyle} >{this.props.header}</Text>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10,
        paddingTop: 10,
        marginTop: 40,
        height: 50,
        backgroundColor: '#0588EE',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        marginBottom: 2
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
    }
});

export {Header};
