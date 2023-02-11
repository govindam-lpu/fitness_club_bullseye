import { useEffect, useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';
import './App.css';

function App() {

  const [value, setValue] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const details = {
      name,
      phone,
      email,
      address
    };

    setValue((prev) => {
      return [
        ...prev,
        details
      ]
    });
    setName('');
    setEmail('');
    setPhone(null);
    setAddress('');
  };

  useEffect(() => console.log(value), [value]);

  return (
    <div className="">
      {/* <Routes>

        <Route exact path='/members' element={< MemberList />}></Route>
      </Routes> */}
      <form onSubmit={onSubmit}>
        <div class="form-group">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control"  
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input 
            type="email" 
            className="form-control"  
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <input 
            type="phone" 
            className="form-control" 
            placeholder="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Address</label>
          <textarea 
            className="form-control" 
            placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Member</button>
      </form>

      {/* <Link to='/members'>
        <button 
          className="btn btn-primary">View Member List
        </button>
      </Link> */}
    </div>
  );
}

export default App;
