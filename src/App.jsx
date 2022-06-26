import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.scss';
import Container from './components/Container';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Container />}>
        {/* <Route index element={<Dashboard />} />
        <Route path='/components/transition' element={<Transition />} />
        <Route path='/components/barEcharts' element={<Bar />} />
        <Route path='/components/rowBar' element={<RowBar />} />
        <Route path='/components/radialPolar' element={<RadialPolar />} />
        <Route path='/components/modal' element={<Modal />} />
        <Route path='/components/flex' element={<Flex />} />
        <Route path='/components/grid' element={<Grid />} />
        <Route path='/components/dashboard' element={<Dashboard />} />
        <Route path='/components/Sin' element={<Sin />} />
        <Route path='/components/Three' element={<Three />} />
        <Route path='/components/Scene' element={<Scene />} />
        <Route path='/components/edit' element={<Editor />} />
        <Route path='/components/ScatterChart' element={<ScatterChart />} />
        <Route path='/components/SortDrag' element={<SortDrag />} />
        <Route path='*' element={<NoMatch />} /> */}
      </Route>
      {/* <Route path="/Three" element={<Three />} /> */}
      {/* <Route path='*' element={<NoMatch />} /> */}
    </Routes>
  );
}

export default App;
