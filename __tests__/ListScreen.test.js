import React from 'react';
import { render, waitFor} from '@testing-library/react-native';
import { ListScreen } from '../screens';
import DataContext from '../components/contexts/DataContext';

jest.mock('react');

describe("<ListScreen/>",()=>{
    let component;              

    beforeEach(()=>{
        component = render(<ListScreen/>);                
    });
    
    it("Render correctly",()=>{
        waitFor(()=>(expect(loadedComponent).toBeDefined()));
    });

    it("Initial assets to be 0",()=>{
        expect(component.queryAllByTestId("assets-container")).toEqual([]);
    });    
    
});