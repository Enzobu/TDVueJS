<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-sm-12">
                <div class="row d-flex align-items-center">
                    <div class="col-sm-6 d-flex text-center">
                        <p>{{ textHome }}</p>
                    </div>
                    <div class="col-sm-6 ">
                        <img class="img rounded-4 shadow-lg" src="{{ imageURLHome }}" alt="">
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
        textHome: '',
        imageURLHome: '',
    };
  }
};
</script>

<style>
    img {
        object-fit: cover;
        width: 90%;
    }

    .footer {
        background-color: rgb(231, 231, 231);
    }

    p {
        text-align: justify;
    }
</style>