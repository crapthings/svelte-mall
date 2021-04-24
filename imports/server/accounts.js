Accounts.onCreateUser(function ({ password, ...options }, user) {
  return { ...user, ...options }
})
