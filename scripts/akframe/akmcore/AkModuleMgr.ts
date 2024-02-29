namespace ak {
    export class AkModuleMgr {
        /**
         * 注册 module
         *
         * @static
         * @param {{new():AkModule}} $module
         * @memberof AkModuleMgr
         */
        public static StartModule($module: {new():AkModule}) {
            let ins: IModule = new $module();
            ins.StartProxy()
        }
    }
}
