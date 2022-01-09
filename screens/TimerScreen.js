import React, {useState, useEffect} from "react";
import {Screen} from "../components/Screen";
import styled from 'styled-components/native';
import * as colors from '../config/Colors'
import {Button} from "../components/Button";
import {Alert} from "react-native";

export const TimerScreen = () => {

    // const [timeFromStart, setTimeFromStart] = useState(0)
    // const [hours, setHours] = useState(0)
    // const [minutes, setMinutes] = useState(0)
    // const [seconds, setSeconds] = useState(0)
    // const [timerId, setTimerId] = useState()
    // const [startTime, setStartTime] = useState()
    // const [started, setStarted] = useState(false)

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            // console.log('time', time)
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };


    // const updateTimeFromStart = async () => {
    //     setTimeFromStart((timeFromStart) => timeFromStart + 1)
    // }


    const updateTimer = async () => {
        await updateTimeFromStart()
        // let now = new Date()
        // console.log('now', now)
        // console.log('startTime', startTime)
        // const tfs = now - startTime
        // setTimeFromStart(tfs)

        // let tfs = timeFromStart
        // let tfss = tfs + 1
        // console.log(tfss, tfss)
        // setTimeFromStart((timeFromStart) => timeFromStart + 1)
        // console.log(timeFromStart)


        // let sec = tfs / 1000
        // let sec = timeFromStart
        // setSeconds(timeFromStart)
        // console.log('sec', seconds)

        setSeconds((seconds) => seconds + 1)
        // console.log('sec', seconds)

        // let floorSec = Math.floor(sec)
        // console.log('floorSec', floorSec)
        // setSeconds(floorSec)

        // let daysRemaining = tfs / 86400000
        // let floorDaysRemaining = Math.floor(daysRemaining)

        // setDays(floorDaysRemaining)

        // let hoursRemaining = (tfs / 3600000) - (floorDaysRemaining * 24)
        // let floorHoursRemaining = Math.floor(hoursRemaining)
        //
        // setHours(floorHoursRemaining)
        //
        // let minutesRemaining = (tfs / 60000) - (floorDaysRemaining * 24 * 60) - (floorHoursRemaining * 60)
        // let floorMinutesRemaining = Math.floor(minutesRemaining)
        // setMinutes(floorMinutesRemaining)
        //
        // let secondsRemaining = (tfs / 1000) - (floorDaysRemaining * 24 * 60 * 60) - (floorHoursRemaining * 60 * 60) - (floorMinutesRemaining * 60)
        // let floorSecondsRemaining = Math.floor(secondsRemaining)
        // setSeconds(floorSecondsRemaining)

    }

    // const timerHandler = async () => {
    //     let timerId = setInterval(() => {
    //         updateTimer()
    //         // console.log(timeFromStart)
    //
    //     }, 1000);
    //     setTimerId(timerId)
    // }

    // const startHandler = () => {
    //     // let timerId = setInterval(() => {
    //     //     let t = timeFromStart
    //     //     t = t+1
    //     //     setTimeFromStart(t)
    //     //     console.log(t)
    //     // }, 1000);
    //     // setTimerId(timerId)
    //     if (!started) {
    //         setStarted(true)
    //         let start = new Date()
    //         setStartTime(start)
    //         timerHandler()
    //     }
    //
    // }

    // const stopHandler = () => {
    //     console.log(timeFromStart)
    //     clearInterval(timerId)
    //     setStarted(false)
    //     setHours(0)
    //     setMinutes(0)
    //     setSeconds(0)
    //     setStartTime(undefined)
    //     setTimeFromStart(0)
    // }



    // useEffect(() => {
    //     timerHandler()
    // }, []);

    return (
        <Screen>
            <TimerBlock>
                {/*{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : {("0" + Math.floor((time / 60000) % 60)).slice(-2)} : {("0" + Math.floor((time / 10) % 60)).slice(-2)}*/}
                {(Math.floor(time / 3600))} : {(Math.floor(time / 60) % 3600)} : {(time % 60)}
            </TimerBlock>
            <ButtonsRow>
                <ButtonWrapper>
                    <Button
                        text="НАЧАТЬ"
                        color={colors.POSITIVE}
                        textColor={colors.BTN_TEXT}
                        onPress={handleStart}
                    />
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button
                        text="ЗАВЕРШИТЬ"
                        color={colors.NEGATIVE}
                        textColor={colors.BTN_TEXT}
                        onPress={handleReset}
                    />
                </ButtonWrapper>
            </ButtonsRow>
        </Screen>
    )

}

const TimerBlock = styled.Text`
  font-size: 70px;
  color: ${colors.PRIMARY_TEXT};
  margin-bottom: 80px;
`

const ButtonsRow = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 90%;
    margin-top: 15px;
`

const ButtonWrapper = styled.View`
    width: 48%;
`
