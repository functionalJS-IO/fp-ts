---
title: DistributiveLattice.ts
nav_order: 23
parent: Modules
---

# Overview

A `DistributiveLattice` must satisfy the following laws in addition to `Lattice` laws:

- Distributivity for meet: `a ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c)`
- Distributivity for join: `a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c)`

---

<h2 class="text-delta">Table of contents</h2>

- [DistributiveLattice (interface)](#distributivelattice-interface)
- [getMinMaxDistributiveLattice (function)](#getminmaxdistributivelattice-function)

---

# DistributiveLattice (interface)

**Signature**

```ts
export interface DistributiveLattice<A> extends Lattice<A> {}
```

Added in v1.4.0

# getMinMaxDistributiveLattice (function)

**Signature**

```ts
export const getMinMaxDistributiveLattice = <A>(O: Ord<A>): DistributiveLattice<A> => ...
```

Added in v1.4.0
