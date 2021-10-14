/*
舒淇+极速 修改版
作者:坤坤
修改：jammy chen 20211013
变量最后不带url的，默认全部是请求body
*/

const jobname = '舒淇爱我'
const $ = Env(jobname)

//ck部分，请对应填写到下面变量
const sqbody={
	//舒淇部分
	//签到 /api/activity/xapi/signin/v5/signInAction
	"shuqidailysign":"clientTimestamp=1634180531&position=501&signInType=1&wua=HIVW_pMzUaJrwZ07xTYEB0WgWNwAd2h5W%2B2yTki95yws7gI7Srb7Knefu%2Bxm1CwlIPLS2Nqba5oheC8zQjr5GGujkjw3xxLNE1lIAtSYiKIUOq3JAg2t47rdFkEdd8%2BwDtz2xYfCDW3VoE8PlHAeOso4gDAhF%2Bs242ld4%2BHf06fb3qKHkiX5UoJmEmmrxeNHhfrk9QPCoEEsNHGXT625uc5mmlQijXvnYMoBp66T5w%2Bm6rxg%3D&miniWua=HHnB_yH5aVFnuoEErohVZxoNj9no6hryP0mq5O98GrrtX7es%3D&userId=2898958236&umidtoken=YP1UV7RurwcDAHwanugzMrNO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1634180531&sqSv=1.0&sign=d06e0ef45c909c436722ce7f03d14eb9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.4.1%26utdid%3DYP1UV7RurwcDAHwanugzMrNO%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2898958236%26sn%3DE51ECB70EB116BE63DAB0B88728BE1ACF0A17E63%26umidtoken%3DYP1UV7RurwcDAHwanugzMrNO%26msv%3D8.0.0%26brand%3DApple%26imei%3DAA13D4ECF858AB80960BEC9944FDC1FFBCE0EEE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyODk4OTU4MjM2IiwidXRkaWQiOiIiLCJpbWVpIjoiQUExM0Q0RUNGODU4QUI4MDk2MEJFQzk5NDRGREMxRkZCQ0UwRUVFNyIsInNuIjoiRTUxRUNCNzBFQjExNkJFNjNEQUIwQjg4NzI4QkUxQUNGMEExN0U2MyIsImV4cCI6MTYzNDY5ODg2OCwidXNlcklkIjoiMjg5ODk1ODIzNiIsImlhdCI6MTYzNDE4MDQ2OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Wug3lAZYSlmecpigXAleCOzFt8btY5YLDmnoQXu0zSG5ptKOuJUpQT_4JkXArm7Tlvz6Y0DI0h3Ojs1IXmNBqA%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D828x1792%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7EA83FC0-E3D6-41DA-901E-19C16EE315E1",
	//4.5x任务中心 小游戏，浏览游戏大厅，推荐阅读,浏览书城等 /api/activity/v1/task/reward
	"shuqitaskbody1":"userId=2898958236&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1634180702&sqSv=1.0&sign=25308d498630a178665bc7b15f23d0dc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.4.1%26utdid%3DYP1UV7RurwcDAHwanugzMrNO%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2898958236%26sn%3DE51ECB70EB116BE63DAB0B88728BE1ACF0A17E63%26umidtoken%3DYP1UV7RurwcDAHwanugzMrNO%26msv%3D8.0.0%26brand%3DApple%26imei%3DAA13D4ECF858AB80960BEC9944FDC1FFBCE0EEE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyODk4OTU4MjM2IiwidXRkaWQiOiIiLCJpbWVpIjoiQUExM0Q0RUNGODU4QUI4MDk2MEJFQzk5NDRGREMxRkZCQ0UwRUVFNyIsInNuIjoiRTUxRUNCNzBFQjExNkJFNjNEQUIwQjg4NzI4QkUxQUNGMEExN0U2MyIsImV4cCI6MTYzNDY5ODg2OCwidXNlcklkIjoiMjg5ODk1ODIzNiIsImlhdCI6MTYzNDE4MDQ2OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Wug3lAZYSlmecpigXAleCOzFt8btY5YLDmnoQXu0zSG5ptKOuJUpQT_4JkXArm7Tlvz6Y0DI0h3Ojs1IXmNBqA%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D828x1792%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7EA83FC0-E3D6-41DA-901E-19C16EE315E1",
	"shuqitaskbody2":"",
	"shuqitaskbody3":"",
	"shuqitaskbody4":"",
	//书旗福利中心收气泡 /api
/prizecenter/xapi/prize/manual/receive
	"shuqireceive":"userId=2898958236&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1634180702&sqSv=1.0&sign=25308d498630a178665bc7b15f23d0dc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.4.1%26utdid%3DYP1UV7RurwcDAHwanugzMrNO%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2898958236%26sn%3DE51ECB70EB116BE63DAB0B88728BE1ACF0A17E63%26umidtoken%3DYP1UV7RurwcDAHwanugzMrNO%26msv%3D8.0.0%26brand%3DApple%26imei%3DAA13D4ECF858AB80960BEC9944FDC1FFBCE0EEE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyODk4OTU4MjM2IiwidXRkaWQiOiIiLCJpbWVpIjoiQUExM0Q0RUNGODU4QUI4MDk2MEJFQzk5NDRGREMxRkZCQ0UwRUVFNyIsInNuIjoiRTUxRUNCNzBFQjExNkJFNjNEQUIwQjg4NzI4QkUxQUNGMEExN0U2MyIsImV4cCI6MTYzNDY5ODg2OCwidXNlcklkIjoiMjg5ODk1ODIzNiIsImlhdCI6MTYzNDE4MDQ2OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Wug3lAZYSlmecpigXAleCOzFt8btY5YLDmnoQXu0zSG5ptKOuJUpQT_4JkXArm7Tlvz6Y0DI0h3Ojs1IXmNBqA%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D828x1792%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7EA83FC0-E3D6-41DA-901E-19C16EE315E1",
	//书旗福利中心-看视频4.26版
	"shuqivedio426":'',
	
	//以下版本自己找不失效的
	//书旗福利中心-转转转看视频 /api/ad/union/sdk/reward_video/reward/
	"shuqizzzvediodraw":'{\"message\":\"2zkGeT0ZqjvVPGtT94qTYmsBJr9hzREerJgIIAqSScHtePRIrHxjgZrTAHuzb1yhfAgeVnArOI+MIRejBtIrI14eegPc7mFuKWHqY5TN5HpJLs9OVhZ977rryxqiS34BY3A\\/Z486JGOCr+nT0RB1gYkqJ\\/OgieFKPp18OcVIzonGAYAa7zGHF\\/YFWp9T2r9yuIkTfkP3rP9CFJgDU2+qHAWHjfxTXGGXa+vIwFpnylxInQ7i\\/yN0FMkZqdHfK+nuPB7+NxYofd\\/ti93EUbtCc3OmCR849GqlrooDnq8ZjuxF5SRhtE\\/8TBZ5p8uEGSVtukwmdbkvyh592hd3fgoDYP0tD6+lHRMW9B13RU5L9JI6tkgJe44XH2IaqXSuTlUyUbCTolezPLWqq1MRG295gXgQl0WkKr4kpcaLdFRCIXaIzicBWrHOqJhbKnNFh9aAvCmnSbzaXVMHxrJC\\/dFqK1W5R1XmGOfWzETGb1WaYBiu3eYPOiSeupkU7RoKgq9tWDyiavdIRwXaJDWrzTyeYDIfr6LGrpwKssp2aFAxzgnPZJTQpX+heWHzqnw0oksBq9oYIXKV2Ms8KkCNJ1CwrA7gi0OgeahOEKAnZMsLRxyq4e9Qt2BRhs5MIXJYJGOcuNxkYkS6q7Un4ji9I4f2zbdM2WabYpZCfUSlacvDZNZyN0ObqH34ZuNo1lV9NozYmrm7DjC+QVc7SIv60RqoWEjD1tozTnz4T0PK6vv27124pSduBH\\/UWNqmZBZh62+ENHzeGpgVsb9lEtiPXMMP2o4EweQ3y7QdIhHdY36QhiUagbOQEHNoluClPvsgfh4kp2k5OWm\\/oaku4XeTYydXij88UfXPzg5ixIp4X9DYaqySOlO\\/CsUB4+TqOv4ARw5LGCe34bYuT5qFI2a8VQxjrK8AXG6q3C7ARHw8ffqp9su3l\\/4s\\/M9s12OH4cZvVChgJKd1dj7F+ERjC0TPNhbl7G+5H0AVPfMRT1f2lcY+PlJzzqXrfuHQqlnOiowjQcXQsl6qXXiTFlyzSWsswp0mIj1xRBDj8xitvx02kESr88O+QM8XRYE2hCoJpsmaLtXSHMqQ72RLtzFP374kEK3PXGK7Q0OsU\\/0IyVmvia7BX7V3yNICO7Yg6Cu9\\/x05lFYfxU0fZOOP11nGbCxMvuDOqVXV6V0rK0Lu6sW6eg5w4GTQf2XJGSl3xKM89XsffxX1OggZZ2K4LZDgGgosDiMScrfxvlYG7GzEE5Lw4VaUaR7Q9HX9QPuHuNJOelxjUaYizKcw5ACWhoqYHukXNgC90E6hS7j6cTzL2YLWje5ZeXjGvUtB26INL3zF5L6GlXtlQ+d7ZxUWXKfgZYKZXO\\/TMTsy8T6tezqnWkMId7X3yOa1\\/XAlNPa0v0Ge25r33dZ4MBMVAzxVBe9AoVzbL1iG+BsoRF0bFYjGHhxb0hOf2NXPcF3aDu3UrKXYKdm9HAyPFL1b90ClFn5czngX1g46oK\\/xp9cyGCKmpdvEVlggJTyxctq+xF911ang65XNlX0vFce2UJkADS1fsqRYFxsi9vAgKeO64CLM2qlkdDN\\/WpLOBrQIBVS3c5RrGyENQFzz86mpfcshMhDcWu62Tni0zO1EyBaNcjFp365eEqZg41c0UP3264pdeIlf94V6MusxHqn+vdzkkrXiP3C4O9FCttuJv7IP7eN7E7UZxuBbKxruAikQubwx6u1wrGAmdqaz08l3mbamjsDJtWDR55rBLG\\/wJP555KJnbNKRLiooicU84c4rwCWwA2k54Jj4\\/IaC78WMaMwacOpZcypL4EydQhZgg19n5VhaJFfQ6HIdlJF4y2ZqsyxGOTWnGZnbY8+NAFu\\/o1JrCiBK0dyBOPfwrA2PxLap7xqiaXWTqKJnTHd8GjMCzh\\/+w6tG0TIyTXwnpmAU2nSxAy52u2pVpw7VQJLKaKVE3YXzTtQpCAtoER5gNJfHw8RPVjMrmJyZrRVhHguCexG5xjruJwLRGufTdk\\/l\\/ssYhOhFWSKtGa3\\/YtE3dWENRI+AvqYfn\\/2MASlR0dKdjRNFD2mkNAIQB97MV9avr0StDh4WvKF1bAulJCID2rxOICZO8datHLI+6BlVo6\\/6mKZl0iCaPneCLUTArNQFA9l0Fe8Uw9GS3lxD\\/x3ZNNeEJf3Vm7zkgb\\/2Q3RnRjLAKj5PrraCbudn7NHS5m6M2QN2tXpBT0S0to65E4xZTwphbayaAW2QiWsfn3fjtMhimrizOocVBvhRhmt0JZET3irM7cfIs7DZXvEhPlTJriwWmbnEt4db8RP4I\\/vX+7U6Asmaa0+rZPp6PxDVcGyVQNCoXX9K2jJJ6V1v7KRDRGcKeyYpaRvR7ZTtFc1\\/OEXmpUQ2bXsyGL4dp1AGQTIJSwmO9Yios\\/Upcg\\/5mdwpHy\\/lDp+TLUQo3c9mYDPgpIf3ycBCtV\\/Xtsldx9g8Esfv\\/SdZRTDm0f8JOQYyso7+p0kuzj+SVr6Fjgn0R7tFhb4+UY6ykBgbpr\\/s6wlfVmeGLWmtIWuLqIKsDLvmWfecI18VPfI+4+2o3by0iqs1EOokhzyTC1LNE0GBLsdAIocg4+83lKG1kg4E8bzi6CzsN96nU8PtqE6nPR4ED8pZu0m4R4SJzQ5mlms7bstLinqFfTR7hDltgRY\\/uJ2J2iPjlQY69ks5FJd81hRPRiBoGiQLB+XxV3oKJEm0bF7QyD6ZpqsN\\/qnEaorf7vIuPFnu9hcJfjTbkEU7pAFypYmFjn6ASoCMx0waRZXLasLK+zeDHAM1fF1fHfxpi5Lfs4hKv\\/co+F12LzkhSeVkBRiPXpzk6bkfJ875kUd4e1LByJMOfUh4MX9tlrELx9uMuNsKXt5L8Ysv6m9RTL4gQPmh\\/\\/fA9T5X\\/1pdEXrwiHKKTAXSzQAtwwC1j3ttSgoiqr5CFTHDQY30qz8bCoL8ebZ6B+9loc26LWKdxCMZaUoHjjx72Sj9NcJSJhdBobq\\/yhbj7OAg6yun91GitBMW9RK84\\/1br\\/I78iUrOfM3TkbdvFnsMOezVUi3mJwZ2We+R4\\/CcEvDi0YlMfMml9cP1EpiuewFTvw7jEVAuJ5QVYpn0NPMWqWYzFnQ3ltYgGZY7CIRdb3mxoN0QOzqtnWeX6Yb8Fs7ejfS22eReEBDLJ1XHUXg3gpZu7rPR9TyPxc1pX+JfCehRdlmoN3OjqysLJ9La6nXXUAlJaId8SM\\/ZIMiTXkHg7uItkUcCADJuv+KN06ZnJ4kCtZf0cOKZgVfMkJHvfmSloPtnOOqfxVJHNW4vohwaANQ6sjvnhD6Rxd\\/ax3EdbaDYCsn8cgZJ0UyDaVf2+I+uozfiLXrGHm5hR5FaSLcC6RTL3jOlm0x\\/0Ax7wrAKuMSC6M++HL3gkC\\/jk6C\\/2FFt1xHFpjgofH\\/vWQhWV28jJIEUsqqVt0N\\/+bS3sqy+brnzIlqezeWRMzwYrOxH90tijISnA0XNinYKf99rvmKak2VevpdETFOQaMcfuNV6wCA1L9fsQZRzu6TDbaCC8WpDntCCJOXY2nArgnqsGQBCclNdRTtRnAIvqBnl5YfMjkkOWPxIAEBjEW6+UT59naDr\\/xLg4mtM1FLCaQV\\/RrYwyqD3Op90iZ1eP+21DWrgwQLwIVMnfsOHOIl09jzMONG4YGaisy4fYa4vMyTM7XXRjZemFrP\\/cr54p9+faUdR+JI7GmVl6RXAj6EkrD12PWA1wNX4HrtSlkp9gh\\/Ydq4Jx+9XJ0VvRakYZH7wbgESh8YTTebxCWtVdD2fn1UnmtKW+K8GFhEeYig23GPU8HblTsTaYlUcnWo3wYeWUy2LsIlCJ6ymSy\\/d0sDbrEKAeT3CxINamfhoK7irajUzXsqnq2tYWZNPzs8yOcFKp7NoF6\\/PjryxK+JexSd8n0vMHJRBPTaCG\\/sDZlEHJfJ8TZ3NV6\\/V3J5Jfoi\\/7f19+4YjNv37++tNrMWG3JmO94j+BKWljp4Hl4Z\\/yWk5LEGateQgNJb96XeqMSOqcIxjveaOUshypZ05HuxU2VFFA5MHGQjdcxq63l+podX6pC7BuYHQmbZ8acfNb5+DSlzXSYgUO7yMQDXZJfcFBl\\/hNtHfdR31uME90ozE4y\\/aDNwG65OTZr4LIwDzwDI03aUSjT5icZJv0wSuujRKCLXzLI9\\/kFrwA2mdoFp8tGinSCZ7ZVw6Xq1pVEHj49HSBFZGlRqBbAENd+zoBX6hH+SXJTEjZ7oEmtjqy9kLxkauo6yJMxmaxYutREL0g+QTQyR7001iYrdIndf1Ab6VQk8d75fIcu+m8lVixVyi35ayMrpBRUbwstE3S7wfJYSr2cKIl5i8N4hB5Hp26nZFD9CWbbTWeuhklOAInY7H9vbes3omi3HPTQWSUTnEdK7zX1tnrz9KjfNWkyfbvA8U5bc9WDuCH5GDI9G3cNyXkwucsuCEQP6R1RKp6ZwGu25rsNkdwwXKulgomQGnWYOb1075a+d+mwuSOb1TOCWImU9sdRCMgq25NCcJY4pnhQbuKZrD\\/X8J6q0\\/iWj9Vc6gEbo8mDPv0W\\/F1\\/LO+pCQNR1weXSPlidEJ\\/3FBq7Sf55TXa5DocXPTqlqmIqsTwU8FtHWYIy049p2xQmaE7JoF\\/7KEPYPha0IGmPRzAburthNUsWQfUUaXxxoZm+V8OQUJN8=\",\"cypher\":2}',
	//书旗福利中心-转转转抽奖 /api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR
	"shuqizzzdrawreward":"activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_YZJpTkGJ8%2FkQj969RlduOfj%2BVSkieMroEd7koepW6ySH4xYZLpI5Fx%2FtVxTcyNQqi%2F90wEJbw8Iey78EyXPQNJ75MyWgCodcxqPTdxIX2VeggS%2F0LT7sFWAYIRc7R3UV7xClyBxISLwkHJjnOjVdrBOjGvRx15kdvoE69o1cne2q%2FEjEnnfKs%2FgrkqSzZBGYtYs05q8ShCsnE88C6oyNefajinOuoOeLIlfx7XXwnls%3D&miniWua=HHnB_NMbvEeQaJEHyEkPYFAbjElcVB%2FoKSJt8fF741AgmjEw%3D&userId=2898958236&umidtoken=YP1UV7RurwcDAHwanugzMrNO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1634180609&sqSv=1.0&sign=8987728458d2b69dce7ff434ea2a5c1e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.4.1%26utdid%3DYP1UV7RurwcDAHwanugzMrNO%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2898958236%26sn%3DE51ECB70EB116BE63DAB0B88728BE1ACF0A17E63%26umidtoken%3DYP1UV7RurwcDAHwanugzMrNO%26msv%3D8.0.0%26brand%3DApple%26imei%3DAA13D4ECF858AB80960BEC9944FDC1FFBCE0EEE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyODk4OTU4MjM2IiwidXRkaWQiOiIiLCJpbWVpIjoiQUExM0Q0RUNGODU4QUI4MDk2MEJFQzk5NDRGREMxRkZCQ0UwRUVFNyIsInNuIjoiRTUxRUNCNzBFQjExNkJFNjNEQUIwQjg4NzI4QkUxQUNGMEExN0U2MyIsImV4cCI6MTYzNDY5ODkwNCwidXNlcklkIjoiMjg5ODk1ODIzNiIsImlhdCI6MTYzNDE4MDUwNCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.5hfQDKDRmlzb3zIbHBKyCTR2UNZs5C6_WkHR34enBGnvlZ2DxgvRoUulTHbQGz-SH27o-TvvACpH4F1gAUrHxw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D828x1792%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7EA83FC0-E3D6-41DA-901E-19C16EE315E1",
	//书旗福利中心-看视频
	"shuqivedio":'',
	
	//极速版部分
	//极速版阅读1.05 小说看30秒 https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?
	"shuqijsreadurl":"",
	"shuqijsreadbody":"",
	//极速版1.05点击福利 赚金币 浏览书城 https://ocean.shuqireader.com/api/activity/v1/task/reward?
	"shuqijsscurl":"",
	"shuqijsscbody":"",
	//极速版1.05，福利中心-签到 https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction
	"shuqijsdailysign":"",
	
}

let taskarr = [sqbody.shuqitaskbody1,sqbody.shuqitaskbody2,sqbody.shuqitaskbody3,sqbody.shuqitaskbody4];
taskarr.forEach(item => {
    item = item + 1;
})

!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    //nodejs运行
	
	$.log(`🏠 开始每日签到`)
    await dailysign(sqbody.shuqidailysign);
    await $.wait(1000);
	//任务中心
	$.log(`🏠 完成4.5福利中心任务`)
	for (let k=0;k<taskarr.length;k++){
		if (taskarr[k]){
		await task(taskarr[k]);
		await $.wait(1000);
		}
	}
	
	await $.wait(1000);	
	
	$.log(`🏠 开始极速版签到`)
    await dailysign(sqbody.shuqijsdailysign);	
    await $.wait(1000);
	
	$.log(`🏠 开始刷福利转转转`)
    for (let i = 0; i < 10; i++) {
        await vedioreward(sqbody.shuqizzzvediodraw);
        await $.wait(1000);
		$.log(`🕐 福利转转转，开始第${i+1}次抽奖`)
        await drawreward(sqbody.shuqizzzdrawreward);
    }
    await $.wait(1000);
	$.log(`🏠 舒淇视频任务奖励`)	
    for (let i = 0; i < 10; i++) {
        await await vedioreward(sqbody.shuqivedio);
        await $.wait(1000);
    }	

    await $.wait(1000);
	$.log(`🏠 极速版书城`)
    await jsshucheng(sqbody.shuqijsscurl,sqbody.shuqijsscbody);
    await $.wait(1000);
	$.log(`🏠 426视频奖励`)	
    for (let i = 0; i < 10; i++) {
        await vedioreward(sqbody.shuqivedio426);
        await $.wait(1000);
    }	

    await $.wait(1000);
	$.log(`🏠 开始收取气泡`)
    await receive(sqbody.shuqireceive);
	
    await $.wait(1000);
	
	$.log(`🏠 极速版阅读`)
    await jsread(sqbody.shuqijsreadurl,sqbody.shuqijsreadbody);	
	

	$.log(`🔺 书旗任务结束`)
}
//视频任务
function vedioreward(vediobody) {
  return new Promise(resolve => {
        const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Host": "api-access.pangolin-sdk-toutiao.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const request = {
            url: url,
            headers: headers,
            body: vediobody
        };

        $.post(request, async (error, response, data) => {	
      try {
        if (error) {
          //console.log(`${JSON.stringify(error)}`)
          //console.log(response)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
			//$.log(data);
			$.log(`【视频】--上传成功`);
        }        
      } catch (e) {
        $.log(e)
      } finally {
        resolve();
      }
    })
  })
}	



//书旗福利中心-转转转抽奖
function drawreward(zzzrewardbody) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Leto(JSBridgeVersion/3.0) AliApp(sqbody.shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_29) WK",
            "Accept-Language": "zh-cn"
        };		
        const request = {
            url: url,
            headers: headers,
            body: zzzrewardbody
        };

        $.post(request, async (error, response, data) => {
            try {                
				//$.log(data);
				if (safeGet(data)){
				const result = JSON.parse(data);
				if (result.status == 200) {
					$.log(`🈶书旗：`+result.data.prizeList[0].prizeDesc+result.data.prizeList[0].prizeName+` 🎉`);
				}
				else{
					$.log(`⛔️书旗金币大转盘奖励：失败`);
				}
				}
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



//4.5书旗福利中心收气泡
function receive(receivebody) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(sqbody.shuqi/4.5.0.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.5.0.0) 1125x2436 Winding(WV_6) WK",
            "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=YS4QdoRAb/cDALU3c6blgBkx&ustatus=1&contentRecom=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2940533611&sn=C9349F8FCFF670AD45E3E27EEC65D9658B023895&umidtoken=+nJLaZdLOsarZzV8WfusDQnxgtq3CeOz&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.5.0.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTQwNTMzNjExIiwidXRkaWQiOiIiLCJpbWVpIjoiNjE2OEFEQjI4RTJGOUM4OTk3MDczQUZFM0FFNkE2MkZGRUQ4Q0VDQyIsInNuIjoiQzkzNDlGOEZDRkY2NzBBRDQ1RTNFMjdFRUM2NUQ5NjU4QjAyMzg5NSIsImV4cCI6MTYzNDEyOTYyMCwidXNlcklkIjoiMjk0MDUzMzYxMSIsImlhdCI6MTYzMzYxMTIyMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.4lO7CHX4UQWQ9OEAWLXzAlC-ZPYdhpiudIelCppMPatUsLA-QVyFldqLQW5gvBQ01tiM7h8XesOa9gb0u1Uv6Q&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=6168ADB28E2F9C8997073AFE3AE6A62FFED8CECC&mod=iPhone8&ver=210827&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=20.000000&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=08A53849-3D58-417A-8484-7D10A9A3A125",
            "Content-Length": "1349",
            "Accept-Language": "zh-cn"
        };
        const request = {
            url: url,
            headers: headers,
            body: receivebody
        };

        $.post(request, async (error, response, data) => {
			try {
			if (safeGet(data)){
				$.resource = JSON.parse(data);            
                $.log(`🕐 收取气泡：`+$.resource.message+` 🎉`);
			}
            } catch (e) {
                $.log(e)
			}
            resolve();
        })
    })
}

//极速版阅读1.05 小说看30秒，搜lottery
function jsread(shuqijsreadurl,shuqijsreadbody) {
    return new Promise((resolve, reject) => {
        //const url = shuqijsreadurl;
        const headers = {
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 12.0; Scale/2.00)",
            "Content-Length": "717",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const request = {
            url: shuqijsreadurl,
            headers: headers,
            body: shuqijsreadbody
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
				if (safeGet(data)){
                const result = JSON.parse(data)
                if (result.status == 200) {
                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
						$.log(`🈶极速阅读今日获取：`+result.data.todayBizCoinAmount+`🎉`);
						$.log(`🕐极速阅读正在刷第：`+result.data.chanceCurrentCnt+` 次`);
                        await jsread();
                        await $.wait(1000);
                    }
					else{
						$.log(`🕐极速阅读已达最大次数：`+result.data.chanceMaxCnt+` 次`);
					}
						
                }
				}
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


//极速版1.05点击福利 赚金币 浏览书城
function jsshucheng(shuqijsscurl,shuqijsscbody) {
    return new Promise((resolve, reject) => {
        const url = shuqijsscurl;
        const headers = {
            //"Cookie": "isg=BElJpLIVTKe_OTDS6wfviDOGUnGjlj3ILsAiQ-u_zzBSMixEM-dzmfjychCEcdUA; cna=aJ7lGZo2Kw4CAXWWzAtuJPqu",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 12.0; Scale/3.00)",
            "Content-Length": "100",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const request = {
            url: url,
            headers: headers,
            body: shuqijsscbody
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
				if (safeGet(data)){
				const result = JSON.parse(data);
				if (result.status == 200) {
					$.log(`🈶极速版书城：`+result.data.rewards.desc+`🎉`);
				}
				else{
					$.log(`⛔️极速版书城：`+result.message+``);
				}
				}
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



//签到，极速版签到1.05
function dailysign(dailysignVal) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(sqbody.shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_2) WK",
            "Content-Length": "2001",
            "Accept-Language": "zh-cn"
        };
        const request = {
            url: url,
            headers: headers,
            body: dailysignVal
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
				if (safeGet(data)){
				const result = JSON.parse(data);
				if (result.status == 200) {
					$.log(`🈶书旗签到：`+result.data.copyWriting+`🎉`);
				}
				else{
					$.log(`⛔️书旗签到：`+result.message+`🎉`);
				}
				}
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



//福利中心做任务
function task(taskbody) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(sqbody.shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Content-Length": "1802",
            "Accept-Language": "zh-cn"
        };
        const request = {
            url: url,
            headers: headers,
            body: taskbody
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
				if (safeGet(data)){
				const result = JSON.parse(data);
				if (result.status == 200) {
					$.log(`【书旗任务中心】`+result.data.rewards[0].desc+`🎉`);
				}
				else{
					$.log(`【书旗任务中心】`+result.message+`⛔️`);
				}
				}
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

//解码
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}