namespace ak {
    export class AkEventVo {
        public proxy: AkProxy = new AkProxy();
        public evtname: string = ""; // 事件类名字

        private static _uniqueid: number = 0;
        private _evtid: number;

        public constructor(name:string, proxy:AkProxy) {
            this.evtname = name;
            this.proxy = proxy;
            AkEventVo._uniqueid += 1;
            this._evtid = AkEventVo._uniqueid;
        }
    }
}
