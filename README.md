# Vue-CLI-Unit-Test
測試在 Vue-CLI 使用 Jest 運行 Unit Test

```
npm run test:unit
```

## 檔案名稱
* 參考: https://github.com/vuejs/vue-cli/issues/1686
* 預設測試檔案必須放至 tests/unit，且檔名必須是 ```*.spec.(js|jsx|ts|tsx)```  
* 可於 jest.config.js 設定 testMatch 參數即可更改

```
testMatch: [
  "<rootDir>/tests/unit/**/*.spec.(js|jsx|ts|tsx)|<rootDir>/**/__tests__/*.(js|jsx|ts|tsx)"
]
``` 