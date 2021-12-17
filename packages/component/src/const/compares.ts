import { t } from '../utils';

export enum CompareType {
    CompareNone = 'CompareNone',
    Equal = 'Equal',
    NotEqual = 'NotEqual',
    LessThan = 'LessThan',
    GreaterThan = 'GreaterThan',
    LessThanOrEqualTo = 'LessThanOrEqualTo',
    GreaterThanOrEqualTo = 'GreaterThanOrEqualTo',
    Contain = 'Contain',
    NotContain = 'NotContain',
    Include = 'Include',
    NotInclude = 'NotInclude',
    Is = 'Is',
    IsNot = 'IsNot'
}

export const COMPARE_MAP = {
    [CompareType.Equal]: t('be_equal_to'), //等于
    [CompareType.NotEqual]: t('Not_equal_to'), //不等于
    [CompareType.LessThan]: t('less_than'), //小于
    [CompareType.GreaterThan]: t('greater_than'),//大于
    [CompareType.LessThanOrEqualTo]: t('Less_than_or_equal_to'),//小于等于
    [CompareType.GreaterThanOrEqualTo]: t('Greater_than_or_equal_to'),//大于等于
    [CompareType.Contain]: t('contain'),//包含
    [CompareType.Include]: t('contain'),//包含
    [CompareType.NotInclude]: t('Not_included'),//不包含
    [CompareType.NotContain]: t('Not_included'),//不包含
    [CompareType.Is]: t('yes'),//是
    [CompareType.IsNot]: t('no'),//不是
};
