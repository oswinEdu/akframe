class TestModule extends ak.AkModule {
    protected RegProxy(): Array<{new():ak.AkProxy}> 
    {
        return [TestProxy1, TestProxy2];
    }
}