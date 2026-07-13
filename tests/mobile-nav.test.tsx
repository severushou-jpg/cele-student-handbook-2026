import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SiteHeader } from "@/components/site-header";

vi.mock("next/link", () => ({ default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a href={String(href)} {...props}>{children}</a> }));

describe("mobile navigation", () => {
  it("opens and closes from the menu button", () => {
    render(<SiteHeader />);
    const button = screen.getByRole("button", { name: "打开菜单" });
    fireEvent.click(button);
    expect(screen.getByRole("navigation", { name: "移动端导航" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "关闭菜单" }));
    expect(screen.queryByRole("navigation", { name: "移动端导航" })).not.toBeInTheDocument();
  });
});
