namespace ak {
    export class AkModule implements IModule {
        public OnInit(): void {
        }

        /**
         * 注册代理
         * @memberof AkModule
         */
        public StartProxy(): void {
            const proxys = this.RegisterProxy();
            proxys.forEach($item => {
                (new $item()).StartListen();
            });
        }


        // 派生类实现
        // 
        protected RegisterProxy(): Array<{ new(): AkProxy }> {
            AkLog.error("派生类实现 RegisterProxy");
            return [];
        }
    }
}