import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight, Text } from 'react-native';

export const Button = ({text, color, textColor, onPress}) => {

    const buttonStyle = {
        backgroundColor: `${color}`,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '100%',
        height: 50,
        alignItems: 'center',
        alignText: 'center',
        justifyContent: 'center'
    }

    const textStyle = {
        color: `${textColor}`,
        fontSize: 14,
        fontStyle: 'normal',
        letterSpacing: 1,
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
