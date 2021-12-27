/**
 * @example https://testing-library.com/docs/react-testing-library/example-intro
 */
import App from './index'
import React from 'react';
// import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import {cleanup, fireEvent, screen, render} from '@testing-library/react';

describe('index', () => {
  it('render', () => {
    const fn = jest.fn();
    render(
      <App
        msg='Whale'
        onClick={fn}
      />,
    );

    expect(screen.getByText(/Whale/)).toBeInTheDocument();

    expect(fn.mock.calls.length).toBe(0);
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/🐳/)).toBeInTheDocument();
    expect(fn.mock.calls.length).toBe(1);
  })
});
