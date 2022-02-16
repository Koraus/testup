<template>
<div class="header">
   <div class="header__top"></div>
    <div class="header__bottom">
     <img class="header__logo" src="../assets/img/logo-header.svg" alt="">

  </div>
</div>

</template>

<style lang="scss" scoped>
.header  {
    box-sizing: border-box;


    &__top{
    background: var(--color_HF) ;
    width: 100%;
    height: 53px;
    padding-left: 374px;
    padding-right: 374px;
    box-sizing: border-box;
    }
    &__bottom{
    box-sizing: border-box;
    background: var(--liniar_gr) ;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    display: flex;
    padding-left: 374px;
    padding-right: 374px;
    
    }
    &__logo{
        max-width: fit-content;

    }


}


</style>