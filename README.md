# Hatpepper

- 位置情報から周辺の店舗を検索する「コンソールアプリケーション」
- 「リクルートWebサービス」の「グルメサーチAPI」を利用


- **Program**: アプリケーションのエントリーポイントで、`SearchRestaurantController` のインスタンスを生成し、検索処理を開始します。
- **SearchRestaurantController**: ユーザー入力を受け取り、検索ユースケース(`SearchRestaurant`)を実行し、その結果をビュー向けに変換して表示する役割を担います。
- **SearchRestaurant**: アプリケーション層（ユースケース）にあたり、現在地の取得と外部のHotpepper API呼び出しをまとめて実行し、検索結果を返します。
- **GeoCoordinator**: デバイスゲートウェイとして、端末のGPSやOS API、ユーザーからの入力を使って現在の緯度・経度を取得します。
- **GourmetService**: Hotpepper APIゲートウェイとして、渡された位置情報をもとに周辺店舗のデータ（名称、住所、ジャンルなど）を外部サービスから取得します。
- **Location / GourmetSearchResult**: ドメインモデルのレコード型。`Location` は緯度・経度などの位置情報を定義し、`GourmetSearchResult` はAPIから取得した店舗情報の構造を定義します。
- **RestaurantViewModel / SearchRestaurantView**: プレゼンテーション層で、ユースケースからの出力を画面表示用に変換する`RestaurantViewModel`と、コンソールに結果を描画する`SearchRestaurantView`で構成されます。



