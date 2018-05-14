# JSON Parsers benchmarks

Simple JSON parsers benchmark. This repo is to check efficiency of custom JSON parsers that may be used to workaorund big int limitation in browsers.

Test environment:
* Operating system: Ubuntu 17.10
* Node: v8.11.1
* Processor: Intel® Core™ i7-6700HQ CPU @ 2.60GHz × 8 
* RAM: 32GB

Test results:
* Native parse - easy1 x 598,801 ops/sec ±1.00% (97 runs sampled)
* VSCode parse - easy1 x 74,570 ops/sec ±0.63% (92 runs sampled)
* json-bigint parrse - easy1 x 122,338 ops/sec ±0.81% (95 runs sampled)
* json-bignum parse - easy1 x 119,684 ops/sec ±0.45% (97 runs sampled)

#### License 
MIT 