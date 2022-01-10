import React, {useEffect, useState} from 'react';
import {Alert, Linking, StatusBar, TouchableOpacity, Platform} from 'react-native';
import styled from 'styled-components/native';
import * as colors from '../config/Colors'

export const ParentItem = ({name, id}) => {

    return (
        <Card>
            <AvatarWrapper>
                <Avatar/>
            </AvatarWrapper>
            <TitleColumn>
                <Title>{name}</Title>
                <Subtitle>{id}</Subtitle>
            </TitleColumn>

        </Card>
    )
}

const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-self: center;
  background: white;
  border-radius: 5px;
  padding: 15px;
  width: 95%;
  margin-vertical: 3px;
`

const TitleColumn = styled.View`
  flex-direction: column;
`

const TitleWrapper = styled.View`
  flex-direction: row;
`

const AvatarWrapper = styled.View`
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`

const Avatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: ${colors.PRIMARY}
`

const Title = styled.Text`
  color: ${colors.PRIMARY_TEXT};
`

const Subtitle = styled.Text`
  color: ${colors.SECONDARY_TEXT};
`
