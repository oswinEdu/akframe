class TestProxy1 extends ak.AkProxy {
    RegisterEvents(): (new () => ak.AkEvent)[] {
        return [TestEvent]
    }

    ReceiveEvents(evt: ak.AkEvent): void {
        switch (evt.getClass()) {
            case TestEvent:
                this.onTestEvent(evt as TestEvent);
                break;
        }
    }

    private onTestEvent(tobj: TestEvent): void {
        console.log('调用 1 onTestEvent', tobj.testNum)
    }
}