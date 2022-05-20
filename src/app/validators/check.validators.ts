import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function customValidator(control: AbstractControl):{[key:string]:any} | null{
//     const check = /\@|\#|\$|\%|\^|\&/g.test(control.value)
//     return check ? {nameNotMatch: {value:control.value}} : null
// }

export function customValidator(regexp: RegExp): ValidatorFn{
    return (control:AbstractControl):{[key:string]:any} | null=>{
            const check = regexp.test(control.value)
            return check ? {nameNotMatch: {value:control.value}} : null
    }
}

export function passwordValidator(control: AbstractControl):{[key:string]:any} | null{
    const pass = control.get('pass');
    const confirmPass = control.get('confirmPass');
    if (pass && pass.pristine || (confirmPass && confirmPass.pristine)){
        return null;
    }
    return pass && confirmPass && pass.value !== confirmPass.value ? {misMatch: true} : null
}
