import "./BodyContainer.css"
function BodyContainer({children}) {
    
    return(
        <>
            <div className="body-container" id={ "body-container"}>
                {children}
             </div>
        </>
      
    )
}

export default BodyContainer;