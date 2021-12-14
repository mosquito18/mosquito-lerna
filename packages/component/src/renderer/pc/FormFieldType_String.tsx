import React from 'react';
import FieldClass from '../../register/fieldTypeString';
import { Input, Tooltip } from '@whale-labs/want';
import { Input as FormInput } from '../../components';

export function renderFilterType(ins: FieldClass, params: any) {
    return (
        <Input
            {...params}
            placeholder={ins.placeholder}
            onChange={(e) => params.onChange && params.onChange(e.target.value)}
            style={{ width: 144 }}
        />
    );
};

export function renderTableCell(ins: FieldClass, params: any) {
    if (!params?.value) {
        return '- -';
    }
    if (params.ellipsis) {
        return <Tooltip title={params.value}>
            {params.value}
        </Tooltip>
    }
    return <span>{params.value}</span>;
};

export function renderFormCell(ins: FieldClass, params: any) {
    return <FormInput {...params} placeholder={ins.placeholder} />;
}