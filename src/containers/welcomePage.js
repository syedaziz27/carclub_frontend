import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './welcomepage.css'

const items = [
  {
    src: 'https://pbs.twimg.com/media/DrRn-GbU4AASxup.jpg',
    altText: 'Slide 1',
    caption: 'Sup',
    header: 'Welcome to Car Club',
  },
  {
    src: 'https://www.wallpaperup.com/uploads/wallpapers/2013/01/18/30068/5233a22a4aa9ce239d53d9bab5a6dd1a.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://wallpaperaccess.com/full/173889.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const WelcomePage = () => <UncontrolledCarousel className='smaller' items={items} />;

export default WelcomePage;