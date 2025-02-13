import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Sheriff StackBlitz Starter</h1>

    <p>
      This application showcases how Sheriff enforces boundary rules. It defines a
      <strong>quiz domain</strong>, structured into four module types: <strong>data</strong>,
      <strong>feature</strong>, <strong>model</strong>, and <strong>ui</strong>.
    </p>

    <p>
      Additionally, there are two shared modules for reusable functionality.
    </p>

    <p>
      Sheriff operates in <strong>barrel-less mode</strong>, meaning there is no
      <code>index.ts</code> file to define exposed files. Instead, encapsulated
      files are specified within an <strong>internal folder</strong> inside each module.
    </p>

    <pre>
  . (root)
└── src
  └── app
    ├── quiz
      ├── data (type:data)
      ├── feature (type:feature)
      ├── model (type:model)
      └── ui (type:ui)
    └── shared
      ├── forms (domain:shared)
      └── util (domain:shared)
</pre>

    <p>
      For more details, visit the
      <a target="_blank" href="https://sheriff.softarc.io/">official documentation</a>.
    </p>

    <a target="_blank" href="https://sheriff.softarc.io/"><img src="https://sheriff.softarc.io/img/logo.png"
                                                               title="Sheriff Logo" alt="Sheriff Logo"></a>
  `,
  styles: `img {max-width: 250px;}`,
})
export class AppComponent {
}
