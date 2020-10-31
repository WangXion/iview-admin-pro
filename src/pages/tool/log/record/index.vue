<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="记录日志内容" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <Alert show-icon>
                用法说明
                <p v-font="14" slot="desc">输入要记录的内容，点击记录按钮后，系统会记录日志内容。可在右上角点击"日志"按钮查看。</p>
            </Alert>
            <Input v-model="value" placeholder="输入日志内容..." size="large" v-width="200" />
            <Button :disabled="!value" type="primary" size="large" class="ivu-ml" @click="handleRecord">记录</Button>
        </Card>
    </div>
</template>
<script>
    export default {
        name: 'tool-log-record',
        data () {
            return {
                value: ''
            }
        },
        methods: {
            handleRecord () {
                this.$log.push(this.value);
            }
        }
    }
</script>
