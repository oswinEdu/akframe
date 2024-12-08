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
 
// var sam = new ak.MyClass();
// sam.printTS();

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
  
  async function printMessage() {
    console.log('Start');
    await delay(1000); // 等待1秒
    console.log('After delay');
  }
  
  printMessage();


/** 
 * cmd + b 编译js
 * cmd + r node命令运行编译好的js
*/