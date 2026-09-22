import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  if (typeof document !== "undefined") {
    cleanup();
  }
});

if (typeof window !== "undefined") {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: query === "(prefers-reduced-motion: reduce)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  Object.defineProperty(window, "scrollTo", {
    writable: true,
    value: vi.fn(),
  });

  Object.defineProperty(window, "requestAnimationFrame", {
    writable: true,
    value: vi.fn((callback) =>
      window.setTimeout(() => {
        callback(performance.now());
      }, 0),
    ),
  });

  Object.defineProperty(window, "cancelAnimationFrame", {
    writable: true,
    value: vi.fn((requestId) => {
      window.clearTimeout(requestId);
    }),
  });
}
