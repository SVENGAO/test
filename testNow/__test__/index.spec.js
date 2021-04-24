const fs = require('fs')
const path = require('path')

test('测试代码生成', () => {
    const src = new (require('../index'))()
    const ret = src.getTestSource('fun', 'class')
    expect(ret)
        .toBe(`test('TEST fun', () => {
        const fun=require('../class')
        const ret =fun()
        //expect(ret)
        //.toBe('test return')})`
)
})


// test('集成测试，测试生成测试代码文件', () => {
//     //准备环境

//     //删除测试文件夹
//     fs.rmdirSync(__dirname + '/data/__test__', {
//         recursive: true
//     })
//     const src = new (require('../index'))
//     scr.getJestSource(__dirname + '/data')

// })