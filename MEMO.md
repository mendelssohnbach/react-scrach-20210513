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

## 親子間のイベント連携

親コンポーネントで呼び出した子コンポーネント。
子コンポーネントで発生するイベント。

状態を管理するには？


```javascript:Todo.jsx
  // state定義
  const [modalIsOpen, setModalIsOpen] = useState(false);
...
  // イベント定義
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };
  ...
    return (
      // イベントをpropsとして属性定義
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
```

```javascript:Modal.jsx
// props受け取り
const Modal = (props) => {
  // 関数定義:propsに.onCancelイベント付与
  const cancelHandler = () => {
    props.onCancel();
  };

  // 関数定義:propsに.onConfirmイベント付与
  const confirmHandler = () => {
    props.onConfirm();
  };

  return (
  ...
      // onClick属性にcancelHandler関数設定
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      // onClick属性にconfirmHandler関数設定
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
```

