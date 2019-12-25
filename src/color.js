export default {
    bind(el, bindings, vnode){
        //el.style.color = bindings.value
        console.log('bind')
        const arg = bindings.arg


        el.style[arg] = bindings.value

        const fontModifier = bindings.modifiers['font']
    },

    inserted(el, bindings, vnode) {
        console.log('inserted')
    },

    update(el, bindings, vnode, oldVnode) {
        console.log('update')
    },

    componentUpdated(el, bindings, vnode, oldVnode) {
        console.log('componentUpdated')
    },

    unbind(){
        console.log('unbind')
    }
}
