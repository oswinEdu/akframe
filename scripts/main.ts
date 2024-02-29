namespace ak {
    export class MyClass {
        public constructor() {
            AkModuleMgr.StartModule(TestModule);

            setTimeout(() => {
                AkEventMgr.S(TestEvent);
            }, 1000);
        }

        printTS() {
        }
    }
}
 
var sam = new ak.MyClass();
sam.printTS();

