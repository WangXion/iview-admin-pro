<template>
    <Form ref="form" :model="data" :rules="rules" :label-width="labelWidth" :label-position="labelPosition">
        <Alert show-icon closable>
            确认转账后，资金将直接打入对方账户，无法退回。
        </Alert>
        <FormItem label="付款账户：">
            {{ infoData.payAccount }}
        </FormItem>
        <FormItem label="收款账户：">
            {{ infoData.gatheringAccount }}
        </FormItem>
        <FormItem label="收款人姓名：">
            {{ infoData.gatheringName }}
        </FormItem>
        <FormItem label="转账金额：">
            <strong>
                <Icon type="logo-usd" />
                {{ infoData.price }}
            </strong>
        </FormItem>
        <Divider />
        <FormItem label="支付密码：" prop="password">
            <Input v-model="data.password" type="password" />
        </FormItem>
        <FormItem>
            <Button type="primary" :loading="loading" @click="handleSubmit">提交</Button>
            <Button @click="handlePrev" class="ivu-ml">上一步</Button>
        </FormItem>
    </Form>
</template>
<script>
    import mixin from './mixins';

    export default {
        mixins: [ mixin ],
        props: {
            infoData: {
                type: Object
            }
        },
        data () {
            return {
                data: {
                    password: '123456'
                },
                rules: {
                    password: [
                        { required: true, message: '请输入支付密码', trigger: 'blur' }
                    ]
                },
                loading: false
            }
        },
        methods: {
            handleSubmit () {
                this.$refs.form.validate((valid) => {
                    this.loading = true;
                    if (valid) {
                        setTimeout(() => {
                            this.$emit('on-next-step', this.data);
                            this.loading = false;
                        }, 2000);
                    } else {
                        this.loading = false;
                    }
                });
            },
            handlePrev () {
                this.$emit('on-prev-step');
            }
        }
    }
</script>
