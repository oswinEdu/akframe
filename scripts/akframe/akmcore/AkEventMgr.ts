namespace ak {
    export class AkEventMgr {
        // 事件列表
        private static _eventKVlist: { [key: string]: AkEventVo[] } = {};


        /**
         * 注册事件
         * @param evo 
         */
        public static RegEvent(evo: AkEventVo): void {
            const tar: string = evo.evtname;
            let isFind: boolean = false;

            if (!this._eventKVlist.hasOwnProperty(tar)) {
                this._eventKVlist[tar] = [];
            }

            // 避免同一个事件在一个代理里注册两次
            const events = this._eventKVlist[tar];
            events.forEach(ev => {
                if (ev.proxy === evo.proxy) {
                    isFind = true;
                }
            });
            if (!isFind) events.push(evo);
        }

 
        /**
         * 发送事件
         * @param evt 
         */
        public static S(evt: AkEvent): void {
            if(typeof evt == 'function') {
                AkLog.exception('please new AkEvent ')
            }

            const key: string = AkEventMgr.EventNameObj(evt);
            if (!this._eventKVlist.hasOwnProperty(key)) {
                AkLog.warn(`没有注册事件： ${key}`);
                return;
            }

            const events = this._eventKVlist[key];
            if (events != null) {
                events.forEach(ev => {
                    ev.proxy.ReceiveEvents(evt);
                });
            }
        }
 
        
        /**
         * 获取类名字全路径
         * @param t 
         * @returns 
         */
        public static EventNameClass(t: { new(): AkEvent }): string {
            return `ak_${t.name}`;
        }

        public static EventNameObj(t: AkEvent): string {
            return `ak_${this.EventName(t)}`;
        }

        public static EventName(t: AkEvent): string {
            return `${t.constructor.name}`;
        }
    }
}
