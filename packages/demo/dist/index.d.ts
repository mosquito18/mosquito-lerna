import React from 'react';
import './index.less';
interface demoProps {
    msg: string;
    onClick: () => void;
}
declare const Demo: React.FC<demoProps>;
export default Demo;
