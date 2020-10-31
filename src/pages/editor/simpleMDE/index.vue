<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="simpleMDE 编辑器" content="对 simpleMDE 进行过封装，可以使用 v-model 绑定数据。" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <i-mde v-model="value" ref="mde" />
            <Divider />
            <Button @click="handleAddText">增加文本</Button>
            <Button @click="handleAddImg" class="ivu-ml">增加图片</Button>
        </Card>

        <Card title="Markdown 内容" :bordered="false" dis-hover class="ivu-mt">
            <pre>{{ value }}</pre>
        </Card>
    </div>
</template>
<script>
    import iMde from '@/components/mde';

    export default {
        name: 'editor-simpleMDE',
        components: { iMde },
        data () {
            return {
                value: '# iView Admin Pro'
            }
        },
        methods: {
            handleAddText () {
                this.$refs.mde.add('\n### 新增加的内容');
            },
            handleAddImg () {
                this.$refs.mde.add('\n![](https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png)');
            }
        }
    }
</script>
