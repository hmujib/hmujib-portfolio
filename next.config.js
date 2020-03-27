module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/jointhepact': { page: '/[project]'},
      '/portfolio': { page: '/[project]'},
      '/buchanans-rebuild': { page: '/[project]'},
    }
  },
}