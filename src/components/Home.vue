<template>
    <div id="main">
        <header>
            <h2 id="title">GutWEB</h2>
        
        </header>
        <div class="container wrap">

            <div class="row">
                <div class="col">
                    <button class="btn btn-md btn-dark w-100" @click="showInfo(1)" v-if="show==0 || show==2 || show==3">Genshindle</button>
                    <button class="btn btn-md  btn-dark w-100" @click="showInfo(0)" v-if="show==1">Hide info</button>
                    <div class="info-show w-100" v-if="show==1">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    Application name:
                                </div>
                                <div class="col">
                                    Genshindle
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Application type:
                                </div>
                                <div class="col">
                                    WEB App
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Technologies used:
                                </div>
                                <div class="col">
                                    Vue & NodeJS
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    AWS:
                                </div>
                                <div class="col">
                                    Amplify & Lambda
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Database:
                                </div>
                                <div class="col">
                                    MongoDB / JSON Files
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Status:
                                </div>
                                <div class="col">
                                    Released
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Release date:
                                </div>
                                <div class="col">
                                    March 2023
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Version:
                                </div>
                                <div class="col">
                                    1.2
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Website link:
                                </div>
                                <div class="col">
                                    <a href="https://genshindle.com" aria-label="Website" target="_blank" rel="noopener noreferrer">www.genshindle.com</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Short description:
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Wordle like game with Genshin Impact characters.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button class="btn btn-md  btn-dark w-100" @click="showInfo(2)" v-if="show==0 || show==1 || show==3">GutMovies</button>
                    <button class="btn btn-md  btn-dark w-100" @click="showInfo(0)" v-if="show==2">Hide info</button>
                    <div class="info-show w-100" v-if="show==2">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    Application name:
                                </div>
                                <div class="col">
                                    GutMovies
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Application type:
                                </div>
                                <div class="col">
                                    WEB App
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Technologies used:
                                </div>
                                <div class="col">
                                    Vue & NodeJS
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    AWS:
                                </div>
                                <div class="col">
                                    Amplify & Elastic Beanstalk
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Database:
                                </div>
                                <div class="col">
                                    JSON Files
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Status:
                                </div>
                                <div class="col">
                                    Working on
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Release date:
                                </div>
                                <div class="col">
                                    -
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Version:
                                </div>
                                <div class="col">
                                    1.0
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Website link:
                                </div>
                                <div class="col">
                                    <a href="https://www.gutmovies.pl" aria-label="Website" target="_blank" rel="noopener noreferrer">www.gutmovies.pl</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Short description:
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Application for Twitch streamers that allows watching synchronized videos together with others.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row last">
                <div class="col">
                    <button class="btn btn-md  btn-dark w-100" @click="showInfo(3)" v-if="show==0 || show==1 || show==2">Zrobswiece.pl</button>
                    <button class="btn btn-md  btn-dark w-100" @click="showInfo(0)" v-if="show==3">Hide info</button>
                    <div class="info-show w-100" v-if="show==3">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    Application name:
                                </div>
                                <div class="col">
                                    Zrobswiece.pl
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Application type:
                                </div>
                                <div class="col">
                                    WEB Shop
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Technologies used:
                                </div>
                                <div class="col">
                                    Prestashop
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Database:
                                </div>
                                <div class="col">
                                    MySQL
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Status:
                                </div>
                                <div class="col">
                                    Released
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Release date:
                                </div>
                                <div class="col">
                                    October 2022
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Version:
                                </div>
                                <div class="col">
                                    2.0
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Website link:
                                </div>
                                <div class="col">
                                    <a href="https://www.zrobswiece.pl" aria-label="Website" target="_blank" rel="noopener noreferrer">www.zrobswiece.pl</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Short description:
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Shop created with Prestashop. First big work.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <footer>
        <div class="footer-text">Made by: Gutknecht</div>
    </footer>
</template>

<script>

export default {
    data(){
        return{
            show: 0
        }
    },
    async created(){

    },
    methods:{
        showInfo(value){
            this.show = value
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
.btn{
    border-radius: 0px;
}
#main{
    
    max-width: 500px;
    min-width: 350px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: "Roboto Slab";
    overflow-y: auto;
  
    margin-bottom: 10%;
}
.footer-text{
   margin-left: 1%;
}
footer{
  width: 100vw;
  background-color: #2a2a2a;
  position: absolute;
  bottom: 0;
  left: 0;

}

header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    left: 0;
    width: 100%;
    text-align: center;
    min-height: 100px;
    
}
.wrap{
    
    text-align: center;
    height: 70%;
    width: 100%;

}
.wrap .row{
    margin-bottom: 3%;
}

#title{
    
}
.info-show{
    background-color: #2a2a2a;
    overflow: auto;
}
.info-show .container{
    padding-top: 3%;
    border: 1px solid #212529;
    border-collapse: collapse;
    
}
</style>