import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddMember from './AddMember';
import './App.css';
import MemberList from './MemberList';

function App() {

  const [value, setValue] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<AddMember setValue={setValue}  />} />
      <Route path="/members" element={<MemberList value={value}  />} />
    </Routes>

  );
}

export default App;
