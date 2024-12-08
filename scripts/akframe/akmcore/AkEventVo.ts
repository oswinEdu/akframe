namespace ak {
    export class AkEventVo {
        public proxy: AkProxy = new AkProxy();
        public evtname: string = ""; // 事件类名字

        public constructor(name:string, proxy:AkProxy) {
            this.evtname = name;
            this.proxy = proxy;
        }
    }
}
