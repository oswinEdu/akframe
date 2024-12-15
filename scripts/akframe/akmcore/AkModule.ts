namespace ak {
    export class AkModule implements IModule {

        /**
         * 注册代理
         *
         * @memberof AkModule
         */
        public StartProxy(): void {
            const proxys = this.RegProxy();
            proxys.forEach($item => {
                const proxy = new $item();
                proxy.OnInit();
                proxy.StartListen();
            });
        }
        

        // 派生类实现
        // 
        protected RegProxy(): Array<{new():AkProxy}> 
        {
            ak.AkLog.error("派生类实现 RegProxy");
            return [];
        }
    }
}