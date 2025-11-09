class TestProxy2 extends ak.AkProxy {
    
    RegisterEvents(): (new () => ak.AkEvent)[] {
        return [TestEvent, TestEventTwo]
    }

    public ReceiveEvents(evt: ak.AkEvent): void {
        switch (evt.getClass()) {
            case TestEvent:
                this.onTestEvent(evt as TestEvent);
                break;
            case TestEventTwo:
                this.onTestEventTwo(evt as TestEventTwo);
                break;
        }
    }

    private onTestEvent(tobj:TestEvent): void {
        ak.AkLog.print('调用 TestProxy2 onTestEvent', tobj.testNum);
    }


    private onTestEventTwo(tobj:TestEventTwo): void {
        ak.AkLog.print('调用 2 onTestEventTwo');
    }
}