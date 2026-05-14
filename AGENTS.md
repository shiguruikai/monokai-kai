# Monokai Kai - Agent Guide

このプロジェクトは、VSCode用のカスタムカラーテーマ「Monokai Kai」です。
VSCodeのデフォルトダークテーマをベースにしつつ、Monokai風の配色を適用しています。

## プロジェクト構造

- `package.json`: 拡張機能のメタデータとテーマの登録。
- `themes/Monokai_Kai-color-theme.json`: テーマの本体。色定義とトークンごとのスタイル設定が含まれます。
- `examples/`: 各言語のサンプルファイル。テーマの表示確認用。
- `README.md`: ユーザー向けのドキュメント。配色の一覧が含まれています。

## 主要な配色方針

`README.md`に基づき、以下の色が主要な役割を持っています：

- **背景色**: `#1e1e1e`（黒）
- **文字色（デフォルト）**: `#dfdfdf`（白）
- **キーワード**: `#ff6188`（赤）
- **関数／メソッド**: `#a9dc76`（緑）
- **クラス**: `#78dce8` （青／太字）
- **インターフェース／タグ**: `#30c0ff`（濃い青／太字）
- **プロパティ／属性**: `#ace8ff`（薄い青）
- **パラメーター**: `#fc9867`（橙）
- **定数／数値**: `#ab9df2`（紫）
- **コメント**: `#858585`（灰）
- **ドキュメントコメント**: `#629755`（濃い緑）

## 開発とテスト

開発時のテーマの確認方法:

1. `themes/Monokai_Kai-color-theme.json` を編集する。
2. VSCodeの「デバッグ開始」（F5）を実行して、拡張機能開発ホストを立ち上げる。
3. 開発ホスト内で `examples/` フォルダ内のファイルを開き、シンタックスハイライトを確認する。

## リリース手順

1. **バージョンの更新**: `package.json` の `version` フィールドを更新する。
2. **変更履歴の更新**: `CHANGELOG.md` に新バージョンの変更内容を追記する。
3. **タグ付けとコミット**:
   - `release: vX.X.X` というメッセージでコミットを作成する。
   - `git tag vX.X.X` でタグを付与する。
   - `git push origin master --follow-tags` でリモートに反映する。
4. **パッケージの作成**: `vsce package` コマンドを使用して `.vsix` パッケージを作成する。
5. **動作確認**: 作成された `.vsix` をインストールし、配色の意図通りであるか最終確認を行う。
6. **マーケットプレイスへの公開**: `vsce publish` コマンドを使用して VS Code Marketplace に公開する。
   - パーソナルアクセストークンの作成方法は[公式ドキュメント](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token)に従う。

## 注意事項

- このテーマは `semanticHighlighting: true` を有効にしています。
- 配色の変更を行う際は、`README.md` のカラーテーブルも合わせて更新することを検討してください。
