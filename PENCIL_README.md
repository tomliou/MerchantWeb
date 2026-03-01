# Pencil 使用說明

本文件為 **Pencil**（.pen 設計工具）的獨立說明，與本專案（MerchantWeb）的業務與技術棧分開，僅描述如何在 Cursor 中透過 Pencil MCP 進行設計與驗證。

---

## 什麼是 Pencil

Pencil 是針對 **網頁與行動應用** 的設計編輯器，設計稿儲存在 **.pen** 檔案中。  
**.pen 為加密格式**，無法用一般編輯器或 `Read` / `Grep` 讀取，**必須透過 Pencil MCP 工具** 讀寫。

---

## 可用工具一覽

| 工具 | 用途 |
|------|------|
| `get_editor_state()` | 取得目前開啟的畫布、選取狀態等，作為設計任務的起點 |
| `open_document(filePathOrNew)` | 開新檔傳 `"new"`；開既有檔傳 .pen 的絕對路徑 |
| `get_guidelines(topic)` | 取得設計規範與 .pen schema，依主題選用 |
| `get_style_guide_tags` | 取得風格標籤，供後續 `get_style_guide` 使用 |
| `get_style_guide(tags, name)` | 依標籤或名稱取得風格指南，用於畫面／網站／app 設計 |
| `batch_get(patterns, nodeIds)` | 用 pattern 或 node id 批次讀取節點，探索 .pen 結構 |
| `batch_design(operations)` | 執行插入／複製／更新／替換／移動／刪除／圖片等操作 |
| `snapshot_layout` | 檢視節點佈局與矩形，決定插入位置 |
| `get_screenshot(filePath, nodeId)` | 取得節點截圖，視覺驗證設計 |
| `get_variables` | 讀取 .pen 中的變數與主題 |
| `set_variables` | 設定／更新變數與主題 |
| `find_empty_space_on_canvas` | 在畫布上找空白區域（方向與尺寸可指定） |
| `search_all_unique_properties` | 在節點樹上搜尋所有不重複屬性 |
| `replace_all_matching_properties` | 在節點樹上批次替換符合條件的屬性 |

---

## 建議工作流程

### 1. 開始前：取得編輯狀態

- 若已知目前有開啟 .pen：先呼叫 **`get_editor_state(include_schema)`** 取得畫布與選取資訊。
- 若沒有開啟的檔案：用 **`open_document("new")`** 開新檔，或 **`open_document("/path/to/file.pen")`** 開既有檔。

### 2. 取得設計規範

- 呼叫 **`get_guidelines(topic)`**，依任務選主題，例如：
  - **`web-app`**：從零設計網頁應用
  - **`landing-page`**：落地頁／活動頁
  - **`mobile-app`**：手機 app 或行動版網頁
  - **`design-system`**：用既有設計系統組件組畫面
  - **`code`**：從 .pen 產出程式碼時的規範
  - **`tailwind`**：使用 Tailwind v4 時的實作規範
  - **`table`**：表格／儀表板

### 3. 設計與修改

- 使用 **`batch_design`** 撰寫操作清單（Insert / Copy / Update / Replace / Move / Delete / Generate image）。
- 單次建議 **不超過約 25 個操作**；大版面可拆成多個 `batch_design`。
- 每個 Insert / Copy / Replace 都要有 **binding 名稱**，後續操作才能用該名稱當 parent。
- 需要找空白處時可搭配 **`find_empty_space_on_canvas`**、**`snapshot_layout`**。

### 4. 探索既有設計

- **`batch_get`**：用 `patterns`（如 `reusable: true`、`type`、`name`）或 `nodeIds` 查節點。
- 讀取設計系統時，可一次列出多個元件，避免逐個讀取。
- 大文件：先讀頂層或已知 id，再依需要讀子節點，並控制 `readDepth` / `searchDepth` 避免資料過大。

### 5. 視覺驗證

- 用 **`get_screenshot(filePath, nodeId)`** 對節點截圖，檢查版面、對齊與視覺是否正確。

### 6. 從設計到程式碼

- 先呼叫 **`get_guidelines("code")`** 取得「從 .pen 產程式碼」的規則。
- 再依 .pen 的節點結構與元件，對應到目標專案的元件與樣式（例如 React + CSS 或 Tailwind），產出或調整程式碼。

---

## batch_design 操作簡述

- **I(parent, nodeData)**：Insert，插入單一節點；可再用 binding 當後續的 parent。
- **C(path, parent, copyNodeData)**：Copy，複製節點；要改複製後的子節點請用 `descendants`，不要用後面的 U 去改原節點的子 id。
- **U(path, updateData)**：Update，更新既有節點屬性；path 可為 `instanceId/slotId` 形式。
- **R(path, nodeData)**：Replace，整顆節點替換。
- **M(nodeId, parent, index?)**：Move，搬移節點。
- **D(nodeId)**：Delete，刪除節點。
- **G(nodeId, "ai"|"stock", prompt)**：對 frame/rectangle 節點套用 AI 或圖庫圖片 fill；先 I 出 frame 再 G。

---

## 注意事項

- **勿用 Read / Grep 讀 .pen**：內容為加密，僅能透過 Pencil MCP 工具存取。
- **路徑**：`open_document`、`batch_design`、`batch_get`、`get_screenshot` 等可選填 `filePath` 指定要操作的 .pen；未填時以目前開啟的檔案為準。
- **檔案位置**：可將 .pen 放在專案下的目錄（例如 `designs/`）以便版控與路徑引用。

---

*本說明僅描述 Pencil MCP 的用法，不涉及特定專案的實作細節。*
