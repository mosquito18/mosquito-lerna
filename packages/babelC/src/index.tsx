import React, { useState, useCallback } from 'react';
import './index.less';
import { createBEM } from './utils';

const bem = createBEM('babelC');

interface BabelCProps {
  msg: string;
  onClick: () => void;
}

const BabelC: React.FC<BabelCProps> = (props) => {
  const [state, setState] = useState(props?.msg)
  const onClick = useCallback(() => {
    setState('🐳');
    props.onClick();
  }, [props.onClick]);
  return (
    <div className={bem()}>
      Hello {state}!

      <button onClick={onClick}>点击</button>
    </div>
  )
}

export default BabelC
