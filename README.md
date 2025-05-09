# Hatpepper

- 位置情報から周辺の店舗を検索する「コンソールアプリケーション」
- 「リクルートWebサービス」の「グルメサーチAPI」を利用


- **Program**: エントリーポイント。`SearchRestaurantController` を生成し、実行を開始する。
- **SearchRestaurantController**: プレゼンテーション層とユースケース層の橋渡しを担当するコントローラー。
- **SearchRestaurant**: アプリケーション（ユースケース）層。位置情報取得と外部サービス呼び出しをまとめる。
- **GeoCoordinator**: デバイスゲートウェイ。端末の位置情報を返す。
- **GourmetService**: Hotpepper API ゲートウェイ。グルメ情報を取得する。
- **Location / GourmetSearchResult**: ドメインのレコード。データ構造を定義する。
- **RestaurantViewModel / SearchRestaurantView**: プレゼンテーション層。ユースケースの結果をビュー向けに変換・描画する。



