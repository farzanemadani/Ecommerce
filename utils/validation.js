export function isPhoneNumber(value) {
    const reg = /^0?(9[0-9]{9})$/
    return reg.test(value)
}