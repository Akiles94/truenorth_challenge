import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeScreen } from '../screens';
import { mockedNavigate } from '../jest/setup';

describe("<HomeScreen/>",()=>{
    let component;    
    let btn;
    beforeEach(()=>{
        component = render(<HomeScreen/>);
        btn = component.getByTestId("button-next");        
    });
    
    it("Render correctly",()=>{
        expect(component).toBeDefined();
    });

    it("Not navigate if the fields was not filled", ()=>{        
        fireEvent.press(btn);
        expect(mockedNavigate).toHaveBeenCalledTimes(0);
    })
});