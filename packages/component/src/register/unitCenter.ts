import { FormFieldType } from '../const'
import { error, warn } from '../utils';
import FieldClass, { FormField, OnFieldClassInit } from './fieldClass'

interface Options {
    fields: FormField[];
}

interface IFieldRenderer {
    renderFilterType(instance: FieldClass, params: any): React.ReactElement;
    renderTableCell(instance: FieldClass, params: any): React.ReactElement;
    renderFormCell(instance: FieldClass, params: any): React.ReactElement;
}

type FieldInstance = FieldClass & OnFieldClassInit

export default class MUnitCenter {
    fields: Options['fields'];
    model: Record<string, FieldInstance> = {};
    renderer: Record<FormFieldType, IFieldRenderer>;

    static renderer: Record<FormFieldType, IFieldRenderer>;
    static fields: Record<string, typeof FieldClass> = {};
    static use: (plugin:typeof FieldClass | Function) => void
    static component: (id: string | number, definition: typeof FieldClass) => void
    static addComponent: (fieldClass: typeof FieldClass, fieldRenderer?:Partial<IFieldRenderer>) => void

    constructor(options: Options){
        // if(!MUnitCenter.renderer){
        //     // TODO： 加上相关升级链接
        //     error('unit-center 升级，需要定义renderer');
        //     return;
        // }
        this.fields = options.fields;
        this.renderer = new Proxy(MUnitCenter.renderer,{
            get(target,propKey){
                const res = Reflect.get(target,propKey)
                return res
            }
        })
        this.init(this.fields)
    }

    init(fields: Options['fields']) {
        if (!fields || !fields.length) {
            error('fields 不能为空');
            return;
        }

        fields.forEach(field => {
            if (MUnitCenter.fields[field.field_type]) {
                const Ctro = MUnitCenter.fields[field.field_type];
                this.model[field.key] = new Ctro() as FieldClass & OnFieldClassInit;
            }
        });
    }

}

initUse(MUnitCenter);
initAssets(MUnitCenter)
initAddComponent(MUnitCenter)



function initUse(_UnitCenter: typeof MUnitCenter){
    _UnitCenter.use = function(plugin){
        const args = Array.from(arguments).slice(1);
        args.unshift(this);
        console.log(Array.from(arguments),args)
        // @ts-ignore
        if(typeof plugin.install === 'function'){
            // @ts-ignore
            plugin.install.apply(plugin,args)
        }
        else if(typeof plugin === 'function'){
            plugin.apply(null, args)
        }

        return this
    }
}

function initAssets(_UnitCenter: typeof MUnitCenter) {
    _UnitCenter.component = function (id, definition) {
        this.fields[id] = definition; // 给fields 添加Class
    }
}

const noop = () => ''

function initAddComponent(_UnitCenter: typeof MUnitCenter){
    _UnitCenter.addComponent = function(fieldClass, fieldRenderer = {}){
        _UnitCenter.use(fieldClass);
        _UnitCenter.renderer[fieldClass['type']] = {
            renderTableCell: fieldRenderer.renderTableCell || noop,
            renderFormCell: fieldRenderer.renderFormCell || noop,
            renderFilterType: fieldRenderer.renderFilterType || noop
        } as IFieldRenderer
    }
}