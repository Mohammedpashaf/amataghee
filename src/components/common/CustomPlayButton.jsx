import { PlayCircleIcon } from '@heroicons/react/24/outline'
function CustomPlayButton(props) {
    return(
      <div>
        <button className='Custombtn1'><PlayCircleIcon aria-hidden="true" className="w-10" /> {props.name}</button>
      </div>
        
    )
}

export default CustomPlayButton;