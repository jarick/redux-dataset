import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import flow from 'rollup-plugin-flow'

const env = process.env.NODE_ENV
const config = {
  input: 'src/index.js',
  plugins: [flow()],
}

if (env === 'es' || env === 'cjs') {
  config.output = { format: env }
  config.plugins.push(
    babel()
  )
}

if (env === 'development' || env === 'production') {
  config.output = { format: 'umd' }
  config.name = 'ReduxMeteorSubscriptions'
  config.plugins.push(
    nodeResolve({
      jsnext: true
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  )
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config
