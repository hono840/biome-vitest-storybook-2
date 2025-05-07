import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("ボタンに渡したテキストが表示されるか", () => {
    render(<Button>クリック</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("クリック");
  });

  it("ボタンがクリックされた時onClickが呼ばれるか", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>押す</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
