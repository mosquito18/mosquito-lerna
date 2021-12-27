import React from 'react';
import './index.less';
interface translateProps {
    msg: string;
    onClick: () => void;
}
declare const Translate: React.FC<translateProps>;
export default Translate;
