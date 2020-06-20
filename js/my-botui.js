var botui = new BotUI("hello-sanarous")
    botui.message.add({
        delay: 800,
        content: "Hi, 来访的小伙伴 👋"
    }).then(function () {
        botui.message.add({
            delay: 1100,
            content: "这里是一个有问必答、畅所欲言的留言区"
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "博客凌乱，希望标题达意，内容详略，愿君可于字句间有所收获"
            }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "本网站的各内容页都有版权标识，若能得欣赏，望转载标注来源"
            }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "反对抄袭与简单的复制粘贴，若发现本站有此现象，可严厉批评"
            }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "若见内容错漏、超链失效，愿寄言告，若编辑提交合并，将感泣"
            }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "你有什么想对 Sanarous 说的嘛？"
            }).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{
                        text: "说啥好呢？ 😃",
                        value: "sure"
                    }, {
                        text: "说个锤子！ 🙄",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
            botui.message.add({
                delay: 600,
                content: "😘"
            }).then(function () {
                secondpart()
            })
        },
        end = function () {
            botui.message.add({
                delay: 600,
                content: "![](https://image.bestzuo.cn/images/20200608090924.jpg)"
            })
        },
        secondpart = function () {
            botui.message.add({
                delay: 1500,
                content: "这里可以交换友链"
            }).then(function () {
                botui.message.add({
                    delay: 1500,
                    content: "提出一些博客建站问题"
                }).then(function () {
                botui.message.add({
                    delay: 1500,
                    content: "还可以谈谈心情及感受"
                }).then(function () {
                    botui.message.add({
                        delay: 1200,
                        content: "如果需要及时收到回复，请在留言区填写你的邮箱哦，一定会保密的"
                    }).then(function () {
                        botui.message.add({
                            delay: 1500,
                            content: "同时本站深色模式自动跟随日出日落，晚上访问会自动进入深色模式哦"
                        }).then(function () {
                                    botui.action.button({
                                        delay: 1100,
                                        action: [{
                                            text: "怎么才能收到回复呢？ 🤔",
                                            value: "get-reply"
                                        }]
                                    }).then(function (a) {
                                        thirdpart()
                                    })
                                })
                            })
                        })
                    })
                })
        },
        thirdpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "在留言区填写邮箱，会及时通过邮件收到回复哦，而且一定保密~  😄"
            }).then(function () {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "评论区的小伙伴徽章怎么获得呢？",
                        value: "about-friends"
                    }]
                }).then(function (a) {
                    fourthpart()
                })
            })
        },
        fourthpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "首先需要加入本站的友链哦 "
            }).then(function () {
                botui.message.add({
                    delay: 1100,
                    content: "然后等待博主第一时间给你添加到小伙伴中"
                }).then(function () {
                      botui.message.add({
                      delay: 1600,
                      content: "非常感谢你的耐心观看，那么，相遇就是缘分，留个 jio 印吧 ^_^"
                   })
                })
            })
        } 
