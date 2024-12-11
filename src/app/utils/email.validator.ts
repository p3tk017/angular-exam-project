import { ValidatorFn } from "@angular/forms";

export function EmailValidator(domains: string[]): ValidatorFn{
    const domainStr = domains.join("|")
    const regExp = new RegExp(`[A-Za-z0-9]{5,}@gmail.(${domainStr})`);
    
    return (control) => {
        const isInvalid = control.value === "" || regExp.test(control.value)
        
        return isInvalid ? null : {EmailValidator: true}
    }
}