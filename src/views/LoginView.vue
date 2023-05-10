<template>
  <h2>Вход</h2>
  <UiForm @submit="handleSubmit" submit-text="Войти">
    <UiFormGroup label="Email">
      <UiInput name="email" type="email" placeholder="demo@email" />
    </UiFormGroup>
    <UiFormGroup label="Пароль">
      <UiInput name="password" type="password" placeholder="password" />
    </UiFormGroup>
    <template #append>
      Нет аккаунта?
      <RouterLink :to="{ name: 'register' }">Зарегистрируйтесь</RouterLink>
    </template>
  </UiForm>
</template>

<script>
export default {
  name: 'LoginView',

  methods: {
    handleSubmit() {
      const query = this.$route.query
      this.$router.push(query?.from || { name: 'index' })
    },
  },
}
</script>
