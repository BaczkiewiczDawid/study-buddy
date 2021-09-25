import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Form Field', () => {
    it('Renders the component', () => {
        renderWithProviders(
            <>
                <AddUser />
                <Dashboard />
            </>
        );
        fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Dawid' } });
        fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
        fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
        fireEvent.click(screen.getByText('Add'));
        screen.getByText('Dawid');
    })
})