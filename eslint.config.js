import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
  },
  {
    rules: {
      'antfu/if-newline': 'off',
    },
  },
)
