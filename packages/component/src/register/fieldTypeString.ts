import FieldClass, { FormField, OnFieldClassInit } from './fieldClass';
import MUnitCenter from './unitCenter';
import { FormFieldType, FormFieldBaseType } from '../const';
import { CompareType } from '../const/compares';
import { FilterOption } from '../const/filters';
import { t } from '../utils';

export let _UnitCenter: typeof MUnitCenter;
export default class FormFieldType_String extends FieldClass implements OnFieldClassInit {
    static type = FormFieldType.FormFieldType_String;
    baseType = FormFieldBaseType.text;

    static install(_UnitCenter: typeof MUnitCenter){
        _UnitCenter = MUnitCenter
        MUnitCenter.component(FormFieldType_String.type, FormFieldType_String)
    }

    placeholder: string;

    constructor(options: FormField) {
        super({
            ...options,
            compares: [
                CompareType.Contain,
                CompareType.NotContain,
                CompareType.Is,
                CompareType.IsNot,
            ],
            filters: [
                FilterOption.Contain,
                FilterOption.NotInclude,
                FilterOption.EQ,
                FilterOption.NE,
            ],
        });
        this.placeholder = t('Please enter') + this.options.name;
    }
}
