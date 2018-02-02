<template>
  <div>
    <record></record>
    <phone></phone>
    <keep-alive>
      <vform></vform>
    </keep-alive>
  </div>
</template>

<script>
import record from "./record.vue";
import phone from "./phone.vue";
import vform from "./form.vue";
export default {
  data() {
    return {};
  },
  components: {
    record: record,
    phone: phone,
    vform: vform
  }
};
</script>

<style lang="scss" scoped>

</style>
