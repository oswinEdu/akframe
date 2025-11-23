// 首先需要扩展 NoticeMap 接口来定义通知名和数据的对应关系
// namespace ak {
//     interface NoticeMap {
//         "USER_LOGIN": { userId: number, userName: string };
//         "USER_LOGOUT": { userId: number };
//         "SCORE_UPDATE": { score: number, level: number };
//     }
// }

// 使用示例
namespace TestNotice {
    interface NoticeMap2 {
        // [noticeName: string]: any;
        "USER_LOGIN": { userId: number, userName: string };
        "USER_LOGOUT": { userId: number };
        "SCORE_UPDATE": { score: number, level: number };
    }

    interface NoticeMap3 {
        // [noticeName: string]: any;
        "USER_LOGIN": { userId: number, userName: string };
        "USER_LOGOUT": { userId: number };
        "SCORE_UPDATE": { score: number, level: number };
    }


    const noticeMgr = new ak.AkNoticeMgr<NoticeMap3>();


    // 1. 注册通知
    export function testRegNotice(): void {

        // 注册 USER_LOGIN 通知
        noticeMgr.RegisterNotice("USER_LOGIN", (data) => {
            // console.log("用户登录:", data.userId, data.userName);
            // data 的类型自动推断为 { userId: number, userName: string }
        });

        // 注册 USER_LOGOUT 通知
        noticeMgr.RegisterNotice("USER_LOGOUT", (data) => {
            console.log("用户登出:", data.userId);
            // data 的类型自动推断为 { userId: number }
        });

        // 注册 SCORE_UPDATE 通知
        noticeMgr.RegisterNotice("SCORE_UPDATE", (data) => {
            console.log("分数更新:", data.score, data.level);
        });
    }

    // 2. 发送通知
    export function testSendNotice(): void {
        // 发送 USER_LOGIN 通知，数据类型必须匹配
        noticeMgr.SNotice("USER_LOGIN", {
            userId: 123,
            userName: "张三"
        });

        // 发送 USER_LOGOUT 通知
        noticeMgr.SNotice("USER_LOGOUT", {
            userId: 123,
        });

        // 发送 SCORE_UPDATE 通知
        noticeMgr.SNotice("SCORE_UPDATE", {
            score: 1000,
            level: 5,
        });
    }

    // 3. 移除通知
    export function testRemoveNotice(): void {
        // 定义回调函数以便后续移除
        const loginCallback = (data: { userId: number, userName: string }) => {
            console.log("登录回调:", data);
        };

        // 注册通知
        noticeMgr.RegisterNotice("USER_LOGIN", loginCallback);

        // 移除指定的回调
        noticeMgr.RemoveNotice("USER_LOGIN", loginCallback);

        // 或者移除该通知的所有回调
        noticeMgr.RemoveNotice("USER_LOGIN");
    }

    // 4. 检查通知
    export function testCheckNotice(): void {
        noticeMgr.RegisterNotice("USER_LOGIN", (data) => {
            console.log("登录:", data);
        });

        // 检查通知是否已注册
        const hasNotice = noticeMgr.HasNotice("USER_LOGIN");
        console.log("通知是否存在:", hasNotice);

        // 获取监听者数量
        const count = noticeMgr.GetNoticeCount("USER_LOGIN");
        console.log("监听者数量:", count);
    }
}

