# Y-Combinator
This is a simple implementation of mathematical combinators in the Javascript language.
With Y Combinator, you can describe **recursions using only Javascript anonymous functions**.

This is lambda notations for
```
Y = λg. (λx. g (x x)) (λx. g (x x))
```


## Examples

### Factorial

```Javascript
const Fact = f => x => (x === 0 ? 1 : x * f(x - 1));

Y(Fact)(2) // 2
Z(Fact)(2) // 2
```

### Fibonacci

```Javascript
const Fib = f => x => (x < 2 ? 1 : f(x - 2) + f(x - 1));

Y(Fib)(10) // 89
Z(Fib)(10) // 89
```

[Wikipedia](https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator)