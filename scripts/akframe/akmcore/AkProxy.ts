namespace ak {
    export class AkProxy implements IProxy {
        public OnInit(): void {
        }


        /**
         * 遍历代理里注册的事件
         * 事件=>事件对象, 存储到事件管理
         */
        public StartListen(): void {
            const evts = this.RegisterEvents();
            evts.forEach($evt => {
                AkEventMgr.RegisterEvents($evt, this);
            });
        }
      

        /**
         * 回调派生类事件函数
         */
        public ReceiveEvents(evt: AkEvent): void {
            AkLog.error("派生类 实现 ReceiveEvents");
        }



        // 派生类实现
        public RegisterEvents(): { new(): AkEvent }[]  {
            AkLog.error("派生类 实现 RegisterEvents");
            return [];
        }
    }
}