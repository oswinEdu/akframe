namespace ak {
    export class MyClass {
        public constructor() {
            AkModuleMgr.RegisterModule(TestModule);

            setTimeout(() => {
                let tobj = new TestEvent()
                tobj.testNum = -99;
                AkEventMgr.S(tobj);
            }, 500);
        }

    }
}

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function printMessage() {
    console.log('Start');

    new ak.MyClass();

    console.log('After delay');
}

printMessage();


/** 
 * cmd + b 编译js
 * cmd + r node命令运行编译好的js
*/