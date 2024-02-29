namespace ak {
    export class AkProxy implements IProxy {
        /**
         * 遍历代理里注册的事件
         * 事件=>事件对象, 存储到事件管理
         */
        public StartListen(): void {
            const evts = this.RegEvents();
            evts.forEach($evt => {
                const inc = new AkEventVo(AkEventMgr.EventNameClass($evt), this);
                AkEventMgr.RegEvent(inc);
            });
        }
      

        /**
         * 回调派生类事件函数
         */
        public ReceiveEvents(evt: AkEvent, ...plist: any[]): void {
            this.ExecuteHook(evt, plist);
        }
      

        /**
         * 反射调用方法
         */
        protected ExecuteHook(evt: AkEvent, ...args: any[]): boolean {
            const method = `on${AkEventMgr.EventName(evt)}`;
            const info = this.constructor as any;

            const methodinfo = info.prototype[method];
            if (methodinfo) {
                methodinfo.call(this, evt);
                return true;
            }
            
            console.warn(`Register the event:${method} but not find handle method!`);
            return false;
        }



        // 派生类实现
        public RegEvents(): { new(): AkEvent }[]  {
            AkLog.error("派生类 实现 RegEvents");
            return [];
        }
    }
}