class TestProxy2 extends ak.AkProxy {
    
    RegEvents(): (new () => ak.AkEvent)[] {
        return [TestEvent]
    }

    public ReceiveEvents(evt: ak.AkEvent): void {
        switch (evt.getClass()) {
            case TestEvent:
                this.onTestEvent(evt as TestEvent);
                break;
        }
    }

    private onTestEvent(tobj:TestEvent): void {
        ak.AkLog.print('调用 2 onTestEvent', tobj.testNum)
    }
}