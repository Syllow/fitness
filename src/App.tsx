import Navbar from '@/scenes/navbar';
import { useState } from 'react';
import { SelectedPage } from '@/shared/types';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className='app bg-gray-20'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=I2NNxr3WPDo
// 1:30:00
