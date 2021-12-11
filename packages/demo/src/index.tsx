import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { createBEM } from './utils';

const bem = createBEM('demo');

interface demoProps {
  msg: string;
  onClick: () => void;
}

const App: React.FC = () => {
  const [state, setState] = useState('🐳')
  return (
    <div className={bem()}>
      Hello {state}!
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