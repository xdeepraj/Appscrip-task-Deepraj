"use client";

import { ProductListProvider } from "@/context/ProductListContext";

export default function ClientProviders({ children }) {
  return <ProductListProvider>{children}</ProductListProvider>;
}
