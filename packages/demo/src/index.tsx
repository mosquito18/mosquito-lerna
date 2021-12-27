import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { MUnitCenter } from '@mosquito/component'
import Translate from '@mosquito/translate'
import BabelC from '@mosquito/babelC'
// import UnitCenter from '@whale/components-unit';
import unitCenter from './utils/mock'
import './index.less';
import { createBEM } from './utils';

const bem = createBEM('demo');

interface demoProps {
  msg: string;
  onClick: () => void;
}

const App: React.FC = () => {
  const [state, setState] = useState('🐳')

  MUnitCenter.use((Unit: any) => {
      Unit.renderer = {};
  });

  // b.say()
  console.log(unitCenter,MUnitCenter,'----')
  return (
    <div className={bem()}>
      Hello {state}!
      <Translate msg={'tsc'} onClick={()=>console.log('-----tsc-----')} />
      <BabelC msg={'babel'} onClick={()=>console.log('-----www-----')} />
    </div>
  )
}

// export default Demo

(async function () {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
})();