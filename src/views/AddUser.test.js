import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Form Field', () => {
    it('Adds new user to the list', () => {
        renderWithProviders(
            <>
                <AddUser />
                <Dashboard />
            </>
        );
        fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Dawid' } });
        fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
        fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
        fireEvent.click(screen.getByTestId('Consent'));
        fireEvent.click(screen.getByText('Add'));
        screen.getByText('Dawid');
    });

    it('Prevents adding new user if the consent is not checked', () => {
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
        const newUser = screen.queryByText('Dawid')
        expect(newUser).not.toBeInTheDocument();
    })
})