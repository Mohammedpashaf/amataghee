import img from '../../assets/img/logo.png';
import footer1 from '../../assets/img/footer1.png';
import footer2 from '../../assets/img/footer2.png';
import IconComponent from './IconComponent';
import facebook from '../../assets/img/icon/facebook.png'
import call from '../../assets/img/icon/call.png'
import instagram from '../../assets/img/icon/instagram.png'
import location from '../../assets/img/icon/location.png'
import message from '../../assets/img/icon/message.png'
import master from '../../assets/img/icon/master.png'
import twitter from '../../assets/img/icon/twitter.png'
import whatsapp from '../../assets/img/icon/whatsapp.png'
import payPal from '../../assets/img/icon/payPal.png'
import bitmap from '../../assets/img/icon/bitmap.png'
import bitmap1 from '../../assets/img/icon/bitmap1.png'
import angleRight from '../../assets/img/icon//angle-right.png'


function Footer() {
  return (
    <div>
      <footer class="bg-footer from-gray-900 via-gray-700 to-gray-900  py-14 px-16 font-sans tracking-wide relative">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="items-center lg:justify-center">
            <a href=''><img src={img} alt="logo" class='w-24 mb-4' /></a>
            <p class="text-gray-300 text-sm">Placerat vestibulum lectus mauris ultrices. Felis bibendum ut tristique 
            et egestas quis ipsum.</p>
            <div class="flex space-x-5 mt-11">
              <a href="" class="text-gray-300 hover:text-white text-sm transition-all"><IconComponent img={facebook}></IconComponent> </a>
              <a href="" class="text-gray-300 hover:text-white text-sm transition-all"><IconComponent img={whatsapp}></IconComponent></a>
              <a href="" class="text-gray-300 hover:text-white text-sm transition-all"><IconComponent img={twitter}></IconComponent></a>
              <a href="" class="text-gray-300 hover:text-white text-sm transition-all"><IconComponent img={instagram}></IconComponent></a>
            </div>
          </div>

          <div>
            <h2 class="text-lg text-gray-300 font-semibold mb-6">Explore</h2>
            <ul class="space-y-5">
              <li><a href="" class="text-gray-300 hover:text-white text-base flex items-center transition-all"><span class="inline mr-1.5 h-4 w-4 shrink-0"><IconComponent img={angleRight}></IconComponent></span>About</a></li>
              <li><a href="" class="text-gray-300 hover:text-white text-base flex items-center transition-all"><span class="inline mr-1.5 h-4 w-4 shrink-0"><IconComponent img={angleRight}></IconComponent></span>
              project</a></li>
              <li><a href="" class="text-gray-300 hover:text-white text-base flex items-center transition-all"><span class="inline mr-1.5 h-4 w-4 shrink-0"><IconComponent img={angleRight}></IconComponent></span>Service</a></li>
              <li><a href="" class="text-gray-300 hover:text-white text-base flex items-center transition-all"><span class="inline mr-1.5 h-4 w-4 shrink-0"><IconComponent img={angleRight}></IconComponent></span>Glossary</a></li>
            </ul>
          </div>
          <div>
            <h2 class="text-white text-lg font-semibold mb-4">News</h2>
            <ul class="space-y-4">
              <li>
                <div class="flex flex-wrap items-center cursor-pointer px-1.5 py-1.5 mx-auto mt-4">
                  <img src={footer1} class="w-10 h-10" />
                  <div class="mx-4 w-3/5">
                    <p class="text-sm text-white text-yel font-semibold">October 28, 2022</p>
                    <p class="text-xs text-gray-400 mt-0.5">Placerat vestibulum lectus mauris ultrices</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex flex-wrap items-center cursor-pointer px-1.5 py-1.5 mx-auto mt-4">
                  <img src={footer2} class="w-10 h-10" />
                  <div class="mx-4 w-3/5">
                    <p class="text-sm text-yel font-semibold">October 28, 2022</p>
                    <p class="text-xs text-gray-400 mt-0.5">Placerat vestibulum lectus mauris ultrices</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-white text-lg font-semibold mb-7">Contacts</h4>
            <ul class="space-y-4 mt-5">
              <li><span class="inline-block w-4 h-4 fill-current text-white mr-4"><IconComponent img={call}></IconComponent></span>
                <a href="" class="hover:text-white text-gray-300 text-sm">(101) 222 123 456</a>
              </li>
              <li><span class="inline-block w-4 h-4 fill-current text-white mr-4"><IconComponent img={message}></IconComponent></span><a href="" class="hover:text-white text-gray-300 text-sm">company@growa.com</a>
              </li>
              <li><span class="inline-block w-4 h-4 fill-current text-white mr-4"><IconComponent img={location}></IconComponent></span><a href="" class="hover:text-white text-gray-300 text-sm">25 Euclid Avenue NE, Albuquer, 83106  United States</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-8 border-gray-600" />
        <div class="flex sm:justify-between flex-wrap gap-6">
          <p class='text-gray-300 text-sm'>Merkulove © Growa Template All rights reserved Copyrights 2023</p>
          <div class="flex space-x-5">
            <a href="" class="text-gray-300 hover:text-white text-sm transition-all"><IconComponent img={master}></IconComponent></a>
            <a href="" class="text-gray-300 hover:text-white text-sm transition-all"><IconComponent img={bitmap}></IconComponent></a>
            <a href="" class="text-gray-300 hover:text-white text-sm transition-all"><IconComponent img={bitmap1}></IconComponent></a>
            <a href="" class="text-gray-300 hover:text-white text-sm transition-all"><IconComponent img={payPal}></IconComponent></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer;