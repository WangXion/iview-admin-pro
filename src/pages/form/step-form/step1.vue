<template>
    <Form ref="form" :model="data" :rules="rules" :label-width="labelWidth" :label-position="labelPosition">
        <FormItem label="付款账户：" prop="payAccount">
            <Select v-model="data.payAccount">
                <Option value="admin@iview.design">admin@iview.design</Option>
            </Select>
        </FormItem>
        <FormItem label="收款账户：" prop="gatheringAccount">
            <Input v-model="data.gatheringAccount">
                <Select v-model="data.gatheringType" slot="prepend" style="width: 80px">
                    <Option value="wechat">微信</Option>
                    <Option value="alipay">支付宝</Option>
                </Select>
            </Input>
        </FormItem>
        <FormItem label="收款人姓名：" prop="gatheringName">
            <Input v-model="data.gatheringName" />
        </FormItem>
        <FormItem label="转账金额：" prop="price">
            <Input v-model="data.price" prefix="logo-usd" />
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit">下一步</Button>
        </FormItem>
    </Form>
</template>
<script>
    import mixin from './mixins';

    export default {
        mixins: [ mixin ],
        data () {
            return {
                data: {
                    payAccount: 'admin@iview.design',
                    gatheringAccount: 'aresn@iview.design',
                    gatheringType: 'wechat',
                    gatheringName: 'Aresn',
                    price: '100'
                },
                rules: {
                    payAccount: [
                        { required: true, message: '请选择付款账户', trigger: 'change' }
                    ],
                    gatheringAccount: [
                        { required: true, message: '请输入收款账户', trigger: 'blur' },
                        { type: 'email', message: '账户名应为邮箱格式', trigger: 'blur' }
                    ],
                    gatheringName: [
                        { required: true, message: '请输入收款人姓名', trigger: 'blur' }
                    ],
                    price: [
                        { required: true, message: '请输入转账金额', trigger: 'blur' },
                        { pattern: /^(\d+)((?:\.\d+)?)$/, message: '请输入合法金额数字' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit () {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.$emit('on-next-step', this.data);
                    }
                });
            }
        }
    }
</script>
