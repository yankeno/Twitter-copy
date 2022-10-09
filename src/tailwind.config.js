module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.tsx",
        "./resources/**/*.vue",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            body: [
                "Hiragino Kaku Gothic ProN",
                "Helvetica Neue",
                "Helvetica",
                "Arial",
                "Hiragino Sans",
                "ヒラギノ角ゴシック",
                "メイリオ",
                "Meiryo",
                "YuGothic",
                "Yu Gothic",
                "ＭＳ Ｐゴシック",
                "MS PGothic",
                "sans-serif",
            ],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
