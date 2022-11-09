/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union
  
  ### Question
  
  Implement the built-in Exclude<T, U>
  
  > Exclude from T those types that are assignable to U
  
  For example:
  
  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```
  
  > View on GitHub: https://tsch.js.org/43
*/


/* _____________ Your Code Here _____________ */

// Distributive Conditional Types: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
// When conditional types act on a generic type, they become distributive when given a union type.
// the following type definition, when union types, is distributed across those unions

type MyExclude<T, U> =
  T extends U ? never : T

type X = MyExclude<'a' | 'b' | 'c', 'a'> 
type Y = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/

