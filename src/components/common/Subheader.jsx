/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
function SubHeader(props) {
    return(
        <div>
            <li class='border-b py-2 '><a href='javascript:void(0)'
                      class='hover:text-[#62360F] text-gray-600 text-[15px] font-bold block'>{props.name}</a></li>
        </div>
    );
}
export default SubHeader;