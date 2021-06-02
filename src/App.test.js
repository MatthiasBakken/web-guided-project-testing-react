import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App';
import { fetchMissions as fetchMissionsMock } from './api/fetchMissions';
jest.mock( './api/fetchMissions' );

fetchMissionsMock.mockResolvedValueOnce( {
  data: [
    {
      mission_name: "Mission One",
      mission_id: "mission_id_1"
    },
    {
      mission_name: "Mission Two",
      mission_id: "mission_id_2"
    }
  ]
} );


test( 'render App without error', () => {
  render( <App /> );
} );

test( 'renders mission data when button is clicked', async () => {
  // Arrange
  render( <App /> );
  // Act
  const button = screen.getByRole( 'button' );
  userEvent.click( button );
  // Assert
  await waitFor( () => {
    expect( screen.getAllByTestId( 'mission' ) ).toHaveLength( 2 );
  })
})