import React, {useEffect, useState} from 'react';
import {Alert, Linking, StatusBar, TouchableOpacity, Platform} from 'react-native';
import styled from 'styled-components/native';
import * as colors from '../config/Colors'
// import {Button} from "../components/Button";

export const ListItem = ({title, author, subtitle, color, selectColor = color, onPress}) => {

    const [selected, setSelected] = useState(true)
    // const [background, setBackground] = useState(selected ? '#000' : '#fff')
    const [background, setBackground] = useState(color)

    const getColor = (selected) => {
        if (selected) {
            return selectColor
        } else return color
    }

    const selectHandler = () => {
        onPress()
        setSelected(previousState => !previousState)
        setBackground(getColor(selected))
    }

    return (
        <TouchableOpacity onPress={
            selectHandler
        } style={{
            borderBottomWidth: 1,
            borderBottomColor: '#efefef',
            paddingVertical: 12,
            backgroundColor: background
        }}>
            <TitleColumn>
                <TitleWrapper>
                    <Title>{title} - {author}</Title>
                    {/*<Author>{author}</Author>*/}
                </TitleWrapper>
                <Subtitle>{subtitle}</Subtitle>
            </TitleColumn>
            <ButtonWrapper>

            </ButtonWrapper>
        </TouchableOpacity>
    )
}

const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-self: center;
  background: white;
  border-radius: 0px;
  border-bottom-width: 1px;
  border-bottom-color: #efefef;
  padding-vertical: 12px;
  width: 100%;
  margin-vertical: 0px;
`

const TitleColumn = styled.View`
  flex-direction: column;
`

const TitleWrapper = styled.View`
  flex-direction: row;
`

const ButtonWrapper = styled.View`

`

const Title = styled.Text`
  color: ${colors.PRIMARY_TEXT};
`

const Subtitle = styled.Text`
  color: ${colors.SECONDARY_TEXT};
`
