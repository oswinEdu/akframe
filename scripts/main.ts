namespace ak {
    export class MyClass {
        public constructor() {
            AkModuleMgr.StartModule(TestModule);

            setTimeout(() => {
                let tobj = new TestEvent()
                tobj.testNum = -99;
                AkEventMgr.S(tobj);
            }, 1000);
        }

        printTS() {
        }
    }
}
 
var sam = new ak.MyClass();
sam.printTS();

