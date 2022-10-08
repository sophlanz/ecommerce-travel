const path = require('path')
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "./src/sass/utilities/variables.scss";`
      },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      }),
      config.module.rules.push({
        
            test: /\.mp4$/,
            use: 'file-loader?name=videos/[name].[ext]',
     
      })
  
      return config
    },
  };  
    
