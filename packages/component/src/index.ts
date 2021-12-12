import React, { useState, useCallback } from 'react';
import './index.less';
import { createBEM } from './utils';

export default class MUnitCenter {
    static info: string;
    constructor() {
        MUnitCenter.info = '见过你的美,还能爱上谁?'
        this.say = () => { }
    }

    say() {
        //  + UnitCenter.info
        console.log('小姐姐,');
    }

    static desc() {
        // console.log(this)
        // this.say();
        console.log('小姐姐,我看见你就犯困...');
    }
}


export class B extends MUnitCenter {
    // info: string;

    // constructor() {
    //     this.info = '见过你的美,还能爱上谁?'
    // }

    // say() {
    //     console.log('小姐姐,' + this.info);
    // }

    // static desc() {
    //     console.log('小姐姐,我看见你就犯困...');
    // }
}
