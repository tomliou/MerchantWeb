# MerchantWeb

這是一個以 **React + Vite** 建立的靜態頁面專案，用來展示「牧羊人經銷平台｜台灣站」的 **購物車視覺稿**。
目前著重在 **畫面與互動排版**，尚未串接真實 API 或後端。

線上預覽（GitHub Pages）：
https://tomliou.github.io/MerchantWeb/

---

## 功能與畫面說明

- **頂部導覽列**
  - 平台 Logo 與標題「牧羊人經銷平台｜台灣站」
  - 分類導覽：新品專區、寵食品牌、人食品牌（含箭頭圖示）
  - 右上角登入狀態區塊：登出按鈕、使用者名稱、會員頭像、購物車圖示與數量徽章

- **經銷商與品牌切換區**
  - 經銷商下拉選單（目前為靜態 UI，尚未串接實際選項）
  - 「清空購物車」按鈕
  - 品牌 Tab 群組（汪喵星球、超凝小姐、HeroMama、角落水族 …），每個品牌顯示待結帳商品數

- **購物車商品區（左側）**
  - 商品卡片展示：
    - 商品圖、名稱、規格標籤（例如「小罐 80g｜田園火雞」）
    - 單價、數量調整按鈕（+ / -）、小計金額
    - 刪除／移除按鈕、整卡刪除圖示
  - 優惠活動提示：
    - 已符合的贈品活動（綠色勾勾與說明文字）
    - 尚未達成的湊滿折扣提醒（灰／橘色提示）

- **贈品區**
  - 顯示各種符合條件的贈品活動，例如：
    - 「買罐頭箱裝 / 凍乾主食 500g，贈零食 1 包」
    - 「買就送 凍乾零食 10 包」
  - 未選擇與已選擇狀態的視覺差異，包含縮圖列、已選擇贈品名稱與數量等

- **右側：優惠與金額摘要**
  - 優惠券區塊：
    - 折抵優惠數量、已省金額
    - 折扣碼輸入框＋使用按鈕（目前為 UI 範例）
  - 交易金額摘要：
    - 商品總計、優惠折扣、加價購、運費、點數／好友推薦、稅額
    - 顯示「已省下多少」與訂購總額，並有免運／差多少免運等提示

- **配送方式**
  - 目前示範「7-11 常溫超商取貨」：
    - 常溫標籤、運費規則說明
    - 編輯配送方式按鈕（UI）

- **底部固定區塊**
  - 底部優惠條（優惠折扣入口）
  - 結帳條：
    - 顯示總金額、已省下金額、含運金額
    - 「前往結帳」主行動按鈕

> 注意：目前所有金額、數量、優惠狀態皆為 **靜態示意資料**，尚未實作真正的加減計算與後端串接。

---

## 技術棧（Tech Stack）

- **框架**：React 18
- **建構工具**：Vite 5（React + TypeScript 範本）
- **路由**：React Router DOM 6（`createBrowserRouter`）
- **樣式**：純 CSS，集中於 `CartPage.css`

---

## 專案結構（重點）

- `main.tsx`：React 入口，掛載 `RouterProvider`
- `routes.tsx`：定義路由，目前：
  - `/` → `CartPage`
  - `/cart` → `CartPage`
- `CartPage.tsx`：整個購物車頁面的主元件（版型與區塊結構）
- `CartPage.css`：對應的詳細版面與視覺樣式
- `vite.config.ts`：
  - 設定 `base: "/MerchantWeb/"` 以支援 GitHub Pages 子路徑
  - build 完成後自動將 `index.html` 複製為 `404.html`，支援 SPA 路由刷新

---

## 本機開發與建置

### 安裝依賴

```bash
npm install
```

### 開發模式（本機預覽）

```bash
npm run dev
```

啟動後預設可在 `http://localhost:5173` 開啟。

### 正式建置

```bash
npm run build
```

產出的靜態檔案會放在 `dist/` 目錄。

---

## 部署到 GitHub Pages（簡要說明）

- Vite `base` 已設定為 `/MerchantWeb/`，對應專案網址：  
  `https://tomliou.github.io/MerchantWeb/`
- 專案內有 GitHub Actions workflow：`.github/workflows/deploy-pages.yml`
  - 當 push 到 `main` 時：
    - 自動執行 `npm ci`、`npm run build`
    - 上傳 `dist` 為 Pages artifact 並部署
- GitHub 專案設定：
  - `Settings` → `Pages` → **Source 選擇「GitHub Actions」**

---

## 未來可擴充方向

- 把靜態金額與數量改為實際可互動的狀態管理（如使用 React state 或全域 store）
- 串接後端 API，取得真實商品列表、優惠資訊與運費規則
- 增加 RWD 響應式設計與可存取性優化

