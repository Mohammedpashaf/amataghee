import AboutCompany from './AboutCompany';
import AmataNaturals from './AmataNatural';
import BlogUpdateComponent from './BlogsUpdateComponent';
import ContactUs from './ContactUs';
import ExploreProductComponent from './ExploreProductComponent';
import OurFarmers from './OurFarmers';
import OurInstagram from './OurInstagram';
import OurProcess from './OurProcess';
import QualityProductComponent from './QualityProductComponent';
import ReviewsSection from './ReviewsSection';

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