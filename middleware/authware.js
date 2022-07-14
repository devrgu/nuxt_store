export default function({store, redirect}){
    const auth = store.getters['auth/userAuth']
    if(!auth){
        redirect('/')
    }
}