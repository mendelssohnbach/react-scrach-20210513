# このプロジェクトについて

**React.sj** の学習を行う。

学習のために以下のYouTube動画の実装を行う。

[React Crash Course for Beginners 2021](https://www.youtube.com/watch?v=Dorf8i6lCuk)

## わからないこと

なぜ？ `<Modal />` を先に読み込み `<Backdrop />` を後に読み込むのは？

`<Backdrop />` が全画面を専有するので、  `<Modal />` クリックできなくなりそう！

```javascript
onst App = () => {
  return (
    ...
      <Modal />
      <Backdrop />
    </div>
  );
};
```

## 同じ結果になるコード

```javascript
  const deleteHandler = () => {
    setModalIsOpen(true);
  };
  ...
        // modalIsOpenが
      // false -> 左オペランドを返す
      // true -> 右オペランドを返す
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}

      {!modalIsOpen || <Modal />}
      {!modalIsOpen || <Backdrop />}
```
