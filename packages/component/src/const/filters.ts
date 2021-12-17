import { FormFieldType } from '.';
import { t } from '../utils';
// 字段 以及对应的过滤字段. 可查看 https://phabri.meetwhale.com/w/product/be/service_wiki/dynamic_form/filter/
export enum FilterOption {
  EQ = 0,
  GT = 1,
  GE = 2,
  LT = 3,
  LE = 4,
  NE = 5,
  IN = 6,
  NOT_IN = 7,
  Contain = 8,
  NotInclude = 9
};

export const FILTER_MAP = {
  [FilterOption.EQ]: t('be_equal_to'), //等于
  [FilterOption.GT]: t('greater_than'),//大于
  [FilterOption.GE]: t('Greater_than_or_equal_to'),//大于等于
  [FilterOption.LT]: t('less_than'), //小于
  [FilterOption.LE]: t('Less_than_or_equal_to'),//小于等于
  [FilterOption.NE]: t('Not_equal_to'), //不等于
  [FilterOption.IN]: t('contain'),//包含
  [FilterOption.NOT_IN]: t('Not_included'),//不包含
  [FilterOption.Contain]: t('contain'),//包含
  [FilterOption.NotInclude]: t('Not_included'),//不包含
} as const;
