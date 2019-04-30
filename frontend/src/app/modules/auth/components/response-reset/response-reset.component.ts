import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core';


@Component({
    selector: 'app-response-reset',
    templateUrl: './response-reset.component.html',
    styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

    public form = {
        email: null,
        password: null,
        password_confirmation: null,
        resetToken: null
    };

    public error = [];

    constructor(private route: ActivatedRoute,
        private auth: AuthService,
        private router: Router,
    ) {

        route.queryParams.subscribe(params => {
            this.form.resetToken = params['token'];
        });
    }

    ngOnInit() {
        // document.body.className = 'gray-bg'
    }

    onSubmit() {
        // this.auth.changePassword(this.form).subscribe(
        //     data => this.handleResponse(data),
        //     error => this.handelError(error)
        // )
        //     ;
    }


    handleResponse(data) {


        this.router.navigateByUrl('/login')
    }

    handelError(error) {

        this.error = error.error.errors;

    }

}
