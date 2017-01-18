import React, {Component} from 'react';

class BuyerField extends Component {
  render() {
    return (
      <div>
        <div className="form-group required">
        <label htmlFor="inputGender" className="col-md-4 control-label">Gender</label>
        <div className="col-md-8">
          <select id="inputGender" className="form-control">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
        <div className="form-group required">
          <label htmlFor="inputDOB" className="col-md-4 control-label">DOB</label>
          <div className="col-md-2">
            <select id="inputDOB" className="form-control">
              {[...Array(31)].map((x, i) =>
                <option key={i} value={++i}>{i}</option>
              )}
          </select>
          </div>
          <div className="col-md-2">
            <select className="form-control">
              {[...Array(12)].map((x, i) =>
                <option key={i} value={++i}>{i}</option>
              )}
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-control">
              {[...Array(117)].map((x, i) =>
                <option key={i} value={i+=1900}>{i}</option>
              )}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyerField;