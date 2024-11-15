import amataLogo from '../assets/img/amata-logo.jpeg';
import AboutCompany from './AboutCompany';
import AmataNaturals from './AmataNatural';
import BlogUpdateComponent from './BlogsUpdateComponent';
import Footer from './common/Footer';
import NavBar from './common/NavBar';
import ContactUs from './ContactUs';
import ExploreProductComponent from './ExploreProductComponent';
import OurFarmers from './OurFarmers';
import OurInstagram from './OurInstagram';
import OurProcess from './OurProcess';
import QualityProductComponent from './QualityProductComponent';
import ReviewsSection from './ReviewsSection';

function MainSection(params) {
    
const getNavbarData = {
    img: amataLogo,
    contactus: true,
    width: "w-40",
    headerData: [
      { name: 'About', path: 'MainSection', subheader: [
        { name: 'About', path: 'MainSection'},
        { name: 'Products', path: 'MainSection'},
        { name: 'Services', path: 'SecondPage'},
        { name: 'News', path: 'SecondPage'}
      ]},
      { name: 'Products', path: 'SecondPage', subheader: [
        { name: 'About'},
        { name: 'Products'},
        { name: 'Services'},
        { name: 'News'}
      ]},
      
      { name: 'Services', path: 'MainSection', subheader: [
        { name: 'About'},
        { name: 'Products'},
        {name : 'Services'},
        {name : 'News'}
      ]},
      { name: 'News', path: 'SecondPage',subheader:[
        { name: 'About'},
        { name: 'Products'},
        {name : 'Services'},
        {name: 'News'}
      ]},
    ]
  };
    return (
        <div>
            <NavBar data={getNavbarData}></NavBar>
            <AmataNaturals></AmataNaturals>
            <OurProcess></OurProcess>
            <ExploreProductComponent></ExploreProductComponent>
            <QualityProductComponent></QualityProductComponent>
            <AboutCompany></AboutCompany>
            <OurFarmers></OurFarmers>
            <ReviewsSection></ReviewsSection> 
            <BlogUpdateComponent></BlogUpdateComponent>
            <ContactUs></ContactUs>
            <OurInstagram></OurInstagram>
            <Footer></Footer>
        </div>
    )
}
export default MainSection;