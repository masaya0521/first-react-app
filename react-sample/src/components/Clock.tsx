import React, { useState, useEffect } from "react";

//　タイマーが呼び出される周期を１秒とする
const UPDATE_CYCLE = 1000;

// localstrageで使用するキー
const KEY_LOCALE = "KEY_LOCALE";

enum Locale {
  US = "es-US",
  JP = "ja-JP",
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
};

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  //タイマーをセットするための副作用
  useEffect(() => {
    //　タイマーのセット
    const timer = setInterval(() => {
      setTimestamp(new Date());
    }, UPDATE_CYCLE);

    //クリーンアップ関数を渡し、アンマウント時にタイマーの解除する
    return () => {
      clearInterval(timer);
    };
    // 初期描写のみ実行する
    // 空配列を渡している場合は初期描写のみ反応する
  }, []);

  // localstrageから値を読み込むための副作用
  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale));
    }
  }, []);

  // localeが変化した時に、localstrageに値を保存するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
    // 依存配列にlocaleを渡し、localeが変化するたびに実行できるようにする
  }, [locale]);

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>: {timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  );
};
