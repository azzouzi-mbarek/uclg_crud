import { AbstractControl } from "@angular/forms";

export class CustomValidators {
    static updateUnique(list: any[], id: number) {
        return (control: AbstractControl): { [key: string]: any } | null => {

            const i = list.findIndex(e => e.name === control.value && e.id !== id);
            return i !== -1 ? { 'update_unique': true } : null;

        };
    }
}
