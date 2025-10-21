import { HeroSection } from '@/components/organisms/herosection';
import styles from './page.module.scss';
import LandingGallery from '@/components/organisms/landingGallery';

export default function Home() {
  return (
      <div className={`${styles.home}`}>
        {/* <div className={styles.banner}></div> */}
        <HeroSection/>
        <LandingGallery/>
      </div>
    
  );
}
