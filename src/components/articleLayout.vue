<template>
  <div id="acticle">
    <div class="acticleTitle">
      <h4>{{$route.meta.title}}</h4>
    </div>
    <div class="acticleCont">
      <div class="section">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>