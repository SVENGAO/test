
const path = require('path')
const fs = require('fs')

module.exports = class TestNow {
    getJestSource(sourcePath = path.resolve('./')) {
        const testPath = `${sourcePath}/__test__`
        if (!fs.existsSync(testPath)) {
            fs.mkdirSync(testPath)
        }
        //遍历代码文件
        let list = fs.readdirSync(sourcePath)
        list
            //添加完整路径
            .map(v => `${sourcePath}/${v}`)
            //过滤文件
            .filter(v => fs.statSync(v).isFile())
            //排除测试代码
            .filter(v => v.indexOf('.spec') === -1)
            .map(v => this.genTestFile(v))
    }
    genTestFile(filename) {
        console.log('filename', filename)

    }

    getTestSource(methodName, classFile, isClass = false) {
        console.log('getTestSource:', methodName)
        return `test('${'TEST ' + methodName}', () => {
        const ${isClass ? '{' + methodName + '}' : methodName}=require('${'../' + classFile}')
        const ret =${methodName}()
        //expect(ret)
        //.toBe('test return')})`
    }
}