namespace ak {
    export class AkEventMgr {
        private static _eventMap: Map<AkEventClass,AkProxy[]> = new Map();


        /**
         * 注册事件
         * @param evo 
         */
        public static RegisterEvents(evo: AkEventClass, proxy:AkProxy): void {
            let proxyList:  AkProxy[] = []
            if(this._eventMap.has(evo)) {
                proxyList = this._eventMap.get(evo) ?? [];
            } else {
                this._eventMap.set(evo, proxyList);
            }
            proxyList.push(proxy);
            ak.AkLog.print('注册事件', proxyList.length);
        }

 
        /**
         * 发送事件
         * @param evt 
         */
        public static S(evt: AkEvent): void {
            let proxyList:  AkProxy[] = [];
            const evtClass = evt.getClass();
            if(this._eventMap.has(evtClass)) {
                proxyList = this._eventMap.get(evtClass) ?? [];
            }

            proxyList.forEach(proxy => {
                console.log("proxy:", proxy['constructor']['name']);
                proxy.ReceiveEvents(evt);
            });
        }
    }
}
