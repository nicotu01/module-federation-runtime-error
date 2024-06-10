import topLevelAwait from "vite-plugin-top-level-await";
import federation from "@originjs/vite-plugin-federation";
export default {
    plugins: [
        federation({
            name: 'remote-app',
            filename: 'remoteEntry.js',
            exposes: {
                './Counter': './src/counter.ts',
            },
        }),
        topLevelAwait({
          // The export name of top-level await promise for each chunk module
          promiseExportName: "__tla",
          // The function to generate import names of top-level await promise in each chunk module
          promiseImportName: i => `__tla_${i}`
        })
    
    ]
}
