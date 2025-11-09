class TestModule extends ak.AkModule {
    protected RegisterProxy(): Array<{new():ak.AkProxy}> 
    {
        return [TestProxy1, TestProxy2];
    }
}