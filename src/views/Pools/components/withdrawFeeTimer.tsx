import React from 'react';
import { Text } from '@pancakeswap-libs/uikit'
import getTimePeriods from 'utils/getTimePeriods';

const WithdrawalFeeTimer: React.FC<{ secondsRemaining }> = ({ secondsRemaining }) => {
    const { days, hours, minutes } = getTimePeriods(secondsRemaining);

    return (
        <Text fontSize='14px'>
            {days && days}d : {hours && hours}h : {minutes && minutes}m
    </Text>
)
};

export default WithdrawalFeeTimer;