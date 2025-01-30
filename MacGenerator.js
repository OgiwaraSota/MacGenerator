// メニューのリスト
const menu = [

    //夜マック
    { name: "倍ビッグマック", price: 680, attribute: 0 },
    { name: "倍ダブチ", price: 630, attribute: 0 },
    { name: "倍てりやき", price: 500, attribute: 0 },
    { name: "倍フィレオフィッシュ", price: 500, attribute: 0 },
    { name: "倍チキンフィレオ", price: 510, attribute: 0 },
    { name: "倍てりやきチキンフィレオ", price: 520, attribute: 0 },
    { name: "倍ベーコンレタス", price: 510, attribute: 0 },
    { name: "倍えびフィレオ", price: 530, attribute: 0 },
    { name: "倍マックチキン", price: 280, attribute: 0 },
    { name: "倍スパチキ", price: 300, attribute: 0 },
    { name: "倍チキチー", price: 340, attribute: 0 },
    { name: "倍エグチ", price: 340, attribute: 0 },
    { name: "倍ハンバーガー", price: 270, attribute: 0 },
    { name: "倍チーズバーガー", price: 300, attribute: 0 },

    //期間限定バーガー
    { name: "チーズダブルてりやき", price: 530, attribute: 0 },
    { name: "ザク切りポテト&肉厚ビーフ コク旨ガーリックマヨ", price: 540, attribute: 0 },
    { name: "メキシカンチーズチキン", price: 490, attribute: 0 },

    //通常バーガー
    { name: "ビッグマック", price: 480, attribute: 0 },
    { name: "炙り醤油風ダブル肉厚ビーフ", price: 580, attribute: 0 },
    { name: "炙り醤油風ベーコントマト肉厚ビーフ", price: 570, attribute: 0 },
    { name: "ダブチ", price: 430, attribute: 0 },
    { name: "てりやき", price: 400, attribute: 0 },
    { name: "フィレオフィッシュ", price: 400, attribute: 0 },
    { name: "チキンフィレオ", price: 410, attribute: 0 },
    { name: "てりやきチキンフィレオ", price: 420, attribute: 0 },
    { name: "ベーコンレタス", price: 410, attribute: 0 },
    { name: "えびフィレオ", price: 430, attribute: 0 },
    { name: "マックチキン", price: 180, attribute: 0 },
    { name: "スパチキ", price: 200, attribute: 0 },
    { name: "チキチー", price: 240, attribute: 0 },
    { name: "エグチ", price: 240, attribute: 0 },
    { name: "ハンバーガー", price: 170, attribute: 0 },
    { name: "チーズバーガー", price: 200, attribute: 0 },

    //夜マックセット
    { name: "倍ビッグマックセット", price: 950, attribute: 1 },
    { name: "倍ダブチセット", price: 900, attribute: 1 },
    { name: "倍てりやきセット", price: 770, attribute: 1 },
    { name: "倍フィレオフィッシュセット", price: 770, attribute: 1 },
    { name: "倍チキンフィレオセット", price: 780, attribute: 1 },
    { name: "倍てりやきチキンフィレオセット", price: 790, attribute: 1 },
    { name: "倍ベーコンレタスセット", price: 780, attribute: 1 },
    { name: "倍えびフィレオセット", price: 800, attribute: 1 },
    { name: "倍マックチキンセット", price: 600, attribute: 1 },
    { name: "倍スパチキセット", price: 620, attribute: 1 },
    { name: "倍チキチーセット", price: 640, attribute: 1 },
    { name: "倍エグチセット", price: 640, attribute: 1 },

    //期間限定セット
    { name: "チーズダブルてりやきセット", price: 830, attribute: 1 },
    { name: "ザク切りポテト&肉厚ビーフ コク旨ガーリックマヨセット", price: 840, attribute: 1 },
    { name: "メキシカンチーズチキンセット", price: 790, attribute: 1 },

    //通常セット
    { name: "ビッグマックセット", price: 750, attribute: 1 },
    { name: "炙り醤油風ダブル肉厚ビーフセット", price: 850, attribute: 1 },
    { name: "炙り醤油風ベーコントマト肉厚ビーフセット", price: 840, attribute: 1 },
    { name: "ダブチセット", price: 700, attribute: 1 },
    { name: "てりやきセット", price: 670, attribute: 1 },
    { name: "フィレオフィッシュセット", price: 670, attribute: 1 },
    { name: "チキンフィレオセット", price: 680, attribute: 1 },
    { name: "てりやきチキンフィレオセット", price: 690, attribute: 1 },
    { name: "ベーコンレタスセット", price: 680, attribute: 1 },
    { name: "えびフィレオセット", price: 700, attribute: 1 },
    { name: "マックチキンセット", price: 500, attribute: 1 },
    { name: "スパチキセット", price: 520, attribute: 1 },
    { name: "チキチーセット", price: 540, attribute: 1 },
    { name: "エグチセット", price: 540, attribute: 1 },

    //期間限定サイドメニュー
    { name: "食べくらべポテナゲ大", price: 620, attribute: 2 },
    { name: "食べくらべポテナゲ特大", price: 970, attribute: 2 },
    { name: "こく深にんにくソース", price: 40, attribute: 2 },
    { name: "3種チーズソーズ", price: 40, attribute: 2 },

    //通常サイドメニュー
    { name: "ポテナゲ大", price: 600, attribute: 2 },
    { name: "ポテナゲ特大", price: 950, attribute: 2 },
    { name: "スパイシーチキンマックナゲット 黒胡椒ガーリック", price: 280, attribute: 2 },
    { name: "ポテト(S)", price: 190, attribute: 2 },
    { name: "ポテト(M)", price: 330, attribute: 2 },
    { name: "ポテト(L)", price: 380, attribute: 2 },
    { name: "ナゲット(5ピース)", price: 260, attribute: 2 },
    { name: "ナゲット(15ピース)", price: 740, attribute: 2 },
    { name: "サイドサラダ", price: 330, attribute: 2 },
    { name: "えだまめコーン", price: 280, attribute: 2 },
    { name: "シャカチキ(チキンのみ)", price: 200, attribute: 2 },
    { name: "シャカチキ(レッドペッパー)", price: 200, attribute: 2 },
    { name: "シャカチキ(チェダーチーズ)", price: 200, attribute: 2 },
    { name: "バーベキューソース", price: 40, attribute: 2 },
    { name: "マスタードソース", price: 40, attribute: 2 },

    //ドリンク
    { name: "コカ・コーラ", price: 240, attribute: 3 },
    { name: "コカ・コーラゼロ", price: 240, attribute: 3 },
    { name: "スプライト", price: 240, attribute: 3 },
    { name: "ファンタグレープ", price: 240, attribute: 3 },
    { name: "ファンタメロン", price: 240, attribute: 3 },
    { name: "Qoo 白ぶどう", price: 240, attribute: 3 },
    { name: "爽健美茶", price: 240, attribute: 3 },
    { name: "アイスティー(ストレート)", price: 240, attribute: 3 },
    { name: "アイスティー(レモン)", price: 240, attribute: 3 },
    { name: "アイスティー(ミルク)", price: 240, attribute: 3 },
    { name: "ホットティー(ストレート)", price: 240, attribute: 3 },
    { name: "ホットティー(レモン)", price: 240, attribute: 3 },
    { name: "ホットティー(ミルク)", price: 240, attribute: 3 },
    { name: "アイスティー(ミルク)", price: 240, attribute: 3 },
    { name: "野菜生活", price: 260, attribute: 3 },
    { name: "ミニッツメイドオレンジ", price: 170, attribute: 3 },
    { name: "ミニッツメイドアップル100", price: 150, attribute: 3 },
    { name: "ミルク", price: 240, attribute: 3 },
    { name: "黒烏龍茶", price: 290, attribute: 3 },

    //ハッピーセット
    { name: "ハッピーセット チキンマックナゲット", price: 520, attribute: 4 },
    { name: "ハッピーセット チーズバーガー", price: 520, attribute: 4 },
    { name: "ハッピーセット ハンバーガー", price: 490, attribute: 4 },
    { name: "ハッピーセット プチパンケーキ", price: 490, attribute: 4 },

    //期間限定スイーツ
    { name: "マックフルーリー ニューヨークチーズケーキ", price: 320, attribute: 5 },
    { name: "ホワイトチョコミルクパイ", price: 210, attribute: 5 },
    { name: "生チョコクリームパイ", price: 210, attribute: 5 },

    //通常スイーツ
    { name: "マックフルーリー 超オレオクッキー", price: 340, attribute: 5 },
    { name: "マックシェイク バニラ", price: 340, attribute: 5 },
    { name: "マックシェイク チョコレート", price: 340, attribute: 5 },
    { name: "マックシェイク ストロベリー", price: 340, attribute: 5 },
    { name: "マックフルーリー オレオクッキー", price: 290, attribute: 5 },
    { name: "ソフトツイスト", price: 140, attribute: 5 },
    { name: "マックフロート グレープ", price: 340, attribute: 5 },
    { name: "マックフロート メロン", price: 340, attribute: 5 },
    { name: "マックフロート コーク", price: 340, attribute: 5 },
    { name: "マックフロート コーヒー", price: 340, attribute: 5 },
    { name: "ホットアップルパイ", price: 140, attribute: 5 },
    { name: "プチパンケーキ", price: 250, attribute: 5 },
];

// 予算と制限数を取得
function getOrderSettings() {
    const budget = parseInt(document.getElementById("budget").value, 10) || 0;
    const limits = {
        0: parseInt(document.getElementById("burgerLimit").value, 10),
        1: parseInt(document.getElementById("setLimit").value, 10),
        2: parseInt(document.getElementById("sideLimit").value, 10),
        3: parseInt(document.getElementById("drinkLimit").value, 10),
        4: parseInt(document.getElementById("happySetLimit").value, 10),
        5: parseInt(document.getElementById("sweetLimit").value, 10),
    };
    return { budget, limits };
}

// ランダムに注文を決定
function getRandomOrder(settings) {
    let { budget, limits } = settings;
    let order = [];
    let totalCost = 0;
    let categoryCount = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    while (totalCost < budget) {
        let item = menu[Math.floor(Math.random() * menu.length)];

        // カテゴリ上限チェック
        if (categoryCount[item.attribute] >= limits[item.attribute]) {
            continue;
        }

        // 予算オーバーチェック
        if (totalCost + item.price > budget) {
            break;
        }

        // 注文に追加
        order.push(item);
        totalCost += item.price;
        categoryCount[item.attribute]++;
    }

    return { order, totalCost };
}

// 注文結果を表示
function displayOrder(orderData, settings) {
    const resultDiv = document.getElementById("orderResult");
    resultDiv.innerHTML = "";

    let { budget, limits } = settings;

    if (budget < 1000) {
        resultDiv.innerHTML = "<p>1000円以上を入力しろと書いてあるだろ</p>";
        return;
    }

    let listHtml = "<ul>";
    orderData.order.forEach(item => {
        listHtml += `<li>${item.name} : ${item.price}円</li>`;
    });
    listHtml += `</ul><p>合計: ${orderData.totalCost}円</p>`;

    resultDiv.innerHTML = listHtml;
}

// 注文処理
function startOrder() {
    // 予算入力欄の値を取得
    const budgetInput = document.getElementById("budget").value;

    // 金額入力欄に「ロッテリア」が入力された場合
    if (budgetInput.toLowerCase() === "ロッテリア") {
        window.location.href = "shine.html";  // ロッテリア入力で遷移
        return;  // 処理を終了
    }
    const settings = getOrderSettings();
    const orderData = getRandomOrder(settings);
    displayOrder(orderData, settings);
}
