namespace ak {
    export class AkModuleMgr {
        public static RegisterModule(moduleClass: AkModuleClass) {
            let ins: IModule = new moduleClass();
            ins.onInit();
            ins.StartProxy();
        }


        public static RegisterModuleList(moduleClassList: AkModuleClass[]) {
            for (let i = 0; i < moduleClassList.length; i++) {
                let moduleClass: AkModuleClass = moduleClassList[i];
                this.RegisterModule(moduleClass);
            }
        }


        public static StartModule() { }
    }
}
