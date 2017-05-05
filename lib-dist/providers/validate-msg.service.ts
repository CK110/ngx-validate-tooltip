import { Injectable } from '@angular/core';

@Injectable()
export class ValidateMsgService {

  constructor() { }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      'required': '*必填项',
      'invalidCreditCard': '无效的信用卡号码',
      'invalidEmailAddress': '无效的邮箱',
      'invalidPassword': '无效密码. 密码由6~20位字母、数字或者特殊字符组成',
      'invalidLength': `长度只能为${validatorValue.requiredLength}`,
      'invalidMinlength': `最短长度 ${validatorValue.minLength}个字符`,
      'invalidMaxlength': `最大长度 ${validatorValue.maxLength}个字符`,
      'invalidMinValue': `最小值为${validatorValue.minValue}`,
      'invalidMaxValue': `最大值为${validatorValue.maxValue}`,
      'invalidChs' : '请输入汉字',
      'invalidEnglish' : '请输入英文',
      'invalidZip' : '邮政编码不存在',
      'invalidQq' : 'QQ号码不正确',
      'invalidAge' : '年龄必须是0到120之间的整数',
      'invalidPhone' : '座机格式不正确,请使用下面格式:020-88888888',
      'invalidIntOrFloat' : '请输入数字，并确保格式正确',
      'invalidInt' : '请输入正整数，并确保格式正确',
      'invalidIntandzero' : '请输入正整数或者0，并确保格式正确',
      'invalidMobile' : '手机号码格式不正确',
      'invalidPhoneOrMobile' : '固话或者手机格式不正确,固话格式:020-88888888',
      'invalidLoginName' : '登录名称只允许汉字、英文字母、数字及下划线。',
      'invalidUsername' : '用户名不合法（字母开头，允许6-16字节，允许字母数字下划线）',
      'invalidName' : '请输入姓名',
      'invalidUnnormal' : '输入值不能为空和包含其他非法字符',

      'minlength': `最短长度 ${validatorValue.requiredLength}个字符`
    };

    return config[validatorName];
  }
}
