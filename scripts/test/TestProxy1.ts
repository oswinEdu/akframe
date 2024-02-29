class TestProxy1 extends ak.AkProxy {
    
    RegEvents(): (new () => ak.AkEvent)[] {
        return [TestEvent]
    }

    private onTestEvent(tobj: TestEvent): void {
        ak.AkLog.print('调用 1 onTestEvent', tobj.testNum)
    }
}