namespace ak {
    export class AkProxy implements IProxy {
        public onInit(): void {
        }


        /**
         * 遍历代理里注册的事件
         * 事件=>事件对象, 存储到事件管理
         */
        public StartListen(): void {
            const evts = this.RegEvents();
            evts.forEach($evt => {
                AkEventMgr.RegEvent($evt, this);
            });
        }
      


        /**
         * 回调派生类事件函数
         */
        public ReceiveEvents(evt: AkEvent): void {
            AkLog.error("派生类 实现 ReceiveEvents");
        }
      



        // 派生类实现
        public RegEvents(): { new(): AkEvent }[]  {
            AkLog.error("派生类 实现 RegEvents");
            return [];
        }
    }
}