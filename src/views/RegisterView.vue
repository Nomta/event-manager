<template>
  <h2>Регистрация</h2>
  <UiForm @submit="handleSubmit" submit-text="Зарегистрироваться">
    <UiFormGroup label="Email">
      <UiInput name="email" type="email" />
    </UiFormGroup>
    <UiFormGroup label="Имя">
      <UiInput name="fullname" type="text" />
    </UiFormGroup>
    <UiFormGroup label="Пароль">
      <UiInput name="password" type="password" />
    </UiFormGroup>
    <UiFormGroup label="Повтор пароля">
      <UiInput type="password" />
    </UiFormGroup>
    <UiFormGroup>
      <UiCheckbox label="Я согласен с условиями" />
    </UiFormGroup>
    <template #append>
      Уже есть аккаунт?
      <RouterLink :to="{ name: 'login' }">Войдите</RouterLink>
    </template>
  </UiForm>
</template>

<script>
export default {
  name: 'RegisterView',

  methods: {
    handleSubmit() {
      this.$router.push({ name: 'login' })
    },
  },
}
</script>

<style scoped>
.page-auth {
  max-width: 23.5rem;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
}

.page-auth__title {
  text-align: center;
}

.form {
  margin: 0;
}

.form__buttons {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-top: 40px;
}

.form__append {
  margin-top: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}
</style>
