import React, { useState, useCallback } from 'react';
import './index.less';
import { createBEM } from './utils';

const bem = createBEM('component');

interface ComponentProps {
  msg: string;
  onClick: () => void;
}

const Component: React.FC<ComponentProps> = (props) => {
  const [state, setState] = useState(props.msg)
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

export default Component
