## 2024/9/5 修改紀錄

### Bootstrap 5 樣式修改

**1. 顏色修改：variables.scss**

- 新增 primary-number、secondary-number 系列顏色
- `$success、$info、$warning、$danger` 色票改成與設計系統一致
- `$grays` 系列顏色修改成與設計系統一致

以上都可以用 `bg-*`、`text-*`、`link-*` 引用顏色

**2. 關閉字體 rfs**
`$enable-rfs: false !default;`

**3. 字體預設顏色修改**
`$body-color: $gray-800 !default;`

**4. a 標籤下底線刪除**
`$link-decoration: none !default`;

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

## 2024/9/6 修改紀錄

**1. 圖片皆放置至 assets**

**2. 修改 ul ol 的 margin bottom 及 padding left**
`ol,ul {  // padding-left: 2rem;  padding-left: 0;}`
`ol,ul,dl {  margin-top: 0;  // margin-bottom: 1rem;  margin-bottom: 0;}`

**3. 修改 spacer**
目前間距 1-7 由小到大分別對應：4px 8px 16px 18px 20px 24px 32px

**4. 新增`_base.scss`**
目前新增一些簡單的 css reset 跟限制 container-fluid 寬度為 375px `max-width: 375px`

**5. 新增 bottom-navigation**
簡單試做一小部分 layout 練手感
