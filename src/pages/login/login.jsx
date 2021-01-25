import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './css/login.less'
// import axios from 'axios';
// import logo from './imgs/'
export default class Login extends React.Component {
    // 表单提交请求
    onFinish = (values) => {
        alert('表单提交成功')
    };
    pwdvalidator = (rule ,value) => {
        if ( !value ) {
            return Promise.reject('请输入密码!')
        } else if ( value.length < 6 ) {
            return Promise.reject('密码最小长度为6位')
        } else if (value.length > 18 ) {
            return Promise.reject('密码最大长度为18位')
        } else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{8,16}$/).test(value) ) {
            return Promise.reject('密码至少包含1个大写字母，1个小写字母和1个数字')
        }
        return Promise.resolve()
    }
    render() {
        return (
            <div className='login'>
                <div className="header">
                    <img src="holder.js/40x40?bg=#90a&text=logo" alt="logo"/>
                    {/* <img src={logo} alt="logo"/> */}
                    <h1>商品管理系统</h1>
                </div>
                <div className="section">
                    <h1>用户登录</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: false,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: '请输入用户名', },
                                { min: 6, message: '用户名最小长度为6位', },
                                { max: 18, message: '用户名最大长度为18位', },
                                { pattern: /^\w+$/, message: '请输入数字,字母,下划线', },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { validator: this.pwdvalidator },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="http://www.baidu.com">
                                Forgot password
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}