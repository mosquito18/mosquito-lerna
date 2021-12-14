export enum FormFieldType {
    _FormFieldType = 0 ,
    // 单行文本
    FormFieldType_String = 1,
    // 多行文本
    FormFieldType_Text = 2,
    // 整数
    FormFieldType_Int = 3,
    // 浮点数
    FormFieldType_Float = 4,
    // 年月日, 20211105，接收 yyyy-MM-dd || yyyyMMdd 格式，返回 yyyy-MM-dd 格式，为空返回空字符串
    FormFieldType_Date = 5,
    // 年月日时分秒, 20211105163545，接收 yyyy-MM-dd HH:mm:ss || yyyyMMddHHmmss   格式，返回 yyyy-MM-dd HH:mm:ss ，为空返回空字符串
    FormFieldType_DateTime = 6,
    // 时间戳, 1612502095, 传入非空字符串内容 toint 处理，否则按 0 处理
    FormFieldType_Timestamp = 7,
    // 邮箱格式验证
    FormFieldType_Email = 8,
    // 枚举，单选，有限固定值
    FormFieldType_Enum = 9,
    // 枚举，多选，有限固定值
    FormFieldType_Multiple_Enum = 10,
    // 图片地址，数组，json array decode 传入
    FormFieldType_Image = 11,
    // 图片链接，素材库 id
    FormFieldType_Image_Resource = 12,
    // url 链接验证
    FormFieldType_Url = 13,
    // 手机号码格式验证
    FormFieldType_Phone = 14,
    // 标签，来源 whale tag 服务
    FormFieldType_Tags = 15,
    //  // 表单嵌套，代表这个 field 关联了另一个 model，配置 field 的 config 设置 form
    //  FormFieldType_Nested = 16,
    //
    // 动态枚举值、单选，不固定值
    FormFieldType_Enum_DataSource = 16,
    // 动态枚举值、多选，不固定值
    FormFieldType_Multiple_Enum_DataSource = 17,
    //CDP用户
    FormFieldType_CDPUser = 18,
    //上传到素材库
    FormFieldType_Upload_Resource = 19,
    //动态级联、单选，不固定值
    FormFieldType_Cascader = 21,
    //动态级联、多选，不固定值
    FormFieldType_Cascader_Multiple = 22,
}

export enum Permissions {
    // 创建
    Create = 1,
    // 更新
    Update = 2,
    // 读取
    Read = 3,
    // 删除
    Delete = 4,
}

/**
 * 图标类型
 */
export enum FormFieldBaseType {
    text,
    number,
    date,
    enum,
    unknown,
}
