namespace ak {
    type AkEventClass = { new(): AkEvent };
    type AkModuleClass = { new(): AkModule };

    /**
     * 通知名和数据类型的映射接口
     * 使用时应扩展此接口，定义具体的通知名和数据类型对应关系
     * 示例：
     * interface NoticeMap {
     *     "USER_LOGIN": { userId: number, userName: string };
     *     "USER_LOGOUT": { userId: number };
     * }
     */
    interface AkNoticeMap {
        [name: string]: any;
    }

    type AkNoticeCallback<T = any> = (data: T) => void;
}