module.exports = {
    mode:'production',
    module: {
        rules: [
            {
                test: /\.scss/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
            
        
    }
}