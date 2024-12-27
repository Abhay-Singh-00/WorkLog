import React from 'react';
import LoginForm from './IndividualLoginForm';

function Logincards(props)
{
    return(
        <>{/* Card 1 */}
        <div className="col-8 col-sm-5 col-md-3 mb-4 text-center ms-5 ms-sm-0 ">
          <div className="card cardHover shadow-lg rounded" onClick={props.onClick} style={{zIndex:1}}>
            <img
              src={props.imgsrc}
              alt="Company Login"
              className="img-fluid"
            />
            <div className="card-body">
              <div className="card-title text-center fw-bold">{props.cardTitle}</div>
            </div>
          </div>
        </div>
      
        </>
    )
}
export default Logincards;