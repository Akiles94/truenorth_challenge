import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ToDoScreen } from '../screens';
import { mockedNavigate } from '../jest/setup';



describe("<ToDoScreen/>",()=>{
    let component;    
    
    beforeEach(()=>{
        component = render(<ToDoScreen/>);
    });
    
    it("Render correctly",()=>{
        expect(component).toBeDefined();
    });

    it("Navigate to Home after press button", ()=>{
        const btn = component.getByTestId("button-next");        
        fireEvent(btn,"press");
        expect(mockedNavigate).toHaveBeenCalledTimes(1);
    })
});