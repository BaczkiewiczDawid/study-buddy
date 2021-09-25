import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('Form Field', () => {
    it('Renders the component', () => {
        renderWithProviders(<FormField label="name" name="name" id="name" />);
    })
})