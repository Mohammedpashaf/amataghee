import ExploreProductComponent from './ExploreProductComponent';
import QualityProductComponent from './QualityProductComponent';
import AboutCompany from './AboutCompany';
import BlogUpdateComponent from './BlogsUpdateComponent';
import ReviewsSection from './ReviewsSection';
import AmataNaturals from './AmataNatural';
import OurProcess from './OurProcess';
import OurFarmers from './OurFarmers';
import ContactUs from './ContactUs';
import OurInstagram from './OurInstagram';

function MainSection(params) {
    return (
        <div>
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
        </div>
    )
}
export default MainSection;