// console.log(content)
const AccordionSection = ({title, content, isOpen})=>{
return(

    <>
        <div className = {isOpen ? "title active" : "title"}>
        <i onClick = {console.log("hello")} className = "dropdown icon"></i>

        {title}

        </div>

        <div className = {isOpen ? "content active" : "content"}>
        <p className = {isOpen ? "transition visible": "transition hidden "}>
        {content}
        </p>
        </div>
    </>
    )
}


export default AccordionSection;
