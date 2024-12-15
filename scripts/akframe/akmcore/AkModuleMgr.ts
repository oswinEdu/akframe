namespace ak {
    export class AkModuleMgr {
        /**
         * 注册 module
         *
         * @static
         * @param {{new():AkModule}} $module
         * @memberof AkModuleMgr
         */
        public static RegisterModule(list: {new():AkModule}[]) {
            for(const $module of list) {
                let ins: IModule = new $module();
                ins.StartProxy()
            }
        }
    }
}
