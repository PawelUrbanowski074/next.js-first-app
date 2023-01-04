import MettupList from '../components/meetups/MeetupList';
import { useEffect, useState } from 'react';
const Dummy_Meetups = [
  {
    id: 'm1',
    title: 'A first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Wawel_hill_%28view_from_W-winter%29%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg/1024px-Wawel_hill_%28view_from_W-winter%29%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg',
    address: 'Some address 6, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Wawel_hill_%28view_from_W-winter%29%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg/1024px-Wawel_hill_%28view_from_W-winter%29%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg',
    address: 'Some address 6, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm3',
    title: 'A third meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Wawel_hill_%28view_from_W-winter%29%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg/1024px-Wawel_hill_%28view_from_W-winter%29%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg',
    address: 'Some address 6, 12345 Some City',
    description: 'This is a first meetup!'
  },
];

function HomePage(props) {
  return <MettupList meetups={props.meetups } />
}

export async function getStaticProps() {
  //fetch date from an Api

  return {
    props: {
      meetups: Dummy_Meetups
    }
  };
}

export default HomePage;