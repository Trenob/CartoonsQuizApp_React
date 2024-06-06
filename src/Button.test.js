import React from 'react';
import {render, screen} from '@testing-library/react'
import App from './App';

test ('The config game options and Quick start buttons are rendered', () => {
    render(<App/>);
    const buttonElementOne = screen.getByTestId('1');
    const buttonElementTwo = screen.getByTestId('2');

    //also tried these:
    // const buttonElementOne = screen.getByTestId(1);
    // const buttonElementTwo = screen.getByTestId(2);

    // const buttonElementOne = screen.getByTestId(/1/);
    // const buttonElementTwo = screen.getByTestId(/2/);

    expect(buttonElementOne).toBeInTheDocument();
    expect(buttonElementTwo).toBeInTheDocument();
});