import React, { useState, useCallback } from 'react';
import './index.less';
import { createBEM } from './utils';

const bem = createBEM('__PACKAGE_NAME__');

interface __PACKAGE_NAME__Props {
  msg: string;
  onClick: () => void;
}

const __PACKAGE_NAME__: React.FC<__PACKAGE_NAME__Props> = (props) => {
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

export default __PACKAGE_NAME__
