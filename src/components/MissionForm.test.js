import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MissionForm from "./MissionForm";


test( 'MissionForm renders correctly without errors', () => {
  render( <MissionForm /> );
} );

test( 'render message correctly when isFetching is true', () => {
  render( <MissionForm isFetchingData={true} /> );
  const item = screen.getByText( /we are fetching data/i );
  expect( item ).not.toBeNull();
  expect( item ).toBeInTheDocument();
} );

test( 'message does not render when isFetching is false', () => {
  render( <MissionForm isFetchingData={false} /> );
  const button = screen.queryByRole( /button/i );
  expect( button ).toBeInTheDocument();
} );

test( 'calls getData when button is clicked', () => {
  const getDataMock = jest.fn();
  render( <MissionForm isFetchingData={false} getData={getDataMock} /> );
  const button = screen.queryByRole( /button/i );
  userEvent.click( button );
  expect( getDataMock ).toHaveBeenCalled();
  expect( getDataMock.mock.calls.length ).toBe( 1 );
} );