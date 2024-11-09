import CustomButton from './common/CustomButton';
import TitleComponent from './common/TitleComponent';
import ContentComponent from './common/ContentComponent';
import DescriptionComponent from './common/DescriptionComponent';
import comments from '../assets/img/comments.png';
import phone from '../assets/img/phone.png'

const getPartnerUsData = {
    title: 'Partner with us',
    content: 'We are Here to Help',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit tellus elementum consequat eget conva.'
}
const getContactUsData ={
    content: 'Contact Us',
}
function ContactUs(props) {
    return(
        <div className="w-4/5 mx-auto mb-11">
            <div class="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto rounded-lg">
                <div class="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                    <div>
                        <TitleComponent data={getPartnerUsData}></TitleComponent>
                        <ContentComponent data={getPartnerUsData}></ContentComponent>
                        <DescriptionComponent data={getPartnerUsData}></DescriptionComponent>

                        <div class="mt-4">
                            <ul class="mt-12">
                                <li class="flex items-center">
                                    <div class="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <img src={phone} />
                                    </div>
                                    <a href="javascript:void(0)" class="ml-4">
                                        <small class="block">Phone</small>
                                        <strong>(101)222 123 456</strong>
                                    </a>
                                </li>
                                <li class="flex items-center mt-4">
                                    <div class="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <img src={comments} />
                                    </div>
                                    <a href="javascript:void(0)" class=" ml-4">
                                        <small class="block">Mail</small>
                                        <strong>Company@growa.com</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="bg-gray-100 p-6 rounded-lg">
                        <form class="space-y-4">
                            <ContentComponent data={getContactUsData}></ContentComponent>
                            <div className="mt-1 grid grid-cols-2 gap-[0.625rem] md:grid-cols-2 md:gap-x-0.75 noborder">
                                <div class="mb-5">
                                    <label for="name" class="mb-3 block text-base font-medium">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Full Name" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                </div>
                                <div class="mb-5">
                                    <label for="name" class="mb-3 block text-base font-medium">EMail</label>
                                    <input type="text" name="name" id="name" placeholder="Full Name" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                </div>
                            </div>
                            <div class="mb-5">
                                <label for="name" class="mb-3 block text-base font-medium">Message</label>
                                <textarea placeholder='Message' rows="6" class="w-full rounded-lg px-4 text-gray-800  pt-3"></textarea>
                            </div>
                            <CustomButton name='Send message'></CustomButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;