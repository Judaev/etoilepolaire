import React from 'react';

export const Spacer = ({ value = '20px', style = {} }) => {
    return <div style={{ height: value, ...style }} />;
}