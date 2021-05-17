import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';

import {white, yellow} from '../../constants';

interface OvalButtonI {
    text: string;
    onPress?: any;
}

const OvalButton = ({onPress, text}: OvalButtonI) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default OvalButton;

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 140,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: yellow,
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        color: white,
    }
})