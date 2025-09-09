# Offline PDF Merger

The **Offline PDF Merger** allows you to merge PDF files directly in your browser without uploading them anywhere.  
It uses the Rust crate [`lopdf`](https://crates.io/crates/lopdf), compiled to WebAssembly.  

Try it here: [https://pdfmerge.mhh.dev/](https://pdfmerge.mhh.dev/)

## Run Locally

1. Build the WebAssembly files:
   ```bash
   wasm-pack build --target web
   ```
2. Serve the files with any HTTP server, for example:
   ```bash
   python3 -m http.server
   ```