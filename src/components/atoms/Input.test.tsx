import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Input from "./Input";

// 今回テストしたいのはInputコンポーネントの挙動
describe("Input", () => {
  // 1. Input が画面に表示されるか
  it("Input が画面に表示されるか", () => {
    // このコンポーネントを仮の画面に表示して、テストで使えるようにする
    render(<Input value="" onChange={() => {}} placeholder="タスクを入力" />);
    // expect(...): 「この値が◯◯になっているか？」を調べる枠組み
    expect(screen.getByPlaceholderText("タスクを入力")).toBeInTheDocument();
  });

  // 2. ユーザーが入力したときに onChange が呼ばれるか
  it("ユーザーが入力したときに onChange が呼ばれるか", () => {
    const handleChange = vi.fn();
    // このコンポーネントを仮の画面に表示して、テストで使えるようにする
    render(<Input value="" onChange={handleChange} placeholder="何か入力" />);
    // あとで使うので、placeholderで要素を取得しておく
    const inputElement = screen.getByPlaceholderText("何か入力");
    // fireEvent.changeはchangeイベント（入力内容が変わった）」を発生させる命令
    fireEvent.change(inputElement, { target: { value: "買い物" } });
    // さっき作った関数（handleChange）が1回呼ばれたか
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

