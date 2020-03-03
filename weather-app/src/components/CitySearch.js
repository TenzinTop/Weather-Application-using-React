import React from 'react';
import "./form.style.css"; 

const CitySearch = props =>{
  return(
    <div className="container">
      <div>{props.error ? error():null}</div>
      <form onSubmit={props.loadWeather}>
        <div className="row mt-3">
          <div className="col-md-3 offset-md-2 ">
            <input type="text" className="form-control" name="city" autoComplete="off" placeholder="Desired City"></input>
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" name="country" autoComplete="off" placeholder="country"></input>
          </div>
          <div className="col-md-3 mt-md-0 py-2 text-md-left">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  )
}

function error(){
  return(
    <div className="alert alert-danger mx-5" role="alert">
      Please Fill out the correct Details
    </div>
  )
}
export default CitySearch



      