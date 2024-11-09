function TitleComponent(props) {
    return(
        <div>
          <h5 class="text-3xl font-bold titleCss mb-4 mt-4 text-left">{props.data.title}</h5>          
        </div>
    )
}

export default TitleComponent;