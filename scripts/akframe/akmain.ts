namespace ak {
    globalThis.ak = ak;
    // 支持浏览器和 Node.js 环境
    if (typeof window !== 'undefined') {
        window['ak'] = ak;
    }
}

