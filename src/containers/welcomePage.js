import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './welcomepage.css'

const items = [
  {
    src: 'https://pbs.twimg.com/media/DrRn-GbU4AASxup.jpg',
    altText: 'Slide 1',
    caption: '',
    header: 'Welcome to Car Club',
  },
  {
    src: 'https://www.wallpaperup.com/uploads/wallpapers/2013/01/18/30068/5233a22a4aa9ce239d53d9bab5a6dd1a.jpg',
    altText: 'Slide 2',
    caption: '',
    header: 'Find Your Dream Machine'
  },
  {
    src: 'https://wallpaperaccess.com/full/173889.jpg',
    altText: 'Slide 3',
    caption: '',
    header: 'What Are You Waiting For?'
  }
];

const WelcomePage = () => <UncontrolledCarousel className='smaller' items={items} />;

export default WelcomePage;