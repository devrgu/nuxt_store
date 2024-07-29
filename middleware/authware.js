export default function({store, redirect}){
    const auth = store.getters['auth/userAuth']
    if(!auth){
        store.commit('auth/dialogAuthOn');
        redirect('/');
        
    }
}