<style scoped>
   
</style>
<template>
    <div class="">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                </h1>
                <h2>
                    <p>测试页面2</p>
                    <!--<Button type="ghost" @click="handleStart">Start iView</Button>-->
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    };
</script>