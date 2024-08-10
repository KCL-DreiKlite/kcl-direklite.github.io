# A Simple Blog of Klite Kuo

網址：https://kcl-dreiklite.github.io/

## Introduction

這是一個小小的網站，用來寫自我介紹、開發經驗等，同時也是我用來練習寫 Frontend 和 GitHub Actions 的 Side Project。

裡面不會有非常敏感的個資（翻 commit history 也不會有。相信我，我翻過了），在此之上您完全可以把這當作一個非正式的履歷來看。

## About this project

這個專案使用 `Vite Vue` + `pnpm` 開發。主要開發的 branch 在 `develop`；`master` 僅作為發佈用的 branch，不會直接在此之上開發。

當 `master` 被更新後（ex: 合併 `develop`）會觸發 GitHub Actions: `deploy-gh-pages`。該 workflow 會在虛擬環境下建置網站，並
push 到 `gh-pages` 這個 branch。建置成功與否及 GitHub Actions
運行狀況可以到[這裡](https://github.com/KCL-DreiKlite/kcl-dreiklite.github.io/actions)看。

> 注意：建置好的檔案會以 git subtree 的形式被 force push 到 `gh-pages`，因此在 `gh-pages` 上看不到歷史 commit 是正常的。以及在
> workflow 創建的 runner 內的 local commit 不會被 push 到 `master`，建置好的檔案在上傳完畢後會跟著 runner 被消滅。
>
> Workflow 的詳細執行內容可以參考 `.github/workflows/deploy-gh-pages.yml`

如果您發現程式碼內有什麼臭蟲，或者是有地方過於 redundant 可以 optimize 的話，歡迎開 Issue 跟我討論。
