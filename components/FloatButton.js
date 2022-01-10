import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight, Text } from 'react-native';

export const FloatButton = ({text, color, textColor, onPress}) => {

    const buttonStyle = {
        position: 'absolute',
        right: 15,
        bottom: 15,
        backgroundColor: `${color}`,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 56,
        height: 56,
        alignItems: 'center',
        alignText: 'center',
        justifyContent: 'center'
    }

    const textStyle = {
        color: `${textColor}`,
        fontSize: 22,
        letterSpacing: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <TouchableHighlight style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{text}</Text>
        </TouchableHighlight>
    )

}

// const Text = styled.Text`
//   color: ${tc};
// `
//
//
// const ButtonContainer = styled.TouchableHighlight`
//   width: 170px;
//   margin-top: 25px;
//   border-width: 2px;
//   border-radius: 50px;
// `
