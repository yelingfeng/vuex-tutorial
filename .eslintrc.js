// http://eslint.org/docs/user-guide/configuring
const globalVas = [
    '$',
    '_',
    'G6',
    'createjs',
    'TweenMax',
    'BMap',
    'd3',
    'echarts',
    'moment',
    'require','console','window','document','test','expect','process','describe']
const getEslintVarsGlobals = ()=> {
    let gObj = {};
    globalVas.map( v => {
        gObj[v] = true
    })
    return gObj
}

const eslintConfig  = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    globals: getEslintVarsGlobals(),
    env: {
        browser: true,
    },
    extends: 'vue',
    // add your custom rules here
    'rules': {
        "max-len": [1, {"code": 150}],
        "quotes": [1, "single", {
            "allowTemplateLiterals": true
        }],
        "eqeqeq": [1, "smart"],
        // 缩进4个空格 swtich case缩进
        "indent": [2, 4, {"SwitchCase": 1,"VariableDeclarator": 1}],
        // 要求或禁止使用分号代替
        "semi": [0, "always"],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        //是否验证变量需要用const
        'prefer-const': 0,
        "no-unused-vars": [2, {
            "vars": "all",
            "args": "after-used" // 最后一个参数必须使用。如：一个函数有两个参数，你使用了第二个参数，ESLint 不会报警告。
        }],
    }
}


module.exports = eslintConfig
