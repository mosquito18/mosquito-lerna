import React, { useState, useCallback } from 'react';
import './index.less';
import { createBEM } from './utils';

const bem = createBEM('translate');

interface translateProps {
  msg: string;
  onClick: () => void;
}

const Translate: React.FC<translateProps> = (props) => {
  const [state, setState] = useState(props?.msg)
  const onClick = useCallback(() => {
    setState('🐳');
    props.onClick();
  }, [props.onClick]);
  return (
    <div className={bem()}>
      Hello No Babel {state}!

      <button onClick={onClick}>点击</button>
    </div>
  )
}

export default Translate
