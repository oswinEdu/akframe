class TestProxy2 extends ak.AkProxy {
    
    RegEvents(): (new () => ak.AkEvent)[] {
        return [TestEvent]
    }

    private onTestEvent(tobj:TestEvent): void {
        ak.AkLog.print('调用 2 onTestEvent', tobj.testNum)
    }
}