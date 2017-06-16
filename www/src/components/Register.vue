<template>
    <div class="register">
        <div class="container-fluid">
            <h1 class="dungeon">Create Your Account</h1>
            <div class="jumbotron">
                <div class="well well-sm custom-well-small">
                    <form @submit.prevent="register">
                        <div class="input-group">
                            <span class="input-group-addon fa fa-user-circle"></span>
                            <div class="col-10">
                                <input type="text" class="form-control" v-model="user.name" required placeholder="first name">
                            </div>
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon fa fa-envelope-open"></span>
                            <div class="col-10">
                                <input type="email" class="form-control" v-model="user.email" required placeholder="email">
                            </div>
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon fa fa-star"></span>
                            <div class="col-10">
                                <input type="password" class="form-control" v-model="user.password" required placeholder="password">
                            </div>
                        </div>
                        <div class="form group row">
                            <div class="col-10">
                                <button class="btn btn-default" type="submit">SUBMIT</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <h2 class="dungeon">Already a Dungeon Master... LOGIN
                <router-link to='/login'>here</router-link>!</h2>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'register',
        data() {
            return {
                user: {}
            }
        },
        computed: {},
        methods: {
            register() {
                this.$store.dispatch('register', this.user)
            }
        },
        components: {}
    }

</script>


<style scoped>
    .dungeon {
        color: #c70505;
        font-family: 'Metal Mania';
    }
    
    h1 {
        color: black;
        text-align: center;
        font-family: 'Asap', sans-serif;
        font-weight: bold;
        text-shadow: 1px 1px 1px gold;
    }
    
    button {
        margin-top: 10px;
        font-weight: bold;
    }
    
    span {
        text-align: left;
    }
    
    .well.custom-well-small {
        width: 335px;
        margin: 0 auto;
        text-align: center;
        background-color: rgba(100, 100, 100, 0);
        border-color: rgba(100, 100, 100, 0);
    }
</style>