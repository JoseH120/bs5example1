import { createApp, ref} from vue;

const app = createApp({

    setup(){
        const message = ref("hello world");
    
    
        return {
            message,
        }
    }
});

app.mount('#app');