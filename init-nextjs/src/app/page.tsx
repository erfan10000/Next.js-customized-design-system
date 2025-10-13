import { HeroSection } from '@/components/molecules/herosection';
import styles from './page.module.scss';

export default function Home() {
  return (
      <div className={`${styles.home}`}>
        {/* <div className={styles.banner}></div> */}
        <HeroSection/>
        <div className={`${styles.description} flex p-5 py-10 justify-between items-center`}>
          <div className="title px-10 min-w-100">
            <h5 className=" text-black font-black text-2xl">Next.js Design System</h5>
          </div>
          <div className="caption text-2xl leading-10">
            <p>This is the landing page of my Next.js design system. Here I introduce the
                components, typography, and styles that create a consistent user
                experience across all projects.</p>
          </div>
        </div>
      </div>
    
  );
}
