<template>
  <div class="flex flex-col w-1/3 mx-auto">
    <input
      type="text"
      :value="username"
      class="border shadow border-blue-200 rounded-md p-2 mb-3"
      placeholder="username"
      @input="$emit('update:username', $event.target.value)"
    />
    <input
      type="email"
      :value="email"
      @input="$emit('update:email', $event.target.value)"
      class="border shadow border-blue-200 rounded-md p-2 mb-3"
      placeholder="email"
    />
    <input
      type="number"
      :value="mobile"
      @input="$emit('update:mobile', $event.target.value)"
      class="border shadow border-blue-200 rounded-md p-2 mb-3"
      placeholder="mobile"
    />
  </div>
</template>

<script>
export default {
  name: "CustomMultipleInput",
  props: {
    username: String,
    email: String,
    mobile: String,
  },
  // or we can call a function on input and update it in setup function
  //   setup(props, context) {
  //     const updateEmail = (event) => {
  //       context.emit("update:email", event.target.value);
  //     };
  //  return { updateEmail }
  //   },
};
</script>

<style>
</style>