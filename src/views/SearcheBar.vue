<template>
    <section class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="login-panel bg-white text-left">
                    <div class="alert alert-primary" role="alert" :style="{opacity: isAlertShow ? 1 : 0}">
                        <small>waiting for result.</small>
                        <loader-component width="30"></loader-component>
                    </div>
                    <h1 class="display-4 font-weight-bold">Movie Similar</h1>
                    <br>
                    <form action="">
                        <div class="form-group">
                            <input type="text" v-model="moviename" class="form-control" placeholder="movie name">
                        </div>
                        <br>
                        <div class="form-group d-flex justify-content-center">
                            <button class="btn btn-primary w-25" id="login" @click.prevent="login" v-if="!isLoggingIn">Login</button>
                            <button class="btn btn-primary w-25" disabled @click.prevent="login" v-if="isLoggingIn"><loader-component width="30"></loader-component></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import LoaderComponent from '../components/LoadingComponent'
import { setTimeout } from 'timers';
export default {
    components: { LoaderComponent },
    data() {
        return {
            isLoggingIn: false,
            isAlertShow: false,
            moviename : null
        }
    },
    methods: {

        login() {
            this.isLoggingIn = true
            setTimeout(() => {
                this.isLoggingIn = false
                this.isAlertShow = true
                setTimeout(() => this.redirect(), 500)
            }, 500)
        },

        redirect() {
            this.$router.push({name: 'Movies',params: { moviename: this.moviename }})
        }
    }
}
</script>

<style lang="scss">
.widget {
    margin: 0;
    height: unset;
}
.login-panel {
    position: relative;
    padding: 100px 0;
    .alert {
        opacity: 0;
        position: absolute;
        width: 100%;
        top: 100px;
        transition: all .5s;
        &.alert-primary {
            background-color: #007BFF;
            color: #fff;
            font-size: 18px;
            border: none;
        }
        .widget {
            position: absolute;
            right: 5px;
            top: 0;
            margin: 10px;
        }
    }
}
</style>