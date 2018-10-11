export const imports = {
  'src/components/molecules/Table/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-molecules-table-index" */ 'src/components/molecules/Table/index.mdx'),
  'src/components/atoms/Button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-atoms-button-index" */ 'src/components/atoms/Button/index.mdx'),
}
