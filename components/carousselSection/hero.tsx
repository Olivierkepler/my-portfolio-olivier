'use client';

// import { IconCheck } from '@tabler/icons-react';
// import SocialLinksVertical from '@/components/carousselSection/SocialLinks';  
import HeroInfo from '@/components/carousselSection/heroInfo';
import Carousel from '@/components/carousselSection/Carousel';
import HeroInfo1 from './heroInfo1';
import HeroInfo2 from './heroInfo2';
// import BackgroundTechnologies from './BackgroundTechnologies';
// const benefits: string[] = [
//   'Critical thinking applied to real-world challenges',
//   'Experience with scientific research and experimentation',
//   'Translating data into actionable insights',
// ];

export default function TwoColumnsWithImage() {
  return (
    <>
    {/* <div className="flex justify-end opacity-80">
      <BackgroundTechnologies />
      </div> */}

     <Carousel
              slides={[ 
                <div key="slide1"    >
                 <HeroInfo />
                </div>,
                <div key="slide2" >
                    <HeroInfo1 />
                </div>,
                <div key="slide3" >
                    <HeroInfo2 />
                </div>
              ]}
              autoPlayInterval={8000}
            />  

{/* <HeroInfo /> */}
    </>
  );
}
