function InstaCommonImage(props) {
    return(
        <div>
            <img class="object-cover object-center w-full h-40 max-w-full rounded-lg py-4"
                src={props.img}
                alt="gallery-photo" />
        </div>
    )
}
export default InstaCommonImage;