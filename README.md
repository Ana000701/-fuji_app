## 2024/9/5 修改紀錄

### Bootstrap 5 樣式修改

**1. 顏色修改：variables.scss**

- 新增 primary-number、secondary-number 系列顏色
- `$success、$info、$warning、$danger` 色票改成與設計系統一致
- `$grays` 系列顏色修改成與設計系統一致

**2. 關閉字體 rfs**
`$enable-rfs: false !default;`

**3. 字體預設顏色修改**
`$body-color: $gray-800 !default;`

**4. a 標籤下底線刪除**
`$link-decoration: null !default`;

**5. Paragraphs margin-bottom 預設改為 0px**
`$paragraph-margin-bottom: 0px !default;`

**6. gutter 改為 32px(左右各 16px)**
`$grid-gutter-width: 2rem !default;`

**7. 行高新增 1.2 1.4 1.6**
`$line-height-xs: 1.2 !default;`
`$line-height-sm: 1.4 !default;`
`$line-height-base: 1.5 !default;`
`$line-height-lg: 1.6 !default;`
備註：此處修正包含 node_module/bootstrap/utilities.scss

**8. 字體大小新增 18px 14px 12px 11px**
`$h3-font-size: $font-size-base * 1.5 !default;`
`$h4-font-size: $font-size-base * 1.25 !default;`
`$h5-font-size: $font-size-base * 1.125 !default;`
`$h6-font-size: $font-size-base !default;`
`$h7-font-size: $font-size-base * 0.875 !default;`
`$h8-font-size: $font-size-base * 0.75 !default;`
`$h9-font-size: $font-size-base * 0.68 !default;`

**9. border-radius 新增尺寸**
`$border-radius: 0.375rem !default; // 6px`
`$border-radius-xs: 0.125rem !default; // 2px`
`$border-radius-sm: 0.25rem !default; // 4px`
`$border-radius-lg: 0.5rem !default; // 8px`
`$border-radius-xl: 1rem !default; // 16px`
`$border-radius-xxl: 2rem !default; // 32px`
`$border-radius-pill: 50rem !default; // 80px`

<!-- # 網頁切版直播班 Vite 範例 - Bootstrap 版本

## Node.js 版本
  - 專案的 Node.js 版本需為 v16 以上
  - 查看自己版本指令：`node -v`


## 指令列表
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

## 資料夾結構
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - scss # SCSS 的樣式放置處

  - layout # ejs 模板放置處
  - pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

### 注意事項
- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽
vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能


## 部署 gh-pages 流程說明
### Windows 版本
1. 在 GitHub 建立一個新的 Repository

2. 部署前請務必先將原始碼上傳到 GitHub Repository 也就是初始化 GitHub，因此通常第一步驟會在專案終端機輸入以下指令
```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main // 僅限第一次輸入，往後只需要輸入 git push
```

3. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署 -->
