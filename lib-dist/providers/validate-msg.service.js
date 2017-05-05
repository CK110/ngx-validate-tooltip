import { Injectable } from '@angular/core';
var ValidateMsgService = (function () {
    function ValidateMsgService() {
    }
    ValidateMsgService.prototype.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': '*必填项',
            'invalidCreditCard': '无效的信用卡号码',
            'invalidEmailAddress': '无效的邮箱',
            'invalidPassword': '无效密码. 密码由6~20位字母、数字或者特殊字符组成',
            'invalidLength': "\u957F\u5EA6\u53EA\u80FD\u4E3A" + validatorValue.requiredLength,
            'invalidMinlength': "\u6700\u77ED\u957F\u5EA6 " + validatorValue.minLength + "\u4E2A\u5B57\u7B26",
            'invalidMaxlength': "\u6700\u5927\u957F\u5EA6 " + validatorValue.maxLength + "\u4E2A\u5B57\u7B26",
            'invalidMinValue': "\u6700\u5C0F\u503C\u4E3A" + validatorValue.minValue,
            'invalidMaxValue': "\u6700\u5927\u503C\u4E3A" + validatorValue.maxValue,
            'invalidChs': '请输入汉字',
            'invalidEnglish': '请输入英文',
            'invalidZip': '邮政编码不存在',
            'invalidQq': 'QQ号码不正确',
            'invalidAge': '年龄必须是0到120之间的整数',
            'invalidPhone': '座机格式不正确,请使用下面格式:020-88888888',
            'invalidIntOrFloat': '请输入数字，并确保格式正确',
            'invalidInt': '请输入正整数，并确保格式正确',
            'invalidIntandzero': '请输入正整数或者0，并确保格式正确',
            'invalidMobile': '手机号码格式不正确',
            'invalidPhoneOrMobile': '固话或者手机格式不正确,固话格式:020-88888888',
            'invalidLoginName': '登录名称只允许汉字、英文字母、数字及下划线。',
            'invalidUsername': '用户名不合法（字母开头，允许6-16字节，允许字母数字下划线）',
            'invalidName': '请输入姓名',
            'invalidUnnormal': '输入值不能为空和包含其他非法字符',
            'minlength': "\u6700\u77ED\u957F\u5EA6 " + validatorValue.requiredLength + "\u4E2A\u5B57\u7B26"
        };
        return config[validatorName];
    };
    return ValidateMsgService;
}());
export { ValidateMsgService };
ValidateMsgService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ValidateMsgService.ctorParameters = function () { return []; };
//# sourceMappingURL=validate-msg.service.js.map