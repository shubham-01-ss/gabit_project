import * as React from 'react';
import { ScrollView } from 'react-native';
import ProductList from './Product/ProductList';
import ProductCartCarousel from './Carousel/ProductCartCarousel';
import ProductCarousel from './Carousel/ProductCarousel';
import BannerBottom from './Banner/BannerBottom';
import Banner from './Banner/Banner';
import { images } from '../constants/assets';
import BannerComplete from './Banner/BannerComplete';
import VideoCarousel from './Carousel/VideoCarousel';
import HomeFooter from './shared/HomeFooter';
import { globalStyles } from '../constants/styles';
import CompleteRegime from './completeRegime/CompleteRegime';

const bannerTop = {
  "id": 1,
  "title": "Are you sure about your skin type?",
  "description": "More then 63% of people have guessed their skin type wrong",
  "instructions": "Take 2 mins test",
  "imageUrl": images.skinType
};
const bannerBotom = {
  "id": 1,
  "title": "Discuss your skin care issues with other Gabit members",
  "instructions": "Join Gabit skin care community now",
  "imageUrl": images.members
};
const CircleBanner = [
  {
    "id": 1,
    "title": "Facewash",
    "centerText": "Select"
  },
  {
    "id": 2,
    "title": "Serum",
    "centerText": "Select"
  },
  {
    "id": 3,
    "title": "Moisturizer",
    "centerText": "Select"
  },
  {
    "id": 4,
    "title": "Sunscreen",
    "centerText": "Select"
  }
];
const regime = [
  {
    "id": 1,
    "title": "Face wash",
    "centerText": "AM/PM"
  },
  {
    "id": 2,
    "title": "Serum",
    "centerText": "AM/PM"
  },
  {
    "id": 3,
    "title": "Moisturizer",
    "centerText": "AM/PM"
  },
  {
    "id": 4,
    "title": "Sunscreen",
    "centerText": "AM/PM"
  }
]
export default function Home() {

  return (
    <ScrollView contentContainerStyle={globalStyles.flexGrow}>
      <ProductList />
      <BannerComplete data={CircleBanner} />
      <CompleteRegime data={regime} />
      <ProductCartCarousel />
      <Banner data={bannerTop} />
      <VideoCarousel />
      <ProductCarousel />
      <BannerBottom data={bannerBotom} />
      <HomeFooter />
    </ScrollView>
  );

}
