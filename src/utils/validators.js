export const required = value => (value ? undefined : 'Напишите текст задачи')

const maxLength = max => value =>value && value.length > max ? `Вы превысили максимальные ${max} символов` : undefined

export const maxLength50 = maxLength(50)