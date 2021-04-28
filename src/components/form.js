import axios from 'axios';
import { useState, } from 'react';
const Form = ({
  dataProp,
}) => {
  const [values, setValue] = useState({});
  const onsubmit = async(e) => {
    e.preventDefault();
    dataProp(values);
    try{
      const resp = await axios.post ('https://oleg-dev.com', values);
      console.log(resp);
    } catch(err) {
      console.error(err);
    }
  }
  const resetForm = e => {
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value='')
    )
    e.preventDefault();
    const { name, unchecked, type } = e.target;
    if(type==='checkbox') setValue({[name]: unchecked});
    setValue({[name]: ''});
    dataProp({});
  }
  const onChange = e => {
    const { name, value, type, checked } = e.target;
    if(type==='checkbox') {
      setValue(prev => ({...prev, [name]: checked}));
    } else {
      setValue(prev => ({...prev, [name]: value}));
    }
  }
  const ANSWERS = [ 
    {
      name: '- select one -',
      value:'',
    }, 
    {
      name:'yes',
      value:'yes',
    }, 
    {
      name:'no',
      value:'no',
    }
  ];
  const CHECKBOXES = [
    {
      name: 'advances',
      label: 'advances*',
      req: true,
    },
    {
      name: 'alerts',
      label: 'alerts',
      req: false,
    },
    {
      name: 'other',
      label: 'other communications',
      req: false,
    }
  ]
  return (
    <div className="form-cont">
      <form onSubmit={onsubmit} className="form-register">
        <legend><h2>Sign up for email updates</h2><small>*Indicates required fields</small></legend>
        <div className="field-cont">
        <div className="form-field">
          <label>first name*
            <input
              name="firstName"
              type="text"
              value={values.value}
              onChange={onChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>last name*
            <input
              name="lastName"
              type="text"
              value={values.value}
              onChange={onChange}
              required
            />
          </label>
        </div>
        </div>
        <div className="field-cont">
          <div className="form-field">
            <label>email address*
              <input
                name="email"
                type="email"
                value={values.value}
                onChange={onChange}
                required
              />
            </label>
          </div>
          <div className="form-field">
            <label>organization
              <input
                name="orgname"
                type="text"
                value={values.value}
                onChange={onChange}
              />
            </label>
          </div>
        </div> 
        <div className="form-field">
          <label>eu resident*
            <select value={values.euResident} name="euResident" onChange={onChange}>
              {ANSWERS.map(a => {
                return (
                  <option
                    value={a.value}
                    key={a.name}>
                      {a.name}
                  </option>)}
                )
              }
            </select>
          </label>
        </div>
        <div className="checkboxes">
          {CHECKBOXES.map((el,idx) => {
            return (
              <div className="checkbox-field">
                <label>
                <input
                  type="checkbox"
                  name={el.name}
                  key={Math.random(101)}
                  required={el.req}
                  onChange={onChange}
                  checked={values[el.name]}
                />
                {el.label}</label>
              </div>
            )
          })}
        </div>
        <div className="btn-cont"> 
          <button className="submit-button btn" type="submit" value="Submit">submit</button>
          <button className="reset-button btn" type="button" value="reset" onClick={resetForm}>reset</button>
        </div>
      </form>
    </div>
  )
}

export default Form;
