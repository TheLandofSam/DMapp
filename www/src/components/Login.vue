<template>
    <div class="login">
        <div class="container-fluid">
        <div>
            <h1 class="dungeon">Dungeon Master</h1>
        </div>
            <div class= "jumbotron">
            <div class="well well-sm custom-well-small">
                <form @submit.prevent="login">
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
            <h2 class="dungeon">Become a Dungeon Master... REGISTER
                <router-link to='/register'>here</router-link>!</h2>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'login',
        data() {
            return {
                user: {}
            }
        },
        computed: {},
        methods: {
            login() {
                this.$store.dispatch('login', this.user)
            }
        },
        components: {}
    }

</script>


<style>
    .dungeon{
        color: #c70505;
        font-family: 'Metal Mania';
    }
    form{

    }
    .jumbotron{
        background-color: rgba(200, 200, 200, 0);
    }
    .h1, h1 {
        text-align: center;
        font-size: 60px;                
        font-weight: bold;
        text-shadow: 1px 1px 1px gold;
    }

    input {
        color: black;        
        margin-bottom: 10px;
        font-size: 14px;
    }

    button {
        margin-top: 10px;
        font-weight: bold;        
    }

    span {
        color: black;
        text-align: left;
    }

    .well.custom-well-small {
        width: 335px;
        margin: 0 auto;
        text-align: center;
        background-color: rgba(100, 100, 100, 0);
        border-color: rgba(100, 100, 100, 0);
    }

    h2 {
        text-align: center;        
        text-shadow: .1px .1px .1px gold;
    }

    a {
        color: #c70505;
        text-shadow: .1px .1px .1px gold;
    }
    a:hover{
        color: red;
    }
    body {
    background-image: url(../image/mapbackground.jpg);
    background-attachment: fixed;
    background-size: cover;
    }
    .fullscreen{
      background: rgba(61, 22, 0, .8);
      position: absolute;
      top:0;
      bottom:0;
      left: 0;
      right: 0;
    }
</style>