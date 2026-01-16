---
title: "Typescript 5.4 Beta"
description: "Novas features anunciadas incluindo melhorias em inferência de tipos e performance de build."
date: "2024-01-30"
category: "Languages"
featured: false
tags: ["TypeScript", "Microsoft"]
source: "Microsoft DevBlogs"
sourceUrl: "https://devblogs.microsoft.com/typescript/"
---

A Microsoft liberou o beta do TypeScript 5.4. Uma das funcionalidades mais esperadas é a preservação de refinamentos em closures (NoInfer utility type).

```typescript
function createStreetLight<C extends string>(colors: C[], defaultColor: NoInfer<C>) {
    // ...
}
createStreetLight(["red", "yellow", "green"], "blue"); // Error!
```

Isso ajuda a prevenir erros sutis em APIs genéricas.
