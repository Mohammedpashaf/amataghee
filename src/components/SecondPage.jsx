import amataLogo from '../assets/img/logo.png';
import NavBar from './common/NavBar';
import ExploreProductComponent from './ExploreProductComponent';
import OurJourney from './OurJourney';
import Footer from './SecondPage/Components/Common/Footer';
import StayUpdated from './StayUpdated';
import WhyYouBuy from './WhyYouBuy';

const getNavbarData1 = {
  img: amataLogo,
  contactus: false,
  width: "w-20",
  headerData: [{ name: 'Home'},
    { name: 'About Us'},
    { name: 'Services', path: 'MainSection'},
    { name: 'Pricing', path: 'SecondPage'},
    { name: 'Blog'}]
};
function SecondPage() {
  return (
    <div className='p-4 md:p-0'>
      <NavBar data={getNavbarData1}></NavBar>
      <OurJourney></OurJourney>
      <WhyYouBuy></WhyYouBuy>
      <ExploreProductComponent customClass={true} className='rounded onlyButton'></ExploreProductComponent>
      <StayUpdated></StayUpdated>
      <Footer></Footer>
    </div>
  );
}

export default SecondPage;
