import React, {Component} from 'react';

class SellerField extends Component {
  render() {
    return (
      <div>
        <div className="form-group required">
          <label htmlFor="inputPAN" className="col-md-4 control-label">PAN No.</label>
          <div className="col-md-8">
            <input ref="pan" type="text" className="form-control" id="inputPAN" placeholder="PAN Number"
                    required="required"/>
          </div>
        </div>

        <div className="form-group required">
          <label htmlFor="inputExperienceYears" className="col-md-4 control-label">Experience</label>
          <div className="row col-md-8">
            <div className="col-md-3">
              <input ref="experienceInYears" type="number" className="form-control" id="inputExperienceYears" max={99} min={0}
                     required="required"/>
            </div>
            <label className="col-md-3 control-label">Years</label>
            <div className="col-md-3">
              <input ref="experienceInMonths" type="number" className="form-control" id="inputExperienceMonths" max={11} min={1}
                     required="required"/>
            </div>
            <label className="col-md-3 control-label">Months</label>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerField;