// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
export function modifyAName({commit}, name) { // commit 提交；name即为点击后传递过来的参数，此时是 'A餐馆'
    return commit ('modifyAName', name)
}
export function modifyBName({commit}, name) {
    return commit ('modifyBName', name)
}

// ES6精简写法
// export const modifyAName = ({commit},name) => commit('modifyAName', name)