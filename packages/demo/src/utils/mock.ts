import React, { useState, useCallback } from 'react';
import { UnitCenter, FormField, hostConfig, createRenderer } from '@whale/components-unit'

const res = {
    "data": {
        "listFormFieldsByFormId": {
            "fields": [
                {
                    "id": "adfafa",
                    "key": "shop_id",
                    "name": "店铺",
                    "field_type": 1,
                    "config": {
                        "data_source": "2",
                    },
                    "desc": "店铺ID",
                    "must": true
                },
                {
                    "id": "173",
                    "key": "id",
                    "name": "ID",
                    "field_type": 1,
                    "display_type": 2,
                    "enum_value": [

                    ],
                    "edit_type": 1,
                    "must": null,
                    "desc": "ID 唯一键",
                    "status": 1
                },
                {
                    "id": "178",
                    "key": "phone",
                    "name": "手机号",
                    "field_type": 1,
                    "display_type": 1,
                    "enum_value": [

                    ],
                    "edit_type": 3,
                    "must": true,
                    "desc": "手机号",
                    "status": 1
                },
                {
                    "id": "179",
                    "key": "name",
                    "name": "姓名",
                    "field_type": 1,
                    "display_type": 1,
                    "edit_type": 2,
                    "must": true,
                    "desc": "姓名",
                    "status": 1
                },
                {
                    "id": "180",
                    "key": "nickname",
                    "name": "昵称",
                    "en_name": "nickname",
                    "field_type": 1,
                    "display_type": 1,
                    "enum_value": [

                    ],
                    "edit_type": 2,
                    "must": true,
                    "desc": "昵称",
                    "status": 1
                },
                {
                    "id": "181",
                    "key": "birthday",
                    "name": "生日",
                    "en_name": "birsth",
                    "field_type": 1,
                    "display_type": 1,
                    "edit_type": 2,
                    "must": null,
                    "desc": "生日",
                    "status": 1
                },
                {
                    "id": "182",
                    "key": "gender",
                    "name": "性别",
                    "field_type": 9,
                    "display_type": 4,
                    "enum_items": [
                        {
                            "key": "_a0",
                            "value": "未知"
                        },
                        {
                            "key": "_a1",
                            "value": "男"
                        },
                        {
                            "key": "_a2",
                            "value": "女"
                        }
                    ],
                    "edit_type": 2,
                    "must": null,
                    "desc": null,
                    "status": 1,
                }
            ],
            "total": 14
        }
    }
}

// @ts-ignore
const fields: FormField[] = res.data.listFormFieldsByFormId.fields;

const renderer = createRenderer(hostConfig);


// @ts-ignore
UnitCenter.use((Unit: any) => {
    Unit.renderer = renderer;
});
// debugger;
const unitCenter = new UnitCenter({ fields, lang: 'zh' });

export default unitCenter;