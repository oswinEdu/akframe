namespace ak {
    export class AkModuleMgr {
        /**
         * 注册 module
         *
         * @static
         * @param {{new():AkModule}} $module
         * @memberof AkModuleMgr
         */
        public static RegisterModule(moduleClass: new() => AkModule) {
            let ins: IModule = new moduleClass();
            ins.StartProxy()
        }

        public static StartModule() {
        }
    }
}
