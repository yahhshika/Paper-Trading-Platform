function PageNotFound() {
    return ( <div className="container d-flex justify-content-center" style={{height:"100vh"}}>

        <div className="alert alert-primary mt-5" style={{height:"fit-content", backgroundColor:"white"}} role="alert">
          <h1 style={{color:"#387ed1"}}> <i className="fa-solid fa-triangle-exclamation"></i> Page Not Found !</h1>
        </div>
    </div> );
}

export default PageNotFound;