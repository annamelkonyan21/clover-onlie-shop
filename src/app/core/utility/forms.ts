import {AbstractControl, FormGroup} from "@angular/forms";

export function validate(form: FormGroup): boolean {
    if (!form.valid) {
        Object.keys(form.controls).forEach(field => {
            const control: AbstractControl | null = form.get(field);
            control && control.markAsTouched({onlySelf: true});
        });
    }
    return form.valid;
}
