# How Integrated Analysis Works

Integrated analysis works by placing statements into running code using the safe and appropriate technique for each language:
- Java uses Instrumentation
- .NET uses Profiling
- Node uses function wrapping
- Go uses compiled delegation
- and so on...

When code is loaded, the agent leaves most code alone.
For security-sensitive methods the agent will add a statement to the beginning or end of a method:

```bytecode title="Before"
ALOAD 1
INVOKESTATIC Ljava.lang.System.println(Ljava.lang.String;)
RETURN
```

```bytecode title="After"
ALOAD 1
INVOKESTATIC Lcom.contrastsecurity.IsItSafe(Ljava.lang.String;)
ALOAD 1
INVOKESTATIC Ljava.lang.System.println(Ljava.lang.String;)
RETURN
```

Having security as part of the bytecode enables several optimizations:
- Security checks only run on relevant methods. Files are checked for File attacks rather than SQL attacks. Defenses can avoid unnecessary decoding/encoding checks by integrating into the encoder/decoder.
- Security checks undergo JIT optimizations, making them faster over time.
- Developers do not need to modify any existing code.