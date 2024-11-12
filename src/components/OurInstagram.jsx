import footer2 from '../assets/img/footer2.png';
import image5 from '../assets/img/image5.png';
import insta1 from '../assets/img/insta1.png';
import insta2 from '../assets/img/insta2.png';
import john from '../assets/img/john.png';
import woman from '../assets/img/woman.png';
import InstaCommonImage from './common/InstaCommonImage';

const getContactUsData = {
    title: 'Partner with us',
    content: 'We are Here to Help',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit tellus elementum consequat eget conva.'
}
function OurInstagram(props) {
    return(
        <div className="w-4/5 mx-auto mb-11">
            <div className="text-center content-center sm:w-full md:w-3/5 mx-auto mb-4">
                <p className='title-green mt-4'>Our Instagram</p>
                <h1 class='desc-class mt-4'>Get the Updates and Stories</h1>
                <a className='title-green mt-4' href="mailto:someone@example.com">Send email</a>
            </div>
            <div class="sm:flex gap-4">
                <div><InstaCommonImage img={insta1}></InstaCommonImage></div>
                <div><InstaCommonImage img={insta2}></InstaCommonImage></div>
                <div><InstaCommonImage img={image5}></InstaCommonImage></div>
                <div><InstaCommonImage img={john}></InstaCommonImage></div>
                <div><InstaCommonImage img={woman}></InstaCommonImage></div>
                <div><InstaCommonImage img={footer2}></InstaCommonImage></div>
            </div>
        </div>
    )
}
export default OurInstagram;