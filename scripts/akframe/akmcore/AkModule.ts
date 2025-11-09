namespace ak {
    export class AkModule implements IModule {
        public onInit(): void {

        }

        /**
         * 注册代理
         *
         * @memberof AkModule
         */
        public StartProxy(): void {
            const proxys = this.RegProxy();
            proxys.forEach($item => {
                (new $item()).StartListen();
            });
        }


        // 派生类实现
        // 
        protected RegProxy(): Array<{ new(): AkProxy }> {
            AkLog.error("派生类实现 RegProxy");
            return [];
        }
    }
}