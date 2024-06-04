## Intersection Observer について

- 監視するタイミング

  - 読み込み時に監視開始
  - ターゲットが画面に入ったときに callback が呼び出される
  - ターゲットが画面から出たときに callback が呼び出される
  - unobserve()で監視終了

- デフォルトの option 設定

  - threshold: 0
    - ターゲットが少しでも画面内に入ったら callback を呼び出す
  - root: null
    - ルートをブラウザに設定
  - rootMargin: '0px'
    - ルート領域の調整なし

- entry

  - intersectionRatio: 現在どのくらい交差しているか
  - isIntersecting: 現在交差しているか
  - target: ターゲットの要素

## JavaScript メモ

- 変数宣言は変数を使用するコードより手前でする必要が**ある**
  - アロー関数も同じ
- 関数宣言は関数を使用するコードより手前でする必要は**ない**
