import React from 'react';
import { FormFieldType, Permissions, FormFieldBaseType } from '../const';
import { CompareType, COMPARE_MAP } from '../const/compares';
import { FilterOption, FILTER_MAP } from '../const/filters';


export enum FormFieldEditType {
    FormFieldEditType_Default = 1,
    FormFieldEditType_Can = 2,
    FormFieldEditType_Cannot_Edit = 3,
}


export interface OptionItems {
    label: string;
    value: string;
    color?: string;
    meta?: {
        color: string;
    }
}
export interface EnumItem {
    key: string;
    value: string;
    en_value: string;
    desc: string;
    en_desc: string;
    parent_key?: string;
    meta: {
        color: string;
    }
}

export enum ENUM_DISPLAY_TYPE {
    _FormFieldDisplayType,
    FormFieldDisplayType_All = 1,
    FormFieldDisplayType_None = 2,
    FormFieldDisplayType_Table = 3,
    FormFieldDisplayType_Form = 4
}


export interface FormField {
    key: string;
    name: string;
    en_name: string;
    field_type: FormFieldType;
    enum_items: EnumItem[];
    must: boolean;
    sort_order: number;
    table_order: number;
    desc: string;
    en_desc: string;
    edit_type: FormFieldEditType;
    display_type: ENUM_DISPLAY_TYPE;
    filter_order: number;
    config: { [attr: string]: any; };
    compares?: string[];
    // 过滤中比较的关系
    filters?: FilterOption[];
    permissions?: Permissions[];
    readonly baseType: FormFieldBaseType;
}

export interface OnFieldClassInit {
    optionLabel?: () => React.ReactElement;
    getFormSchema?: any;
    readonly baseType: FormFieldBaseType;
}

export default class FieldClass{
    options: FormField;
    placeholder?: string;

    constructor(options: FormField, lang?: 'en' | 'zh') {
        this.options = options;
        this.placeholder = `${this.options.name}`;
    }

    getCompares() {
        const compares = this.options.compares || [];

        return compares.map(item => {
            if (CompareType[item]) {
                return {
                    value: item,
                    label: COMPARE_MAP[item]
                };
            }
            return false;
        }).filter(item => !!item);
    }

    getFilters() {
        const filters = this.options.filters || [];

        return filters.map(item => {
            if (item in FilterOption) {
                return {
                    value: item,
                    label: FILTER_MAP[item],
                }
            }

            return false;
        }).filter(item => !!item) as Array<{ value: string | number, label: string }>;
    }
}