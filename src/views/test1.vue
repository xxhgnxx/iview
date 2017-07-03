<style scoped>
.test2 {
    color: green;
}



.move_out-enter {
    opacity: 0;
    transform: translateY(-30px);
}

.move_out-enter-active {
    transition: all 1s;
}

/*
.move_out-leave {
    opacity: 0;
    transform: translateY(30px);
}

.move_out-leave-active {

    transition: all 1s;
}*/




/*.move_out-enter,
.move_out-leave-active {
    opacity: 0;
    transform: translateY(30px);
    
}*/

@keyframes move_out {
    /*0%{transform:scale(0.5,0.5);}
       60%{transform:scale(1,1);}
       80%{transform:scale(1.5,1.5);}*/
    100% {
        transform: translateY(30px);
    }
}


</style>
<template>
    <div class="test2">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
            <h1>
            </h1>
            <h2>
                <p>list滚动测试</p>
                <div>
                    <div class="hgn_test">
                        <!--<input v-model="query">
                                <transition name="fade" mode="out-in" >
                                
                                <ul>
                                    <li v-for="item in list " transition="staggered" stagger="100" :key="item.num" >
                                        {{item.name}}
                                    </li>
                                </ul>
                                </transition>-->
                        <button @click="show = !show">点击查看变化</button>
                        <transition name="list"> //fade 名字是可以更换的
                            <div v-if="show">
                                请看我的变化
                            </div>
                        </transition>
    
                        <transition name="move_out" mode="out-in">
                            <div :key="list[0]">{{ list[0] }}</div>
                        </transition>
                        <!--<transition-group name="fade" >
                                                    <div class="slide" v-for="(item,index) in list" v-if="index == n" :key="index">
                                                      {{item.name}}
                                                    </div>
                                                </transition-group>-->
                        <!--<transition name="fade" mode="out-in">
                                    <div class="move_out-item" v-for="(item,index) in noteContent" :key="index" @click="click(index)">
                                        {{ item }}
                                    </div>
                                </transition>
                                <ul>
                                    <transition-group tag="ul" name="fade" mode="out-in">
                                        <li v-for="item in list" :key="item.num">
                                            {{ item.name }}
                                        </li>
                                    </transition-group>
                                </ul>-->
                    </div>
                </div>
            </h2>
            </Col>
        </Row>
    </div>
</template>
<script>

export default {
    data() {
        return {
            list_data_toshow: "",
            n: 0,
            list: [],
            noteContent: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10,
            show: true,
        }
    },
    methods: {
        click: function (index) {
            this.noteContent.splice(index, 1);
        },
        handleStart() {
            this.$Modal.info({
                title: 'Bravo',
                content: 'Now, enjoy the convenience of iView.'
            });
        },
        enter: function (el) {

        },
        leave: function (el) {

        },
        list_test() {
            console.log('login_test');
            this.$axios.get(this.getHostName() + '/get_list').then(
                x => {
                    this.list = x.data.list;
                    console.log('list', this.list);
                    var length_show = x.data.list.length;
                    setInterval(() => {
                        // this.list_data_toshow = x.data.list[this.n]
                        // if (this.n == length_show - 1) {
                        //     this.n = 0
                        // } else {
                        //     this.n++
                        // }
                        this.list.unshift(this.list.pop())
                    }, 3000)

                }
            )
        }
    },
    created: function () {
        this.list_test()
        console.log("test1");
    },
};
</script>