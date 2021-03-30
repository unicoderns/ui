<template>
  <div>
    <p>
      <UiBtnClose />
      <UiBtnClose :disabled="true" />
    </p>
    <p class="bg-dark">
      <UiBtnClose :invert="true" />
      <UiBtnClose :invert="true" :disabled="true" />
    </p>
    <p>
      <UiBtnClose type="submit" ariaLabel="This is a submit button" />
    </p>
  </div>
</template>

<style scoped>
p {
  padding: 8px;
}
</style>
