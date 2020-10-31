<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="控制台日志" content="使用内置 $log 插件，可以在控制台打印各种日志" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <Alert show-icon>
                用法说明
                <p v-font="14" slot="desc">打开控制台，点击不同的按，可显示不同的日志打印效果。</p>
            </Alert>
            <Divider>胶囊型</Divider>
            <Button @click="handleCapsule('iView', 'default', 'default')" size="large" class="ivu-mr ivu-mb">胶囊型（default）</Button>
            <Button type="primary" @click="handleCapsule('iView', 'primary', 'primary')" size="large" class="ivu-mr ivu-mb">胶囊型（primary）</Button>
            <Button type="success" @click="handleCapsule('iView', 'success', 'success')" size="large" class="ivu-mr ivu-mb">胶囊型（success）</Button>
            <Button type="warning" @click="handleCapsule('iView', 'warning', 'warning')" size="large" class="ivu-mr ivu-mb">胶囊型（warning）</Button>
            <Button type="error" @click="handleCapsule('iView', 'error', 'error')" size="large" class="ivu-mr ivu-mb">胶囊型（error）</Button>
            <Divider>普通型</Divider>
            <Button @click="handleConsole('default', 'Default Style')" size="large" class="ivu-mr ivu-mb">普通型（default）</Button>
            <Button type="primary" @click="handleConsole('primary', 'Primary Style')" size="large" class="ivu-mr ivu-mb">普通型（primary）</Button>
            <Button type="success" @click="handleConsole('success', 'Success Style')" size="large" class="ivu-mr ivu-mb">普通型（success）</Button>
            <Button type="warning" @click="handleConsole('warning', 'Warning Style')" size="large" class="ivu-mr ivu-mb">普通型（warning）</Button>
            <Button type="error" @click="handleConsole('error', 'Error Style')" size="large" class="ivu-mr ivu-mb">普通型（error）</Button>
        </Card>
    </div>
</template>
<script>
    export default {
        name: 'tool-log-console',
        methods: {
            handleCapsule (title, info, type) {
                this.$log.capsule(title, info, type);
            },
            handleConsole (type, text) {
                this.$log[type](text);
            }
        }
    }
</script>
