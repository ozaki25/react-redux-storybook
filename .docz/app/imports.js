export const imports = {
  'src/components/atoms/Button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-atoms-button-index" */ 'src/components/atoms/Button/index.mdx'),
}
