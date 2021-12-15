<template>
  <div class="w-full flex justify-center items-center">
    <div class="relative w-1/2">
      <div class="absolute top-2 left-3">
        <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
      </div>
      <input
        type="text"
        class="
          h-10
          w-full
          pl-10
          pr-20
          rounded-lg
          z-0
          border border-gray-200
          focus:shadow focus:outline-none
        "
        :value="modelValue"
        @input="updateValue"
        placeholder="Search..."
      />
      <!-- <div class="absolute top-1 right-2">
        <button
          class="h-8 w-20 text-white rounded-lg bg-blue-500 hover:bg-blue-600"
        >
          Search
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    modelValue: String,
    // modelValue: { type: [String, Number, Date], default: "" },
  },
  setup(props, { emit }) {
    function updateValue(event) {
      emit("update:modelValue", event.target.value);
    }

    return { updateValue };
  },
};
</script>