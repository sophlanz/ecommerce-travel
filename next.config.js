const path = require('path')
const withImages= require('next-images')
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
      /*app was unable to read .png files error*/
      config.module.rules.push(
        {
          test: /\.(png|jpeg|jpg|gif|svg)$/,
          use: {
            loader: "file-loader"
          },
        }
      ),
      
      config.module.rules.push({
        
            test: /\.mp4$/,
            use: 'file-loader?name=videos/[name].[ext]',
     
      })
  
      return config
    },
    
  };  
  module.exports = withImages({
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          /*allow all subdomains as well */
          hostname: 'excursion-escape.up.railway.app**',
           pathname: '/images/**',
        },
      ],
      disableStaticImages: true,
      
        domains: ['excursion-escape.up.railway.app'],
    },
    webpack(config, options) {
        return config;
    }
});



