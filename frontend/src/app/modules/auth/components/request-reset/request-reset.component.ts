import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core';


@Component({
    selector: 'app-request-reset',
    templateUrl: './request-reset.component.html',
    styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
    public form = {
        email: null
    };

    public errors = [];
    public error = null;

    constructor(private auth: AuthService,
    ) {
    }

    ngOnInit() {
        // document.body.className = 'gray-bg';
    }


    onSubmit() {

        // this.auth.sendPasswordResetLink(this.form).subscribe(
        //     data => {
        //         this.errors = [];
        //         this.handleResponse(data);
        //     },
        //     error => this.handelError(error)
        // );
    }


    handleResponse(data) {

        this.form.email = null;


    }

    handelError(error) {
        if (error.error.errors) {
            this.error = null;
            this.errors = error.error.errors;
        } else {
            this.errors = [];
            this.error = error.error.error;
            console.log(error.error.error);
        }


    }

}
