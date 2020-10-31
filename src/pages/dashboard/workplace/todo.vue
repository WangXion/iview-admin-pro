<template>
    <div class="dashboard-workplace-todo i-table-no-border">
        <Table :data="data" :columns="columns" :draggable="true" @on-drag-drop="onDragDrop">
            <template slot="move">
                <Icon type="md-menu" class="dashboard-workplace-todo-move" title="拖拽排序" />
            </template>
            <template slot-scope="{ row }" slot="user">
                <AvatarList :list="row.user" size="small" />
            </template>
        </Table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: [
                    {
                        task: 'Card 支持点击，可以配置 to 等属性',
                        user: [
                            {
                                tip: 'Aresn',
                                src: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                            },
                            {
                                tip: '中小鱼',
                                src: 'https://dev-file.iviewui.com/userinfoYLhfo1S945BOLuFT96NRStYeYDFRviF5/avatar'
                            }
                        ]
                    },
                    {
                        task: 'Tabs 新增属性，高度可以自适应其它高度',
                        user: [
                            {
                                tip: 'Echo',
                                src: 'https://dev-file.iviewui.com/userinfoxlXwHVwZkCQtl1Zyd1wrvF78b1rZkhfK/avatar'
                            }
                        ]
                    },
                    {
                        task: 'Drawer 新增可拖拽调整宽度的属性',
                        _checked: true,
                        user: [
                            {
                                tip: '唐不苦',
                                src: 'https://dev-file.iviewui.com/userinfosvaY5tb7yfnSFTTimcjy3vuSG6RC28v2/avatar'
                            }
                        ]
                    },
                    {
                        task: 'AvatarList 支持配置 extra，不一定给全量数据',
                        user: [
                            {
                                tip: '甜筒',
                                src: 'https://dev-file.iviewui.com/userinforaP8NeQgYpmKgkpWlqZP7rfewbHiIzJY/avatar'
                            },
                            {
                                tip: 'Aresn',
                                src: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                            }
                        ]
                    }
                ],
                columns: [
                    {
                        title: ' ',
                        width: 10,
                        slot: 'move'
                    },
                    {
                        type: 'selection',
                        width: 56
                    },
                    {
                        title: '任务',
                        key: 'task',
                        tooltip: true
                    },
                    {
                        title: '协作者',
                        slot: 'user',
                        width: 100
                    }
                ]
            }
        },
        methods: {
            onDragDrop (a, b) {
                this.data.splice(b, 1, ...this.data.splice(a, 1, this.data[b]));
            }
        }
    }
</script>
<style lang="less">
    .dashboard-workplace-todo{
        padding-bottom: 8px;
        &-move{
            cursor: pointer;
            position: relative;
            left: -14px;
            color: #808695;
        }
    }
</style>
