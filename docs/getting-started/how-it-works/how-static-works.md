# How Static Analysis Works

The Contrast static analyzer works on source code and bytecode. The goal of this analyzer is to produce the primary critical issues that matter and avoid results overload.

The analyzer performs a few basic steps:
- Scan code to identify entry points that are exposed.
- Trace and connect code that connects to these entry points.
- Report critical vulnerabilities that occur along these paths.

Rather than connecting all possible code paths, this approach retuns high confidence, high severity results very quickly. This produces both **dataflow issues**, such as injection and deserialization attacks as well as **semantic issues**, such as improper annotations or access checks.

Additional details are available in the [Scan whitepaper](https://www.contrastsecurity.com/white-paper-modern-application-security-scanning).