class TestProxy2 extends ak.AkProxy {
    
    RegEvents(): (new () => ak.AkEvent)[] {
        return [TestEvent]
    }

    private onTestEvent(): void {
        ak.AkLog.print('调用 2 onTestEvent')
    }
}