import React from 'react';
import { render, rerender, screen } from "@testing-library/react";
import MissionsList from "./MissionsList";


const mockData = [
  {
    mission_name: "Mission One",
    mission_id: "mission_id_1"
  },
  {
    mission_name: "Mission Two",
    mission_id: "mission_id_2"
  }
];

test( 'render MissionsList without errors', () => {
  render( <MissionsList missions={[]} /> );
} );

test( 'renders without/with mission data without errors', () => {

  const { rerender } = render( <MissionsList missions={[]} /> );

  render( <MissionsList missions={[]} /> );
  let missionObjs = screen.queryAllByTestId( 'mission' );
  expect( missionObjs ).toEqual( [] );
  expect( missionObjs ).toHaveLength( 0 );

  rerender( <MissionsList missions={mockData} /> );
  missionObjs = screen.queryAllByTestId( 'mission' );
  expect( missionObjs ).toHaveLength( 2 );
} );