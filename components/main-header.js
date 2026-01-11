import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="Foodies logo" priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">
              <img src={mealIcon.src} alt="" />
              Meals
            </Link> 
          </li>
          <li>
            <Link href="/community">
              <img src={communityIcon.src} alt="" />
              Community
            </Link>
          </li>
          <li>
            <Link href="/meals/share">
              <img src={eventsIcon.src} alt="" />
              Share
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
