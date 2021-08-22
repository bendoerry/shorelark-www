# Shorelark Web Interface

This uses the `create-wasm-app` [`npm init` template](https://github.com/rustwasm/create-wasm-app) from [The Rust and WebAssembly Working Group](https://rustwasm.github.io)

## About

This repository contains the web interface for  [`shorelark`](https://github.com/bendoerry/shorelark)

## Building

Please see the build instructions for [`shorelark`](https://github.com/bendoerry/shorelark)

## Usage

When loading the web interface you should see a square with "birds", the triangles, and "food", the dots. This is the "world" of the simulation, and you can watch the shorelarks collecting food. Every once in a while a new generation will be trained, using the amount of food gathered as a fitness score. If you wish to speed up this process you can press the train button to skip ahead to the next generation.