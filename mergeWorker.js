import init, { merge_exposed } from "./pkg/pdf_merge2.js";

let wasmReady = false;

async function initWasm() {
  await init(); // initializes the WASM module
  wasmReady = true;
  postMessage({ type: "ready" });
}

initWasm();

onmessage = async (event) => {
  if (!wasmReady) {
    postMessage({ type: "error", message: "WASM not ready yet" });
    return;
  }

  const { files, fileName } = event.data;

  try {
    const mergedPdf = merge_exposed(files);

    postMessage({ type: "done", pdf: mergedPdf, fileName }, [mergedPdf.buffer]);
  } catch (err) {
    if (err instanceof WebAssembly.RuntimeError) {
      postMessage({ type: "error", message: "Unexpected WASM exception: " + err.message });
      console.error(err);
    } else {
      postMessage({ type: "error", message: err });
    }
  }
};
