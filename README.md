# sam-nested-layer

... an error occurs when running `sam local invoke` on a function with a layer ARN parameter.

To repro:

```
sam build
sam local invoke Nested/Function
```

Result:

```
Error: Layer is an Invalid Layer Arn.
```