import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface StyleMessage {
  color?: string
  border?: string
}

@Component({
  selector: 'app-form-pass',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-pass.component.html',
  styleUrl: './form-pass.component.scss'
})

export class FormPassComponent {
  password = new FormControl('');


  setStyleEasyField(password: string | null): StyleMessage {
    if (password) {
      switch (true) {
        case (password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%/^&*(),.?":{}|<>]).+$/
        ) && password?.length >= 8):
          return { color: 'green' }
        case (password.match(/^(?=.*[a-zA-Z])(?=.*[!@#$/%^&*(),.?":{}|<>])|(?=.*[a-zA-Z])(?=.*\d)|(?=.*\d)(?=.*[!@#$/%^&*(),.?":{}|<>])$/
        ) && password?.length >= 8):
          return { color: 'yellow' }
        case (password.match(/^(?:\d+|[a-zA-Z]+|[!@#$%/^&*(),.?":{}|<>]+)$/) && password?.length >= 8):
          return { color: 'red' }
        case (password?.length < 8):
          return { color: 'red' }
      }
    }
    return { color: 'grey' }
  }
  setStyleMiddleField(password: string | null): StyleMessage {
    if (password) {
      switch (true) {
        case (password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$/%^&*(),.?":{}|<>]).+$/
        ) && password?.length >= 8):
          return { color: 'green' }
        case (password.match(/^(?=.*[a-zA-Z])(?=.*[!@#$/%^&*(),.?":{}|<>])|(?=.*[a-zA-Z])(?=.*\d)|(?=.*\d)(?=.*[!@#$/%^&*(),.?":{}|<>])$/
        ) && password?.length >= 8):
          return { color: 'yellow' }
        case (password?.length < 8):
          return { color: 'red' }
        default: return { color: 'grey' }
      }
    }
    return { color: 'grey' }
  }
  setStyleStrongField(password: string | null): StyleMessage {
    if (password) {
      switch (true) {
        case (password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$/%^&*(),.?":{}|<>]).+$/
        ) && password?.length >= 8):
          return { color: 'green' }
        case (password?.length < 8):
          return { color: 'red' }
        default: return { color: 'grey' }
      }
    }
    return { color: 'grey' }
  }
}
