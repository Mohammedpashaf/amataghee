import cowman from '../assets/img/cowman.png';
import AccordianComponent from './common/AccordianComponent';
import ContentComponent from "./common/ContentComponent";
import TitleComponent from "./common/TitleComponent";

const getAboutCompanyData = {
    title: 'About Company',
    content: ' We Provide a Full Range of Services',
    description: ''
}
const getAccordianData = [
    {
      question: " We supporting customers with personalized services",
      answer: "Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Pellentesque diam volutpat commodo sed egestas. Ante metus dictum at tempor commodo ullamcorper. Morbi tempus iaculis urna id volutpat lacus laoreet. Donec pretium vulputate sapien nec sagittis aliquam. Fames ac turpis egestas sed tempus.",
    },
    {
      question: "Our main principle is to help people live healthier lives",
      answer: "Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Pellentesque diam volutpat commodo sed egestas. Ante metus dictum at tempor commodo ullamcorper. Morbi tempus iaculis urna id volutpat lacus laoreet. Donec pretium vulputate sapien nec sagittis aliquam. Fames ac turpis egestas sed tempus."
    },
    {
      question: "Innovative solutions for consumers seeking foods",
      answer: "Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Pellentesque diam volutpat commodo sed egestas. Ante metus dictum at tempor commodo ullamcorper. Morbi tempus iaculis urna id volutpat lacus laoreet. Donec pretium vulputate sapien nec sagittis aliquam. Fames ac turpis egestas sed tempus."
    }
  ];

function AboutCompany(props) {
    return(
        <div>
            <div class="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-2 md:gap-x-0.75 noborder">
                <div className='p-l-5'>
                    <div class="sm:flex">
                        <div class="p-5 mt-1 bg-white py-1.25 px-0.75 items-center text-center md:w-full">
                            <p>
                                <span class="mt-0.5 block font-medium text-sm leading-[1.125rem]">
                                    <TitleComponent data={getAboutCompanyData}></TitleComponent>
                                    <ContentComponent data={getAboutCompanyData}></ContentComponent>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class='man content-center w-11/12 mx-auto'>
                        <AccordianComponent data={getAccordianData}></AccordianComponent>
                    </div>
                </div>
                <div>
                        <div class="mt-1 py-1.25 px-0.75 items-center text-center w-full">
                            <div class='man pt-8'>
                                <img src={cowman} loading="lazy"/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default AboutCompany