import React from 'react';
import LoginForm from './IndividualLoginForm';

function Logincards(props)
{
    return(
        <>{/* Card 1 */}
        <div className="col-5 col-md-3 mb-4 text-center  ms-xs-0">
          <div className="card cardHover shadow rounded" onClick={props.onClick}>
            <img
              src={props.imgsrc}
              alt="Company Login"
              className="img-fluid"
            />
            <div className="card-body">
              <div className="card-title text-center fw-bold text-primary">{props.cardTitle}</div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Logincards;