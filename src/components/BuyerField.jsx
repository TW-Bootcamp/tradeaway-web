import React, {Component} from 'react';

class BuyerField extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
        <label htmlFor="inputGender" className="col-md-4 control-label">Gender</label>
        <div className="col-md-8">
          <select ref="gender" id="inputGender" className="form-control">
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
      </div>
        <div className="form-group required">
          <label htmlFor="inputDOB" className="col-md-4 control-label">DOB</label>
          <div className="col-md-2">
            <select ref="day" id="inputDOB" className="form-control" required="required">
              {[...Array(31)].map((x, i) =>
                <option key={i} value={('0'+ ++i).slice(-2)}>{('0'+i).slice(-2)}</option>
              )}
          </select>
          </div>
          <div className="col-md-2">
            <select ref="month" className="form-control" required="required">
              {[...Array(12)].map((x, i) =>
                <option key={i} value={('0'+ ++i).slice(-2)}>{('0'+i).slice(-2)}</option>
              )}
            </select>
          </div>
          <div className="col-md-4">
            <select ref="year" className="form-control" required="required">
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