import NavBar from "./NavBar";
function Error(props){
    const {err}=props;
    return(
    <>
    <NavBar/>
    <div class="row">
        <div class="col-6 offset-3">
        <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">{ err.message}</h4>
            
            {(process.env.NODE_ENV !== "production")?<p>{err.stack}</p>:""}
            </div>
        </div>
    </div>
    </> 
    )
}

export default Error;