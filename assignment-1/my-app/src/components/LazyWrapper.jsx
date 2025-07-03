
"use client";

import dynamic from "next/dynamic";

export default function LazyWrapper(dynamicImportFn) {
  return dynamic(dynamicImportFn, {
    loading: () => <p>Loading...</p>,
    ssr: false, 
  });
}
