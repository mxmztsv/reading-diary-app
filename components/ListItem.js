import React, {useEffect, useState} from 'react';
import {Alert, Linking, StatusBar, TouchableOpacity, Platform} from 'react-native';
import styled from 'styled-components/native';
import * as colors from '../config/Colors'
import {Button} from "../components/Button";

export const ListItem = ({title, author, subtitle, onPress}) => {

    return (
        <Card onPress={onPress}>
            <TitleColumn>
                <TitleWrapper>
                    <Title>{title} - {author}</Title>
                    {/*<Author>{author}</Author>*/}
                </TitleWrapper>
                <Subtitle>{subtitle}</Subtitle>
            </TitleColumn>
            <ButtonWrapper>

            </ButtonWrapper>
        </Card>
    )
}

const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-self: center;
  background: white;
  border-radius: 5px;
  padding: 10px;
  width: 95%;
  margin-vertical: 3px;
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
