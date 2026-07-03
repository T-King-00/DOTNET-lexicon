import "./BodyContainer.css"
function BodyContainer({children,className}) {
    
    return(
        <>
            <div className={className} id={ "body-container"}>
                {children}
             </div>
        </>
      
    )
}

export default BodyContainer;