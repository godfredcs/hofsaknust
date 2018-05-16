<template>
    <div>
        <app-header />

        <app-intro />
    </div>
</template>

<script>
import Header from '@/components/common/Header';
import Intro from '@/components/common/Intro';

export default {
  components: {
      appHeader: Header,
      appIntro: Intro
  }
}
</script>

<style>

</style>


